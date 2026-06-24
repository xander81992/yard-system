import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhCpX9q1iHWKZ5AbfrJWRpaCWNvKT3nJM",
  authDomain: "yard-system.firebaseapp.com",
  projectId: "yard-system",
  storageBucket: "yard-system.firebasestorage.app",
  messagingSenderId: "42005950110",
  appId: "1:42005950110:web:4de843b6356cb0b3d2958f",
  measurementId: "G-0FKFZL3XE2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// login function
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}
