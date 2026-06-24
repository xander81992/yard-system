import { db } from "./firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

onSnapshot(collection(db, "trailers"), (snap) => {
  let html = "";

  snap.forEach(d => {
    const t = d.data();

    html += `
      <div class="card">
        ${t.trailerNumber} | ${t.status} | ${t.warehouse}
      </div>
    `;
  });

  document.getElementById("trailers").innerHTML = html;
});