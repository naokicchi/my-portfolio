const tabs = document.getElementsByClassName("tab");
const icon_img = document.getElementById("icon-image");
const img1 = document.getElementById("first-img");
const img2 = document.getElementById("second-img");
const intro = document.getElementById("intro");
const lang = document.getElementById("lang");
const period = document.getElementById("period");
const link_url = document.getElementById("link-url");
const product_image = document.getElementById("product-image");
const title = document.getElementById("title");
const link = document.getElementById("link");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    icon_img.src = obj[i].icon_img;
    img1.src = obj[i].img1;
    img1.width = obj[i].width;
    img2.src = obj[i].img2;
    link.href = obj[i].link;

    lang.textContent = obj[i].lang;
    intro.textContent = obj[i].intro;
    period.textContent = obj[i].period;
    link_url.textContent = obj[i].url;
    img1.classList.remove("ios-image");
    img1.classList.remove("web-image");
    img1.className = obj[i].imageClass;
    img2.classList.remove("ios-image");
    img2.classList.remove("web-image");
    img2.className = obj[i].imageClass;
    product_image.classList.remove("ios-image");
    product_image.classList.remove("web-image");
    product_image.className = obj[i].imageClass;
    product_image;
    title.textContent = obj[i].title;
    document
      .getElementsByClassName("is-active")[0]
      .classList.remove("is-active");
    this.classList.add("is-active");
  };
}

const obj = [
  {
    title: "HairKarte",
    lang: "開発言語：swift",
    period: " 制作期間：3ヶ月",
    intro:
      " 紹介文：ヘアスタイル共有SNSアプリケーションです。ヘアスタイルを検索、投稿、お気に入り追加して自分だけのヘアカタログを作成！フォロー機能もあるので自分のみたいユーザーを選別できる！",
    url: "appStoreURL : https://apple.co/3AYHZsm",
    icon_img: "images/hairkarte.png",
    img1: "images/hair1.png",
    img2: "images/hair2.png",
    imageClass: "ios-image",
    link: "https://apple.co/3AYHZsm",
  },
  {
    title: "ジョブマネ(ios)",
    lang: "開発言語：swift",
    period: "制作期間：2週間",
    intro:
      "紹介文：就活生向けアプリ / 企業情報・タスク・オープンESを一括管理！就活生向けアプリです。企業情報・タスク・オープンESを一括管理可能",
    url: "URL : https://apps.apple.com/jp/app/id1609270122",
    icon_img: "images/jobmane.png",
    img1: "images/jobmane-image1.png",
    img2: "images/jobmane-image2.png",
    imageClass: "ios-image",
    link: "https://apps.apple.com/jp/app/id1609270122",
  },
  {
    title: "ジョブマネ(webアプリ)",
    lang: "開発言語：vue.js/html/css",
    period: "制作期間：1ヶ月",
    intro:
      "紹介文：就活生向けアプリ / 企業情報・タスク・オープンESを一括管理！就活生向けアプリです。企業情報・タスク・オープンESを一括管理可能",
    url: "URL : https://knobsalmonproject.web.app/",
    icon_img: "images/jobmane.png",
    img1: "images/jobmane-web.png",
    img2: "images/jobmane-web-2.png",
    imageClass: "web-image",
    link: "https://knobsalmonproject.web.app/",
  },
  {
    title: "grapes!!",
    lang: "開発言語：HTML/CSS, JavaScript",
    period: "制作期間：5日",
    intro:
      "紹介文：葡萄の紹介サイトです。生産数国内TOPの都道府県の葡萄の情報を記載しています。品種紹介もしているのでみてください。",
    url: "URL : https://bit.ly/369is5v",
    icon_img: "images/grapes.png",
    img1: "images/grape-img1.png",
    img2: "images/grape-img2.png",
    imageClass: "web-image",
    link: "https://naokicchi.github.io/Grapeschi/Final_Ex.html",
  },
];

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
