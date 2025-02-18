function populateRooms(d) {
    let roomsSection = document.createElement("section");
    roomsSection.classList.add("rooms");

    roomsSection.innerHTML = `
        ${sectionHeader(d)}
        <div class="rooms-items-container">
            ${mapCards(d.roomtypes)}
        </div>`
    mainSection.append(roomsSection);

    function mapCards(rooms) {
        return rooms.map((room) => createRoomsCard(room.image, room.type, room.price, room.guests, room.size, room.description)).join("");
    }

    function createRoomsCard(src, type, price, pax, sqm, desc) {
        return `<div class="room-item">
                    <div class="room-item-img-container">
                        <img src="${src}" alt="" class="room-item-img">
                        <div class="room-item-meta-info-container">
                            ${roomMetaTag(pax,"fa fa-bed	")}
                            ${roomMetaTag(sqm,"fa fa-square-o")}
                        </div>
                    </div>
                    <div class="room-item-content-container">
                        <div class="room-item-text">
                            <div class="room-item-header">
                                <h3 class="room-item-type">${type}</h3>
                                <div class="room-item-price-tag">
                                    <p class="room-item-price-tag-value">$${price}</p>
                                </div>
                            </div>
                            <p>${desc}</p>
                        </div>
                        <a href="#" class="room-item-booking-link">Booking <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>`
    }

    function roomMetaTag(text,iconSrc) {
        return `<div class="room-item-meta-info">
                    <i class="${iconSrc}"></i>
                    <p class class="room-item-meta-text">${text}</p>
                </div>
    
        `
    }
}

