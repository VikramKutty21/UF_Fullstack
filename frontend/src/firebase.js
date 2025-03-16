// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDE_Q_ZaqdmnHAsjrDOUvjIeuKxApj3oak",
//   authDomain: "react-chat-app-310ba.firebaseapp.com",
//   projectId: "react-chat-app-310ba",
//   storageBucket: "react-chat-app-310ba.firebasestorage.app",
//   messagingSenderId: "670669631117",
//   appId: "1:670669631117:web:3c50206018d107bd1afcc4",
//   measurementId: "G-VLFN097PJ2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE_Q_ZaqdmnHAsjrDOUvjIeuKxApj3oak",
  authDomain: "react-chat-app-310ba.firebaseapp.com",
  projectId: "react-chat-app-310ba",
  storageBucket:  "react-chat-app-310ba.firebasestorage.app",
  messagingSenderId:  "670669631117",
  appId:  "1:670669631117:web:3c50206018d107bd1afcc4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
