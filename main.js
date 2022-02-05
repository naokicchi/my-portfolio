const hairKarte = document.getElementById("my-products-hairkarte");
const grapes = document.getElementById("my-products-grapes");

const hairdiv = document.getElementById("hairKarte-detail");
const grapesdiv = document.getElementById("grapes-detail");

let isHairKarte = false;
let isGrapes = false;

const productDiv = document.createElement("div");
productDiv.className = "product-detail";

const introDiv = document.createElement("div");
const unLists = document.createElement("ul");
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");
const list4 = document.createElement("li");
unLists.append(list1);
unLists.append(list2);
unLists.append(list3);
unLists.append(list4);
introDiv.append(unLists);

const imgDiv = document.createElement("div");
const img1 = document.createElement("img");
const img2 = document.createElement("img");

imgDiv.append(img1);
imgDiv.append(img2);

productDiv.append(introDiv);
productDiv.append(imgDiv);

hairKarteObj = {
  lang: "開発言語：swift",
  period: " 制作期間：3ヶ月",
  intro:
    " 紹介文：ヘアスタイル共有SNSアプリケーションです。ヘアスタイルを検索、投稿、お気に入り追加して自分だけのヘアカタログを作成！フォロー機能もあるので自分のみたいユーザーを選別できる！",
  url: "appStoreURL : https://apps.apple.com/jp/app/hairkarte/id1565355951",
};

grapesObj = {
  lang: "開発言語：HTML/CSS, JavaScript",
  period: "制作期間：3日",
  intro:
    "紹介文：葡萄の紹介サイトです。生産数国内TOPの都道府県の葡萄の情報を記載しています。品種紹介もしているのでみてください。",
  url: "URL : https://naokicchi.github.io/Grapeschi/Final_Ex.html",
};

const createList = function (key) {
  switch (key) {
    case 1:
      list1.textContent = hairKarteObj.lang;
      list2.textContent = hairKarteObj.period;
      list3.textContent = hairKarteObj.intro;
      list4.textContent = hairKarteObj.url;
      img1.src = "images/hair1.png";
      img2.src = "images/hair2.png";
      introDiv.className = "hair-info";
      imgDiv.className = "hair-img";

      hairdiv.append(productDiv);
      img1.width = 200;
      img2.width = 200;
      img1.height = auto;
      img2.height = auto;
      hairdiv.append(productDiv);
      break;
    case 2:
      list1.textContent = grapesObj.lang;
      list2.textContent = grapesObj.period;
      list3.textContent = grapesObj.intro;
      list4.textContent = grapesObj.url;
      img1.src = "images/grape-img1.png";
      img2.src = "images/grape-img2.png";
      introDiv.className = "grape-info";
      imgDiv.className = "grape-img";

      grapesdiv.append(productDiv);
      img1.width = auto;
      img2.width = auto;
      img1.height = 400;
      img2.height = 400;
      break;
  }
};

hairKarte.onmouseover = function () {
  if (isHairKarte !== true) {
    createList(1);
    isHairKarte = true;
  }
};

hairKarte.onmouseout = function () {
  hairdiv.removeChild(productDiv);
  isHairKarte = false;
};

grapes.onmouseover = function () {
  if (isGrapes !== true) {
    createList(2);
    isGrapes = true;
  }
};

grapes.onmouseout = function () {
  grapesdiv.removeChild(productDiv);
  isGrapes = false;
};

const images = ["images/pic2.png", "images/geek_ios.png", "images/pic4.png"];
const secondImages = [
  "images/geek_zentai.png",
  "images/pic7.jpg",
  "images/pic8.png",
];

console.log(images.length);
const firstImageView = document.getElementById("firstImages");
const secondImageView = document.getElementById("secondImages");
let imageCount = 0;

const slideShow = function () {
  imageCount++;

  console.log(imageCount);
  firstImageView.src = images[imageCount % 3];
  secondImageView.src = secondImages[imageCount % 3];
};

setInterval(slideShow, 2000);
