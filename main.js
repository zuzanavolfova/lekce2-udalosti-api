// tady je místo pro náš program
function setBold(element) {
    element.style.fontWeight = "bold"

}

function setNormal(element) {
    element.style.fontWeight = "normal"
}

let odstavec = document.querySelector('.odstavec')

function odstavecBarva() {

    odstavec.classList.toggle("cervenyText")
}

function odstavecZvetseni() {
    let fontSize = window.getComputedStyle(odstavec).getPropertyValue('font-size');
    let size = parseInt(fontSize);
    size += 1;
    odstavec.style.fontSize = size + "px"
}

let song;
song = document.querySelector("#zvuk");

function play() {
    song.play()
}

function pause() {
    song.pause()
}

function jdiNaZacatek() {
    song.currentTime = 0
}

function ztisit() {
    song.volume = 0
}

function zvukPulka() {
    song.volume = 0.5
}

function zvukMaximum() {
    song.volume = 1
}