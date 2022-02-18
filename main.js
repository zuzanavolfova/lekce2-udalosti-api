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

let zvuk;
zvuk = document.querySelector("#zvuk");

function play() {
    zvuk.play()
}

function pause() {
    zvuk.pause()
}

function jdiNaZacatek() {
    zvuk.currentTime = 0
}