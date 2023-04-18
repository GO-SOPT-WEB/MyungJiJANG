//카테고리 태그 부분
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

//카테고리 리스트 filter

// 카드 리스트 부분(데이터 배열)
const CUTE_ITEM_LIST = [
  {
    id: 1,
    name: "봉지",
    hashtag: ["말티피그", "장봉지", "7짤", "강아지"],
    profile: "img/Bongji.jpg",
  },
  {
    id: 2,
    name: "밤비",
    hashtag: ["꼬똥", "3짤", "고창석", "ㄱㅇㅇ💛", "강아지"],
    profile: "img/Bambi.jpg",
  },
  {
    id: 3,
    name: "후지",
    hashtag: ["비숑", "강후지", "훚", "강아지"],
    profile: "img/Huji.jpg",
  },
  {
    id: 4,
    name: "고영희 짤",
    hashtag: ["고얌이", "냥아치다", "ㄱㅇㅇ💛", "고양이"],
    profile: "img/Cat.JPG",
  },
  {
    id: 5,
    name: "행복한 쿼카",
    hashtag: ["셀카장인", "스마일", "호주", "쿼카"],
    profile: "img/Happy.jpg",
  },
  {
    id: 6,
    name: "춘식이",
    hashtag: ["카카오프렌즈", "따땃", "캐릭터"],
    profile: "img/Chunsic.jpg",
  },
  {
    id: 7,
    name: "햄뿡이",
    hashtag: ["햄뿡이", "방구뿡뿡", "내취향", "캐릭터"],
    profile: "img/Hambbung.jpg",
  },
  {
    id: 8,
    name: "최고심",
    hashtag: ["할수이따", "긍정!!!", "체고", "캐릭터"],
    profile: "img/Gosim.JPG",
  },
  {
    id: 9,
    name: "명지",
    hashtag: ["_myundi", "귀욤짱", "25짤", "요정"],
    profile: "img/Myungji.jpg",
  },
  {
    id: 10,
    name: "햄찌짤",
    hashtag: ["햄스터", "따봉짤", "최애짤", "햄스터"],
    profile: "img/Hamjji.JPG",
  },
];

// 전체 카드리스트
const container = document.querySelector(".card--list");

CUTE_ITEM_LIST.map((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <div class = "card--inner">
  <h3>${item.name}</h3>
    <img src="${item.profile}" alt="${item.name}">
      <div class="hashtag">
        ${item.hashtag
          .slice(0, 2)
          .map((tag) => `<p class="hashtagItems">#${tag} </p>`)
          .join("")} ${
    item.hashtag.length > 2 ? `<button class="showMore"> + </button>` : ""
  }
      </div>
      <div class="card--inner__footer">♥</div>
  </div>
  `;
  container.appendChild(card);
});

// 해시태그 글자수 제한
