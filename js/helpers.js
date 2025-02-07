function highlight(str, wordAmt, cssModifier) {
    let modifier = ""
    if(cssModifier) modifier = `--${cssModifier}`;
    str = str.split(" ");
    let normalText = str.splice(wordAmt);
    str = str.join(" ").toUpperCase();
    normalText = capitalizeFirstLetter(normalText.join(" "));
    let result = `<span class="highlight${modifier}">${str}</span> ${normalText}`
    return result;
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
