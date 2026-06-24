import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

export async function loginUser(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    const ref = doc(db, "users", userCred.user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      alert("No role assigned");
      return;
    }

    const user = snap.data();

    if (user.status !== "active") {
      alert("Account pending approval");
      return;
    }

    if (user.role === "admin") window.location.href = "admin.html";
    if (user.role === "shunter") window.location.href = "shunter.html";
    if (user.role === "customer") window.location.href = "customer.html";

  } catch (err) {
    alert(err.message);
  }
}