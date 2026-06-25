// ============================================================
// 🔐 AUTHENTICATION MODULE
// Handles login, register, logout, session checks
// ============================================================

const Auth = {
  // Check if user is on a protected page (app/ folder)
  isProtectedPage: function() {
    return window.location.pathname.includes('/app/');
  },

  // Get base path for redirects
  getBasePath: function() {
    if (this.isProtectedPage()) return '../';
    return './';
  },

  // Initialize auth state listener
  init: function() {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in
        if (!Auth.isProtectedPage() && window.location.pathname.match(/index\.html$|\/$/)) {
          // On login page but already logged in -> redirect to app
          window.location.href = Auth.getBasePath() + 'app/today.html';
        }
      } else {
        // User is NOT signed in
        if (Auth.isProtectedPage()) {
          // On protected page -> redirect to login
          window.location.href = '../index.html';
        }
      }
    });
  },

  // Register with email/password
  register: function(email, password, displayName) {
    return auth.createUserWithEmailAndPassword(email, password)
      .then(function(cred) {
        // Update display name
        return cred.user.updateProfile({ displayName: displayName })
          .then(function() {
            // Create user document in Firestore
            return Auth.createUserDoc(cred.user, displayName);
          });
      });
  },

  // Login with email/password
  login: function(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  },

  // Login with Google
  loginWithGoogle: function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider)
      .then(function(result) {
        // Check if user doc exists, create if not
        var user = result.user;
        return db.collection('users').doc(user.uid).get()
          .then(function(doc) {
            if (!doc.exists) {
              return Auth.createUserDoc(user, user.displayName || user.email.split('@')[0]);
            }
          });
      });
  },

  // Logout
  logout: function() {
    return auth.signOut().then(function() {
      window.location.href = Auth.isProtectedPage() ? '../index.html' : './index.html';
    });
  },

  // Create initial user document in Firestore
  createUserDoc: function(user, displayName) {
    return db.collection('users').doc(user.uid).set({
      displayName: displayName || user.email.split('@')[0],
      email: user.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      progress: {
        currentDay: 1,
        currentWeek: 1,
        daysStudied: 0,
        totalMinutes: 0,
        streak: 0,
        longestStreak: 0,
        lastStudyDate: null
      },
      vocabulary: { wordsKnown: [], wordsReview: [] },
      grammar: { completed: [], scores: {} },
      listening: { sessions: 0, scores: [] },
      reading: { textsRead: [], scores: [] },
      quiz: { sessions: 0, scores: [] },
      daily: { completedSteps: {}, daysCompleted: [] },
      alphabet: { lettersLearned: [] }
    });
  },

  // Get current user
  getCurrentUser: function() {
    return auth.currentUser;
  }
};

// Auto-init
Auth.init();
