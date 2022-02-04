const hairKarte = document.getElementById("my-products-hairkarte");
const grapes = document.getElementById("my-products-grapes");

const hairdiv = document.getElementById("hairKarte-detail");
const grapesdiv = document.getElementById("grapes-detail");

let isHairKarte = false;
let isGrapes = false;

const unLists = document.createElement("ul");
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const list3 = document.createElement("li");
const list4 = document.createElement("li");
unLists.append(list1);
unLists.append(list2);
unLists.append(list3);
unLists.append(list4);

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
      hairdiv.append(unLists);
      break;
    case 2:
      list1.textContent = grapesObj.lang;
      list2.textContent = grapesObj.period;
      list3.textContent = grapesObj.intro;
      list4.textContent = grapesObj.url;
      grapesdiv.append(unLists);
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
  if (isHairKarte === true) {
    hairdiv.removeChild(unLists);
    isHairKarte = false;
  }
};

grapes.onmouseover = function () {
  if (isGrapes !== true) {
    createList(2);
    isGrapes = true;
  }
};

grapes.onmouseout = function () {
  if (isGrapes === true) {
    grapesdiv.removeChild(unLists);
    isGrapes = false;
  }
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

  if (imageCount >= images.length) {
    imageCount = 0;
  }
  console.log(imageCount);
  firstImageView.src = images[imageCount];
  secondImageView.src = secondImages[imageCount];
};

setInterval(slideShow, 1000);
