// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyBmwUmgqOAOTuX8z2t1GT0NkWKRcSnLVIo",
  authDomain: "ait-plus.firebaseapp.com",
  projectId: "ait-plus",
  storageBucket: "ait-plus.appspot.com",
  messagingSenderId: "154209881918",
  appId: "1:154209881918:web:1f850f4f430c1f7d3e666f",
  measurementId: "G-H9L2SR9R16"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
