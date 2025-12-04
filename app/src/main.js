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
    name: "Difficult choices",
    img: "https://images.wondershare.com/filmora/article-images/best-meme-templates-04.jpg",
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

function inject(memes) {
  const Templates = document.querySelector(".Templates");
  Templates.insertAdjacentHTML(
    "afterbegin",
    `<div class="templateselect">
    <img src=${memes.img} alt="">
    <input class="selectbtn" value="Select" type="button" size="100%">
    </div>`
  );
}

MemeTemplates.forEach((MemeTemplates) => inject(MemeTemplates));

function injectinputs() {
  const Inputsntemplates = document.querySelector(".inputsntemplates");
  Inputsntemplates.insertAdjacentHTML(
    "beforeend",
    `<div class="inputsbox">
    <input class="addinputs" value="Add a text" size="20" type="button">
    <input class="nopeinputs" value="Remove a text" size="20" type="button">
    <input
    class="inputs"
    type="text"
    size="20">
    <input class="Yourownimg" value="Add Your Own Meme Template Here!" type="file" accept="image/*">
    </div>`
  );
}

injectinputs();

function addinginputs() {
  const amountofinputs = 1;
  const Addinputs = document.querySelectorAll("addinputs");
  const Subinputs = document.querySelectorAll("nopeinputs");
  const inputs = document.querySelectorAll("inputs");
  Addinputs.addEventListener("submit", function (e) {
    e.preventDefault();
    if (amountofinputs != 3) {
      injectinputs();
    } else {
      Addinputs.setAttribute("disabled", "");
    }
  });
  Subinputs = document.querySelectorAll("submit", function (e) {
    e.preventDefault();
    if (amountofinputs != 1) {
      inputs.remove;
    } else {
      Subinputs.setAttribute("disabled", "");
    }
  });
}

addinginputs();

function selectTemplate() {
  const selectbutton = document.querySelectorAll("selectbtn");
  const selectbtnArray = Array.from(selectbutton);
  selectbtnArray.forEach((selectbtn) =>
    selectbtn.addEventListener("submit", function (e) {
      e.preventDefault();
      const img = e.target.closest(".img");
      const currentimg = img.document.createElement("img");
      let oldimg = document.querySelector(".memepreview img");
      if (oldimg) {
        oldimg.remove();
      }
      memepreview.insertAdjacentHTML(
        "afterbegin",
        `<div class="previewimg">
        <img src=${currentimg} alt="">`
      );
    })
  );
}

selectTemplate();

setupCounter(document.querySelector("#counter"));
setupmodes(document.querySelector("#modesbtn"));
