// "use strict";

// window.addEventListener("DOMContentLoaded", getContacts);

// //Fetching data from wordpress

// const baselinkContacts =
//   "http://paubodesign.com/kea/finalProject/wp-json/wp/v2/contact?_embed";

// const contactTemplate = document.querySelector("#contactTemplate").content;

// function getContacts() {
//   // fetch(baseLink + "?_embed")
//   fetch(baselinkContacts)
//     .then(e => e.json())
//     .then(fetchAllContacts);
//   // .then(addListeners);
// }

// function fetchAllContacts(contactsList) {
//   console.log(contactsList);
//   contactsList.forEach(populateContacts);
// }
// function populateContacts(contact) {
//   console.log(contact);
//   let clone = contactTemplate.cloneNode(true);

//   clone.querySelector("img").src = contact.acf.img.url;
//   clone.querySelector("h1").textContent = contact.acf.header_name;
//   clone.querySelector("p").innerHTML = contact.acf.description;

//   document.querySelector(".insertClones").appendChild(clone);
// }
////////////////////////////////////////////

"use strict";

window.addEventListener("DOMContentLoaded", getContacts);

//Fetching data from wordpress

const baselinkContacts =
  "http://paubodesign.com/kea/finalProject/wp-json/wp/v2/contact?_embed";

const contactTemplate1 = document.querySelector("#contactTemplate1").content;
const contactTemplate2 = document.querySelector("#contactTemplate2").content;

function getContacts() {
  // fetch(baseLink + "?_embed")
  fetch(baselinkContacts)
    .then(e => e.json())
    .then(fetchAllContacts);
  // .then(addListeners);
}

function fetchAllContacts(contactsList) {
  populateContact1(contactsList[1]);
  populateContact2(contactsList[0]);
}
function populateContact1(contact) {
  let clone = contactTemplate1.cloneNode(true);

  clone.querySelector("img").src = contact.acf.img.url;
  clone.querySelector("h2").textContent = contact.acf.header_name;
  clone.querySelector("p").innerHTML = contact.acf.description;

  clone.querySelector(".spotify_link").href = contact.acf.spotify_link;
  clone.querySelector(".fb_link").href = contact.acf.facebook_link;
  clone.querySelector(".soundcloud_link").href = contact.acf.soundcloud_link;
  clone.querySelector(".instagram_link").href = contact.acf.instagram_link;
  clone.querySelector(".youtube_link").href = contact.acf.youtube_link;

  document.querySelector(".insert1").appendChild(clone);
}

function populateContact2(contact) {
  let clone = contactTemplate2.cloneNode(true);

  clone.querySelector("img").src = contact.acf.img.url;
  clone.querySelector("h2").textContent = contact.acf.header_name;
  clone.querySelector("p").innerHTML = contact.acf.description;

  clone.querySelector(".spotify_link").href = contact.acf.spotify_link;
  clone.querySelector(".fb_link").href = contact.acf.facebook_link;
  clone.querySelector(".soundcloud_link").href = contact.acf.soundcloud_link;
  clone.querySelector(".instagram_link").href = contact.acf.instagram_link;
  clone.querySelector(".youtube_link").href = contact.acf.youtube_link;

  document.querySelector(".insert2").appendChild(clone);
}
