import "./style.css";
// import "./modesbtn.js";

const MemeTemplates = [
  { name: "Drake Hotline Bling", img: "https://i.imgflip.com/4/30b1gx.jpg", category: "Comparing"},
  {
    name: "Disappointed Man",
    img: "https://a.pinatafarm.com/775x500/a2c9247953/disappointed-guy.jpg",
    category: "Comparing"
  },
  {
    name: "The office, they're the same",
    img: "https://en.meming.world/images/en/c/c4/They%E2%80%99re_The_Same_Picture.jpg",
    category: "Comparing"
  },
  {
    name: "Pikachu shocked",
    img: "https://www.vice.com/wp-content/uploads/sites/2/2020/04/1588176174179-download-1.jpeg",
    category: "Reaction"
  },
  {
    name: "___ or draw 25",
    img: "https://www.tjtoday.org/wp-content/uploads/2021/01/IMG_7504.jpg",
    category: "Reaction"
  },
  { name: "I'm once again asking", img: "https://i.imgflip.com/4/3oevdk.jpg", category: "Misc."},
  {
    name: "Difficult choices",
    img: "https://images.wondershare.com/filmora/article-images/best-meme-templates-04.jpg",
    category: "Comparing"
  },
  {
    name: "Wow! This is worthless!",
    img: "https://supermeme-space-prd.ams3.cdn.digitaloceanspaces.com/templates/This-is-Worthless.png",
    category: "Reaction"
  },
  {
    name: "My heart when...",
    img: "https://pbs.twimg.com/media/E9Ub8UpWQAgEUMW.jpg",
    category: "Reaction"
  },
  {
    name: "Shooting from the Moon",
    img: "https://i.pinimg.com/736x/48/61/86/48618695046dd9f6ed4949f024a220f0.jpg",
    category: "Misc."
  },
];

function inject(memes) {
  const Templates = document.querySelector(".Templates");
  Templates.insertAdjacentHTML(
    "afterbegin",
    `<div class="templateselect" data-category="${memes.category}">
    <img class="img" src=${memes.img} alt="">
    <input class="selectbtn" value="Select" type="submit">
    </div>`
  );
}

function injectplaceholders() {
  const memepreview = document.querySelector(".memepreview");
  memepreview.insertAdjacentHTML(
    "afterbegin",
    `<div class="previewimgdiv">
    <img class="previewimg" src="" alt="This is where your meme will be!">
    </div>`
  )
}

injectplaceholders()

MemeTemplates.forEach((MemeTemplate) => inject(MemeTemplate));

function selectTemplate() {
  const website = document.querySelector(".website");
  website.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectbutton = e.submitter;
    const templateselectcard = selectbutton.closest(".templateselect");
    const img = templateselectcard.querySelector("img");
    const memepreview = document.querySelector(".memepreview");
    let oldimg = document.querySelector(".memepreview img");
    if (oldimg) {
      oldimg.remove();
    }
    const clone = img.cloneNode(false);
    clone.classList.remove("img")
    clone.classList.add("previewimg");
    const oldpreviewimgdiv = document.querySelector(".previewimgdiv")
    if (oldpreviewimgdiv) {
      oldpreviewimgdiv.remove();
    }
    memepreview.insertAdjacentHTML(
      "afterbegin",
      `<div class="previewimgdiv">
      </div>`
    );
    const previewimgdiv = document.querySelector(".previewimgdiv");
    previewimgdiv.appendChild(clone)
  });
  const Imageupload = document.querySelector(".upload");
  Imageupload.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  })
}

selectTemplate();

function FirstInputs() {
  const inputsdiv = document.querySelector(".Templates");
  inputsdiv.insertAdjacentHTML(
    "afterbegin",
    `<button class="Addinputs">Add inputs</button>
    <button class="Nopeinputs">Remove inputs</button>
    <div class="Actualinputs">
      <input class="someinputs" type="text" size="30">
      <input class="someinputs" type="text" size="30">
    </div>
    <button class="printinput">Put On Meme</button>
    `
  );
}

function putinputonimg() {
  const previewimgdiv = document.querySelector(".previewimgdiv");
  const imgcheck = document.querySelector(".previewimg");
  const inputsindiv = document.querySelectorAll(".someinputs");
  const inputsindivArray = Array.from(inputsindiv);
  if (imgcheck) {
    inputsindivArray.forEach((inputs) =>{
      const words = inputs.value
      previewimgdiv.insertAdjacentHTML(
        "beforeend",
        `<p class="input">${words}</p>`
      )
    }
    );
  }
  else {
    alert("test");
  }
}

function runningputinputsonimg() {
  const btn = document.querySelector(".printinput");
    btn.addEventListener("click", function () {
      const oldtext = document.querySelectorAll(".input");
      const oldtextArray = Array.from(oldtext);
      oldtextArray.forEach((oldtext) => {
      if (oldtext){
        oldtext.remove();
      }
    })
    putinputonimg();
    })
}

FirstInputs();
runningputinputsonimg();

function filtering(btncategory) {
  const templates = document.querySelectorAll(".templateselect");
  templates.forEach((template) => {
    const templateCategory = template.getAttribute("data-category").toLowerCase();
    if (templateCategory === btncategory || btncategory === "all") {
      template.style.display = "";
    } else {
      template.style.display = "none";
    }
  });
}

function filteringbtns() {
  const filterbtns = document.querySelectorAll(".filters");
  filterbtns.forEach((button) => {
    button.addEventListener("click", function (event) {
      const buttoncategory = event.target.textContent.toLowerCase();
      filtering(buttoncategory);
    });
  });
}

filteringbtns();