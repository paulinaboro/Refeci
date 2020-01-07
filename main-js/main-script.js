"use strict";

window.addEventListener("DOMContentLoaded", getSliderImages);

//Fetching data from wordpress

const baselink =
  "http://paubodesign.com/kea/finalProject/wp-json/wp/v2/background_photo?_embed";

function getSliderImages() {
  // fetch(baseLink + "?_embed")
  fetch(baselink)
    .then(e => e.json())
    .then(fetchAllImages)
    .then(addClassActive);
}

function fetchAllImages(allImages) {
  allImages.forEach(populateSlider);
}

function populateSlider(slideImg) {
  // console.log(slideImg);
  const carouselTemplate = document.querySelector("#carouselTemplate").content;
  const clone = carouselTemplate.cloneNode(true);

  clone.querySelector("img").src = slideImg.acf.img.url;

  document.querySelector(".insertSlides").appendChild(clone);
}

function addClassActive() {
  let slides = document.querySelectorAll("#slide");
  let firstSlide = document.getElementsByClassName("carousel-item")[0];

  firstSlide.classList.add("active");
}

// FULLSCREEN MOBILE NAVBAR

let nav = document.getElementById("myNav");

function openNav() {
  nav.style.width = "100%";
}

function closeNav() {
  nav.style.width = "0";
}
