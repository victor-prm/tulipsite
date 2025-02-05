let contentDiv = document.querySelector('.content-container');

fetch("http://localhost:4000/hero")
    .then(response => response.json())
    .then(data => {
        populateHeader(data);
        console.log(data);
    });
