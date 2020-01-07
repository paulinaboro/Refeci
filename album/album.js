"use strict";

window.addEventListener("DOMContentLoaded", getSongs);

//Fetching data from wordpress

const baselinkAudios =
  "http://paubodesign.com/kea/finalProject/wp-json/wp/v2/song?_embed";

const audioTemplate = document.querySelector("#audioTemplate").content;
const songTemplate = document.querySelector("#songTemplate").content;

function getSongs() {
  // fetch(baseLink + "?_embed")
  fetch(baselinkAudios)
    .then(e => e.json())
    .then(fetchAllSongs)
    .then(addListeners);
}

///example
// fetch('https://api.github.com/users/chriscoyier/repos')
//   .then(response => response.json())
//   .then(data => {
//     // Here's a list of repos!
//     console.log(data)
//   });

function fetchAllSongs(songList) {
  songList.forEach(populatePlaylist);
}

function populatePlaylist(song) {
  const clone = audioTemplate.cloneNode(true);

  let audioWrapperClass = "#audioWrapper" + song.acf.id;

  clone.querySelector("#audioWrapper").dataset.color = song.acf.hexcolor;
  clone.querySelector("#audioWrapper").dataset.coverphoto = song.acf.img.url;
  clone.querySelector("#audioWrapper").dataset.songsrc = song.acf.audiofile.url;
  clone.querySelector(".updateColor").dataset.forGradient = song.acf.id;

  clone.querySelector("#audioWrapper").id = "song-" + song.acf.id;

  clone.querySelector(".songnumber").textContent = song.acf.songnumber + "   ";
  clone.querySelector("img").src = song.acf.img.url;

  clone.querySelector(".songtitle").textContent = song.title.rendered + "   ";
  clone.querySelector("audio").src = song.acf.audiofile.url;

  document.querySelector("#albumPlaylist").appendChild(clone);
}

function addListeners() {
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");

  let audios = document.querySelectorAll(".audioWrapper");

  audios.forEach(audiosample => {
    let elementId = audiosample.id;
    let songElement = document.getElementById(elementId);
    const pauseBtn = songElement.getElementsByClassName("pauseButton")[0];
    const playBtn = songElement.getElementsByClassName("playButton")[0];
    const audioElement = songElement.getElementsByClassName("audio")[0];
    let onChangePhoto = document.querySelector(".onChangePhoto");
    let squarePic1 = document.querySelectorAll(".squarePic1");
    let squarePic2 = document.querySelectorAll(".squarePic2");
    let isPlaying = false;
    pauseBtn.toggleAttribute("hidden");

    // let clickedId = audiosample.id;

    audiosample.addEventListener("click", e => {
      // // adding the gradient color classes from css
      let clickedElement = e.target;
      // console.log(elementId);

      let newGradient = document.querySelector(".gradientCircle");
      let dynamicBackground = document.getElementById("background");
      if (elementId === "song-7") {
        newGradient.classList.add("color7");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color71");

        document.querySelector(".squarePic2").src = "../img/album/01.jpg";
        document.querySelector(".titleRight").innerHTML = "Lost";
      } else if (elementId === "song-6") {
        newGradient.classList.add("color6");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color61");

        document.querySelector(".squarePic2").src = "../img/album/07.jpg";
        document.querySelector(".titleRight").innerHTML = "Waste my Time";
      } else if (elementId === "song-5") {
        newGradient.classList.add("color5");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color51");

        document.querySelector(".squarePic2").src = "../img/album/06.jpg";
        document.querySelector(".titleRight").innerHTML = "We used to";
      } else if (elementId === "song-4") {
        newGradient.classList.add("color4");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color41");

        document.querySelector(".squarePic2").src = "../img/album/05.jpg";
        document.querySelector(".titleRight").innerHTML = "Oh love";
      } else if (elementId === "song-3") {
        newGradient.classList.add("color3");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color31");

        document.querySelector(".squarePic2").src = "../img/album/04.jpg";
        document.querySelector(".titleRight").innerHTML = "Man on the moon";
      } else if (elementId === "song-2") {
        newGradient.classList.add("color2");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color21");

        document.querySelector(".squarePic2").src = "../img/album/03.jpg";
        document.querySelector(".titleRight").innerHTML = "Pieces";
      } else if (elementId === "song-1") {
        newGradient.classList.add("color1");
        dynamicBackground.classList = "dynamicBackground";
        dynamicBackground.classList.add("color11");

        document.querySelector(".squarePic2").src = "../img/album/02.jpg";
        document.querySelector(".titleRight").innerHTML = "Intro";
      }

      playBtn.toggleAttribute("hidden");
      pauseBtn.classList.add("addPurple");
      pauseBtn.toggleAttribute("hidden");
      onChangePhoto.classList.toggle("rotate");
      // document.querySelector(".rectB").style.fill = audiosample.dataset.color;
      document.querySelector(".onChangePhoto").src =
        audiosample.dataset.coverphoto;
      document.querySelector(".squarePic1").src =
        audiosample.dataset.coverphoto;
      audioElement.src = audiosample.dataset.songsrc;
      audioElement.load();
      if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
      } else {
        const allAudios = document.getElementsByClassName("audio");
        for (let a of allAudios) {
          a.pause();
        }
        audioElement.play();
        isPlaying = true;
      }
    });
  });
}

// ANIMATIONS

//button start rotate
// let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click", rotate);

// function rotate() {
//   onChangePhoto.classList.toggle("rotate");
// }
//button end rotate
