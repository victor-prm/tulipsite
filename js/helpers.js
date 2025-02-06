function highlight(str, wordAmt, cssModifier, largeLetters) {
    let modifier = ""
    if(cssModifier) modifier = `--${cssModifier}`;
    str = str.split(" ");
    let normalText = str.splice(wordAmt);
    str = str.join(" ");
    if(largeLetters)str = str.toUpperCase();
    normalText = capitalizeFirstLetter(normalText.join(" "));
    let result = `<span class="highlight${modifier}">${str}</span> ${normalText}`
    return result;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function sectionHeader(d){
    return  `<div class="section-text-container">
                <h2 class="section-headline">${highlight(d.headline,1,"section-headline")}</h2>
                <p>${d.text}</p> 
            </div>`
}
