// ============================================================
// 📊 PROGRESS MODULE
// Read/write user progress to Firestore (with local cache)
// ============================================================

const Progress = {
  _cache: null,
  _uid: null,
  _saving: false,
  _saveQueue: null,

  // Default user data structure
  _defaults: function() {
    return {
      progress: {
        currentLessonIndex: 0,
        currentDay: 1,
        currentWeek: 1,
        daysStudied: 0,
        totalMinutes: 0,
        streak: 0,
        longestStreak: 0,
        lastStudyDate: null,
        nicosWeg: {}
      },
      vocabulary: { wordsKnown: [], wordsReview: [] },
      grammar: { completed: [], scores: {} },
      listening: { sessions: 0, scores: [] },
      reading: { textsRead: [], scores: [] },
      quiz: { sessions: 0, scores: [] },
      daily: { completedSteps: {}, daysCompleted: [] },
      alphabet: { lettersLearned: [] },
      dailyLogs: {}
    };
  },

  // Load user data (from Firestore, fallback to localStorage cache)
  load: function() {
    var self = this;
    var user = auth.currentUser;
    if (!user) return Promise.resolve(self._defaults());

    self._uid = user.uid;

    // Try localStorage cache first for instant render
    var cached = localStorage.getItem('deutsch_progress_' + user.uid);
    if (cached) {
      try { self._cache = JSON.parse(cached); } catch(e) { self._cache = null; }
    }

    // Then load from Firestore
    return db.collection('users').doc(user.uid).get()
      .then(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          // Merge with defaults to fill any missing fields
          self._cache = self._mergeDeep(self._defaults(), data);
        } else {
          self._cache = self._defaults();
        }
        // Update localStorage cache
        localStorage.setItem('deutsch_progress_' + user.uid, JSON.stringify(self._cache));
        return self._cache;
      })
      .catch(function(err) {
        console.warn('Firestore load failed, using cache:', err);
        if (!self._cache) self._cache = self._defaults();
        return self._cache;
      });
  },

  // Get cached data (synchronous, for immediate use)
  get: function() {
    if (this._cache) return this._cache;
    // Try localStorage
    var user = auth.currentUser;
    if (user) {
      var cached = localStorage.getItem('deutsch_progress_' + user.uid);
      if (cached) {
        try { this._cache = JSON.parse(cached); return this._cache; } catch(e) {}
      }
    }
    return this._defaults();
  },

  // Save user data to Firestore (debounced)
  save: function(data) {
    var self = this;
    if (data) self._cache = data;
    if (!self._uid) return Promise.resolve();

    // Update localStorage immediately
    localStorage.setItem('deutsch_progress_' + self._uid, JSON.stringify(self._cache));

    // Debounce Firestore writes (500ms)
    if (self._saveQueue) clearTimeout(self._saveQueue);
    return new Promise(function(resolve) {
      self._saveQueue = setTimeout(function() {
        self._doSave().then(resolve);
      }, 500);
    });
  },

  _doSave: function() {
    var self = this;
    if (self._saving || !self._uid) return Promise.resolve();
    self._saving = true;

    var saveData = Object.assign({}, self._cache);
    delete saveData.createdAt; // Don't overwrite
    saveData.lastUpdated = firebase.firestore.FieldValue.serverTimestamp();

    return db.collection('users').doc(self._uid).set(saveData, { merge: true })
      .then(function() {
        self._saving = false;
      })
      .catch(function(err) {
        console.error('Save failed:', err);
        self._saving = false;
      });
  },

  // ===== Helper methods for specific progress updates =====

  completeStep: function(stepId, minutes) {
    var data = this.get();
    data.daily.completedSteps[stepId] = true;
    data.progress.totalMinutes = (data.progress.totalMinutes || 0) + (minutes || 0);
    this.save(data);
  },

  uncompleteStep: function(stepId) {
    var data = this.get();
    delete data.daily.completedSteps[stepId];
    this.save(data);
  },

  completeDay: function(dayNum) {
    var data = this.get();
    if (data.daily.daysCompleted.indexOf(dayNum) === -1) {
      data.daily.daysCompleted.push(dayNum);
      data.progress.daysStudied = data.daily.daysCompleted.length;
    }
    // Update streak
    var today = new Date().toISOString().slice(0, 10);
    if (data.progress.lastStudyDate !== today) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      var yStr = yesterday.toISOString().slice(0, 10);
      if (data.progress.lastStudyDate === yStr) {
        data.progress.streak = (data.progress.streak || 0) + 1;
      } else {
        data.progress.streak = 1;
      }
      data.progress.lastStudyDate = today;
      if (data.progress.streak > (data.progress.longestStreak || 0)) {
        data.progress.longestStreak = data.progress.streak;
      }
    }
    this.save(data);
  },

  setCurrentDay: function(dayNum) {
    var data = this.get();
    data.progress.currentDay = dayNum;
    this.save(data);
  },

  learnWord: function(word) {
    var data = this.get();
    if (data.vocabulary.wordsKnown.indexOf(word) === -1) {
      data.vocabulary.wordsKnown.push(word);
    }
    this.save(data);
  },

  completeGrammar: function(lessonId, correct, total) {
    var data = this.get();
    if (data.grammar.completed.indexOf(lessonId) === -1) {
      data.grammar.completed.push(lessonId);
    }
    data.grammar.scores[lessonId] = { correct: correct, total: total, date: new Date().toISOString() };
    this.save(data);
  },

  logListening: function(type, correct, total) {
    var data = this.get();
    data.listening.sessions = (data.listening.sessions || 0) + 1;
    data.listening.scores.push({ type: type, correct: correct, total: total, date: new Date().toISOString() });
    if (data.listening.scores.length > 50) data.listening.scores = data.listening.scores.slice(-50);
    this.save(data);
  },

  completeReading: function(textId, correct, total) {
    var data = this.get();
    if (data.reading.textsRead.indexOf(textId) === -1) {
      data.reading.textsRead.push(textId);
    }
    data.reading.scores.push({ textId: textId, correct: correct, total: total, date: new Date().toISOString() });
    if (data.reading.scores.length > 50) data.reading.scores = data.reading.scores.slice(-50);
    this.save(data);
  },

  logQuiz: function(correct, total) {
    var data = this.get();
    data.quiz.sessions = (data.quiz.sessions || 0) + 1;
    data.quiz.scores.push({ correct: correct, total: total, date: new Date().toISOString() });
    if (data.quiz.scores.length > 50) data.quiz.scores = data.quiz.scores.slice(-50);
    this.save(data);
  },

  learnLetter: function(letter) {
    var data = this.get();
    if (data.alphabet.lettersLearned.indexOf(letter) === -1) {
      data.alphabet.lettersLearned.push(letter);
    }
    this.save(data);
  },

  // Deep merge utility
  _mergeDeep: function(target, source) {
    var output = Object.assign({}, target);
    if (this._isObject(target) && this._isObject(source)) {
      Object.keys(source).forEach(function(key) {
        if (Progress._isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, {[key]: source[key]});
          } else {
            output[key] = Progress._mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, {[key]: source[key]});
        }
      });
    }
    return output;
  },

  _isObject: function(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
};
