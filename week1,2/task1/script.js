// import { CUTE_ITEM_LIST } from "./constants/CUTE_ITEM_LIST";

const allBtn = document.querySelector(".category-all");
const dogBtn = document.querySelector(".category-dog");
const catBtn = document.querySelector(".category-cat");
const ectBtn = document.querySelector(".category-ect");
const textAllBtn = document.querySelector(".text--all");
const textDogBtn = document.querySelector(".text--dog");
const textCatBtn = document.querySelector(".text--cat");
const textEctBtn = document.querySelector(".text--ect");

allBtn.onclick = function () {
  const selectAll = document.getElementById("category-all").value;
  const textAll = document.querySelector("#text--all");
  textAll.style.display = "block";
  document.getElementById("text--all").innerText = selectAll;
};

textAllBtn.onclick = function () {
  const textAllClick = document.querySelector("#text--all");
  if (textAllClick.style.display === "none") {
    textAllClick.style.display = "block";
  } else {
    textAllClick.style.display = "none";
  }
};

dogBtn.onclick = function () {
  const selectDog = document.getElementById("category-dog").value;
  const textDog = document.querySelector("#text--dog");
  textDog.style.display = "block";
  document.getElementById("text--dog").innerText = selectDog;
};

textDogBtn.onclick = function () {
  const textDogClick = document.querySelector("#text--dog");
  if (textDogClick.style.display === "none") {
    textDogClick.style.display = "block";
  } else {
    textDogClick.style.display = "none";
  }
};

catBtn.onclick = function () {
  const selectCat = document.getElementById("category-cat").value;
  const textCat = document.querySelector("#text--cat");
  textCat.style.display = "block";
  document.getElementById("text--cat").innerText = selectCat;
};

textCatBtn.onclick = function () {
  const textCatClick = document.querySelector("#text--cat");
  if (textCatClick.style.display === "none") {
    textCatClick.style.display = "block";
  } else {
    textCatClick.style.display = "none";
  }
};

ectBtn.onclick = function () {
  const selectEct = document.getElementById("category-ect").value;
  const textEct = document.querySelector("#text--ect");
  textEct.style.display = "block";
  document.getElementById("text--ect").innerText = selectEct;
};

textEctBtn.onclick = function () {
  const textEctClick = document.querySelector("#text--ect");
  if (textEctClick.style.display === "none") {
    textEctClick.style.display = "block";
  } else {
    textEctClick.style.display = "none";
  }
};
