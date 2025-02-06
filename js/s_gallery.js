let galleryCssModifiers = ["top-left","top-right","center","center-right","bottom-left","bottom-right"]

function populateGallery(d) {
    let gallerySection = document.createElement("section");
    gallerySection.classList.add("gallery");

    gallerySection.innerHTML = `
        <div class="gallery-text-container">
            <h2>${d.headline}</h2>
            <p>${d.text}</p> 
        </div>
        <div class="gallery-items-container">
            ${mapImages(d.images)}
        </div>`
    contentDiv.append(gallerySection);
}

function mapImages(imgs){
    return imgs.map((img,i) => createImage(img.url, galleryCssModifiers[i])).join("");
}

function createImage(src, mod){
   return   `<div class="gallery-item gallery-item--${mod}">
                <img src="${src}" alt="" class="gallery-item-img">
            </div>`
}