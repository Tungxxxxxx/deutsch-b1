// ============================================================
// 🔥 FIREBASE CONFIGURATION
// ĐỔI CÁC GIÁ TRỊ NÀY BẰNG FIREBASE CONFIG CỦA BẠN
// Xem README.md để biết cách lấy config
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDoLCnZpsUrcse-Py6o73XFHrtkXMV1tUY",
  authDomain: "deutsch-b1.firebaseapp.com",
  projectId: "deutsch-b1",
  storageBucket: "deutsch-b1.firebasestorage.app",
  messagingSenderId: "977565163163",
  appId: "1:977565163163:web:d9b14dfc114264d943303e",
  measurementId: "G-V7XZQGW0N9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export references
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence({ synchronizeTabs: true }).catch(function(err) {
  if (err.code === 'failed-precondition') {
    console.warn('Firestore persistence: multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('Firestore persistence: browser not supported');
  }
});
