import { db } from "./firebase.js";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";

onSnapshot(collection(db, "moves"), (snap) => {
  let html = "";

  snap.forEach(d => {
    const m = d.data();

    html += `
      <div class="card">
        <b>${m.trailerNumber}</b><br>
        ${m.fromLocation} → ${m.toLocation}<br>

        <button onclick="done('${d.id}', '${m.trailerNumber}', '${m.toLocation}')">
          Complete
        </button>
      </div>
    `;
  });

  document.getElementById("moves").innerHTML = html;
});

window.done = async function(id) {
  await updateDoc(doc(db, "moves", id), {
    status: "completed"
  });

  alert("Move completed");
};