var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random_button");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + "," 
    + color2.value + 
    ")";

    setTextContent();

    //Set body background to new style

}

function randomColorGenerator() {
    var random_array = [];
    for (var i = 0; i < 6; i++) {
        random_array.push(Math.floor(Math.random() * 255) + 1);
    }
    body.style.background = "linear-gradient(to right, rgb(" 
    + random_array[0] + ", " 
    + random_array[1] + ", " 
    + random_array[2] + "), rgb(" 
    + random_array[3] + ", " 
    + random_array[4] + ", " 
    + random_array[5] + "))";

    setTextContent();
    var hex = rgbToHex(random_array[0], random_array[1], random_array[2]);
    color1.value = hex;
    hex = rgbToHex(random_array[3], random_array[4], random_array[5]);
    color2.value = hex;
}

function rgbToHex(r, g, b) {
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    if (hexR.length == 1)
        hexR = "0" + hexR;
    if (hexG.length == 1)
        hexG = "0" + hexG;
    if (hexB.length == 1)
        hexB = "0" + hexB;

    return "#" + hexR + hexG + hexB;
}

function setTextContent() {
    css.textContent = body.style.background + ";";
}

window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColorGenerator);



