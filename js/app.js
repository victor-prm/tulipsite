let contentDiv = document.querySelector('.content-container');



fetch("http://localhost:4000/hero")
    .then(response => response.json())
    .then(data => {
        populateHeader(data);
        console.log(data);
    });

function populateHeader(d) {
    let headerSection = document.createElement("header");
    headerSection.classList.add("header");

    headerSection.innerHTML = `
        <div class="hero-content">
            <nav class="nav-bar">
                <ul class="nav-menu">
                    <li class="nav-menu-item"><a href="#" class="nav-menu-item-link">Home</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-item-link">Rooms & Suites</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-item-link">Services</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-item-link">About Us</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-item-link">Booking</a></li>
                </ul>
                <ul class="nav-menu nav-menu--social">
                    <li class="nav-menu-item nav-menu-item--social"><a href="#" class="nav-menu-item-link nav-menu-item-link--social"><i class='fab fa-instagram'></i></a></li>
                    <li class="nav-menu-item nav-menu-item--social"><a href="#" class="nav-menu-item-link nav-menu-item-link--social"><i class='fab fa-facebook-f'></i></a></li>
                    <li class="nav-menu-item nav-menu-item--social"><a href="#" class="nav-menu-item-link nav-menu-item-link--social"><i class='fab fa-youtube'></i></a></li>
                    <li class="nav-menu-item nav-menu-item--social"><a href="#" class="nav-menu-item-link nav-menu-item-link--social"><i class='fab fa-twitter'></i></a></li>
                </ul>
            </nav>
            <div class="hero-cta">
                <div class="logo-container logo-container--hero">
                    <img src="./assets/tulip_logo.svg" alt="Company Logo" class="hero-logo">
                </div>
                <div class="hero-message-container">
                    <h1 class="hero-message">${highlight(d.headline, 4, "hero")}</h1>
                </div>
                <button class="button-large">Book Now</button>
            </div>
           
        </div>
        <img src="${d.image}" alt="" class="hero-bg-image">
        <div class="booking-form-container">
            <form class="booking-form">
                <input type="date" name="" id="">
                <input type="date" name="" id="">
                <input type="number" name="" id="">
                <input type="number" name="" id="">
                <input type="button" value="Book Now" class="button-large button-large--submit">
            </form>
        </div>
        
   `
    contentDiv.append(headerSection);
}



