// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhCpX9q1iHWKZ5AbfrJWRpaCWNvKT3nJM",
  authDomain: "yard-system.firebaseapp.com",
  projectId: "yard-system",
  storageBucket: "yard-system.firebasestorage.app",
  messagingSenderId: "42005950110",
  appId: "1:42005950110:web:4de843b6356cb0b3d2958f",
  measurementId: "G-0FKFZL3XE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
