let contentDiv = document.querySelector('.content-container');

fetch("http://localhost:4000/hero")
    .then(response => response.json())
    .then(data => {
        populateHeader(data);
        //console.log(data);
    });

fetch("http://localhost:4000/rooms")
    .then(response => response.json())
    .then(data => {
        populateRooms(data);
        //console.log(data);
    });

    fetch("http://localhost:4000/gallery")
    .then(response => response.json())
    .then(data => {
        populateGallery(data);
        console.log(data);
    });

