function populateSpots(d) {
    let spotsSection = document.createElement("section");
    spotsSection.classList.add("spots");
    console.log(d)

    spotsSection.innerHTML = `
        <div class="spots-items-container">
            ${mapSpots(d)}
        </div>`
    mainSection.append(spotsSection);

    //Parts
    function mapSpots(spots) {
        return spots.map(spot => createSpotCard(spot)).join("");
    }

    function createSpotCard(d){
        return `<div class="spot-item">
                    <div class="spot-item-icon-container">
                        <i class="fas fa-${d.icon}"></i>
                    </div>
                    <div class="spot-item-content-container">
                        <h3 class="spot-item-headline">${d.name}</h3>
                        <p class="spot-item-copy">${d.text}</p>
                    </div>
                    
                </div>`
    }

    function modifyIfEven(i, modifierString){
        return i%2==0 ? "" : ` ${modifierString}`;
    }
}

