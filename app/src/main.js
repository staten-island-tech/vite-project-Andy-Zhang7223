import "./style.css";
import { setupCounter } from "./counter.js";
// import { setupmodes } from "./modesbtn.js";

const MemeTemplates = [
  { name: "Drake Hotline Bling", img: "https://i.imgflip.com/4/30b1gx.jpg" },
  {
    name: "Gru Plan making",
    img: "https://cdn-useast1.kapwing.com/static/templates/grus-plan-meme-template-full-94c95233.webp",
  },
  {
    name: "Disappointed Man",
    img: "https://a.pinatafarm.com/775x500/a2c9247953/disappointed-guy.jpg",
  },
  {
    name: "The office, they're the same",
    img: "https://en.meming.world/images/en/c/c4/They%E2%80%99re_The_Same_Picture.jpg",
  },
  {
    name: "Pikachu shocked",
    img: "https://www.vice.com/wp-content/uploads/sites/2/2020/04/1588176174179-download-1.jpeg",
  },
  {
    name: "___ or draw 25",
    img: "https://www.tjtoday.org/wp-content/uploads/2021/01/IMG_7504.jpg",
  },
  { name: "I'm once again asking", img: "https://i.imgflip.com/4/3oevdk.jpg" },
  {
    name: "Are you asleep?, Yes now shut up...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQbTReA-2SKGSRVodCQZ8prmKi84RqCa9Rw&s",
  },
  {
    name: "Wow! This is worthless!",
    img: "https://supermeme-space-prd.ams3.cdn.digitaloceanspaces.com/templates/This-is-Worthless.png",
  },
  {
    name: "My heart when...",
    img: "https://pbs.twimg.com/media/E9Ub8UpWQAgEUMW.jpg",
  },
  {
    name: "Shooting from the Moon",
    img: "https://i.pinimg.com/736x/48/61/86/48618695046dd9f6ed4949f024a220f0.jpg",
  },
];

// document.querySelector("#app").innerHTML = `
//   <div>
//     <h1>Welcome To The Worst Meme Generator!</h1>
//     <h2>~in the worldddd!~</h2>
//     <div class="card">
//       <button id="modesbtn" type="button></button>
//     </div>
//     <div class="inputsn'templates">
//       <a herf="${MemeTemplates.img}">
//     </div>
//   </div>
// `;

function inject(memes) {
  const Inputsntemplates = document.querySelector(".inputsntemplates");
  Inputsntemplates.insertAdjacentHTML(
    "afterbegin",
    `<div>
    <img src=${memes.img} alt="">
    <button class="selectbtn">Select</button>
    </div>`
  );
}

MemeTemplates.forEach((MemeTemplates) => inject(MemeTemplates));

function selectTemplate() {
  const selectbutton = document.querySelectorAll("selectbtn");
  const selectbtnArray = Array.from(selectbutton);
  selectbtnArray.forEach((selectbtn) =>
    selectbtn.addEventListener("click", function (event) {
      const img = event.target.closest(".img");
      const currentimg = img.document.createElement("img");
      let oldimg = document.querySelector(".memepreview img");
      if (oldimg) oldimg.remove();
      memepreview.appendchild(currentimg);
    })
  );
}

selectTemplate();

setupCounter(document.querySelector("#counter"));
setupmodes(document.querySelector("#modesbtn"));
