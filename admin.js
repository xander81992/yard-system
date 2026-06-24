import { db } from "./firebase.js";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";

// TRAILERS
onSnapshot(collection(db, "trailers"), (snap) => {
  let html = "";

  snap.forEach(d => {
    const t = d.data();

    html += `
      <div class="card">
        ${t.trailerNumber} | ${t.status} | ${t.warehouse} / ${t.dock}
      </div>
    `;
  });

  document.getElementById("trailers").innerHTML = html;
});

// USERS
onSnapshot(collection(db, "users"), (snap) => {
  let html = "";

  snap.forEach(d => {
    const u = d.data();

    if (u.status === "pending") {
      html += `
        <div class="card">
          ${u.name} (${u.role})
          <button onclick="approve('${d.id}')">Approve</button>
        </div>
      `;
    }
  });

  document.getElementById("users").innerHTML = html;
});

window.approve = async function(id) {
  await updateDoc(doc(db, "users", id), {
    status: "active"
  });

  alert("Approved");
};