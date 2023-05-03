// 1

const noDefault = (event) => {
    event.preventDefault();
};

document.addEventListener("click", noDefault);

// 2

// 2.1

const colorList = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
const gifList = ["/assets/magic-1.gif", "/assets/magic-2.gif", "/assets/magic-3.gif", "/assets/magic-4.gif", "/assets/magic-5.gif", "/assets/magic-6.gif"];

const getRandom = (array) => {
    let index = Math.floor(Math.random() * array.length);

    return array[index];
}

function getColor() {
    return getRandom(colorList);
}

function getGif() {
    return getRandom(gifList);
}

function clickImage(image) {
    image.src = getGif();
}

const images = document.querySelectorAll("img");

images.forEach(element => element.addEventListener("click", function() {
    clickImage(element)
}, true));

// 2.2

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(element => element.addEventListener("click", function() {
    element.style.backgroundColor = getColor();
    element.style.color = getColor();
}));

// 2.3

const articleAndSection = document.querySelectorAll("article, section");

articleAndSection.forEach(element => element.addEventListener("click", function() {
    element.style.backgroundColor = getColor();
}));

// 3

let savedImage = "";
let savedParagraphColor = "";
let savedParagraphBackgroundColor = "";
let savedArticleAndSectionBackgroundColor = "";

// 3.1

images.forEach(element => element.addEventListener("mouseover", function() {
    savedImage = element.src;
    element.src = "https://camo.githubusercontent.com/cec9fc1eb1a031f737bc7a81c94f12b4cf1bc7017f39ee562437f197ff7162c8/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7470544f7736736c6a4232552f67697068792e676966"
}));

images.forEach(element => element.addEventListener("mouseleave", function() {
    element.src = savedImage;
}));

// 3.2

paragraphs.forEach(element => element.addEventListener("mouseover", function() {
    savedParagraphColor = element.style.color;
    savedParagraphBackgroundColor = element.style.backgroundColor;

    console.log(element.style.color);
    console.log(element.style.backgroundColor);

    element.style.backgroundColor = getColor();
    element.style.color = getColor();
}));

paragraphs.forEach(element => element.addEventListener("mouseleave", function() {
    element.style.color = savedParagraphColor;
    element.style.backgroundColor = savedParagraphBackgroundColor;
}));

// 3.3

articleAndSection.forEach(element => element.addEventListener("mouseover", function() {
    savedArticleAndSectionBackgroundColor = element.style.backgroundColor;
    element.style.backgroundColor = getColor();

    while(element.style.backgroundColor == savedParagraphBackgroundColor) {
        element.style.backgroundColor = getColor();
    }
}));

articleAndSection.forEach(element => element.addEventListener("mouseout", function() {
    element.style.backgroundColor = savedArticleAndSectionBackgroundColor;
}));