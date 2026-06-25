// ============================================================
// 🔊 TTS MODULE - German Text-to-Speech
// Uses Web Speech API with de-DE, prefers Google Deutsch voice
// ============================================================

const TTS = {
  voice: null,
  loaded: false,

  init: function() {
    this.loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }
  },

  loadVoices: function() {
    var voices = speechSynthesis.getVoices();
    // Priority: Google Deutsch > any de-DE > any de-*
    this.voice = voices.find(function(v) { return v.name.indexOf('Google Deutsch') >= 0; });
    if (!this.voice) this.voice = voices.find(function(v) { return v.lang === 'de-DE'; });
    if (!this.voice) this.voice = voices.find(function(v) { return v.lang && v.lang.indexOf('de') === 0; });
    this.loaded = voices.length > 0;
  },

  speak: function(text, rate) {
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = rate || 0.8;
    if (this.voice) u.voice = this.voice;
    speechSynthesis.speak(u);
    return u;
  },

  speakSlow: function(text) {
    return this.speak(text, 0.6);
  },

  speakNormal: function(text) {
    return this.speak(text, 0.8);
  },

  speakFast: function(text) {
    return this.speak(text, 1.0);
  },

  stop: function() {
    speechSynthesis.cancel();
  },

  // Spell out a word letter by letter (for alphabet practice)
  spellWord: function(word, delay) {
    var self = this;
    delay = delay || 800;
    var letters = word.split('');
    var i = 0;
    function next() {
      if (i >= letters.length) return;
      self.speak(letters[i], 0.7);
      i++;
      setTimeout(next, delay);
    }
    next();
  }
};

// Auto-init
TTS.init();
