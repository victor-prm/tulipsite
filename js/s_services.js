function populateServices(d) {
    let servicesSection = document.createElement("section");
    servicesSection.classList.add("services");

    servicesSection.innerHTML = `
        ${sectionHeader(d)}
        <div class="services-items-container">
            ${mapServices(d.facilities)}
        </div>`
    mainSection.append(servicesSection);

    //Parts
    function mapServices(services) {
        return services.map((service, i) => createServiceCard(service, i)).join("");
    }

    function createServiceCard(d, i){
        return `<div class="services-item${modifyIfEven(i,"services-item-reverse")}">
                    <div class="services-item-content-container">
                        <h3 class="services-item-headline">${d.name}</h3>
                        <p class="services-item-copy">${d.text1}</p>
                        <p class="services-item-copy">${d.text2}</p>
                    </div>
                    <div class="services-item-img-container">
                        <img src="${d.image}" alt="" class="services-item-img">
                    </div>
                </div>`
    }

    function modifyIfEven(i, modifierString){
        return i%2==0 ? "" : ` ${modifierString}`;
    }
}

