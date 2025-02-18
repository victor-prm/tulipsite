/* import { testModule } from "./test.js";
testModule(); */

let contentDiv = document.querySelector('.content-container');

let headerSection = document.createElement("header");
headerSection.classList.add("header");
let mainSection = document.createElement("main");
headerSection.classList.add("main");
let footerSection = document.createElement("footer");
headerSection.classList.add("footer");
contentDiv.append(headerSection, mainSection, footerSection);

fetchHeader();
fetchRooms();
fetchServices();
fetchSpots();
fetchGallery();


function fetchHeader() {
    fetch("http://localhost:4000/hero")
        .then(response => response.json())
        .then(data => {
            populateHeader(data);
            //console.log(data);
            //fetchRooms();
        });
}

function fetchRooms() {
    fetch("http://localhost:4000/rooms")
        .then(response => response.json())
        .then(data => {
            populateRooms(data);
            //console.log(data);
            //fetchServices();
        });
}

function fetchServices() {
    fetch("http://localhost:4000/services")
        .then(response => response.json())
        .then(data => {
            populateServices(data);
            //console.log(data);
            //fetchGallery();
        });
}

function fetchSpots() {
    fetch("http://localhost:4000/spots")
        .then(response => response.json())
        .then(data => {
            populateSpots(data);
            //console.log(data);
        });
}


function fetchGallery() {
    fetch("http://localhost:4000/gallery")
        .then(response => response.json())
        .then(data => {
            populateGallery(data);
            //console.log(data);
        });
}
