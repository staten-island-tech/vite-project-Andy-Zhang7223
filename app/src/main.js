import "./style.css";
import { setupCounter } from "./counter.js";
import { setupmodes } from "./modesbtn.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Welcome To The Worst Meme Generator!</h1>
    <h2>~in the worldddd!~</h2>
    <div class="card">
      <button id="modesbtn" type="button></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
setupmodes(document.querySelector("#modesbtn"));
