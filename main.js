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

let cervene=document.querySelector('.cervene');
cervene.onclick=odstavecBarva;

let zvetseni=document.querySelector('.zvetseni');
zvetseni.onclick=odstavecZvetseni;

let hraj=document.querySelector('.hraj');
hraj.onclick=play;

let pauza=document.querySelector('.pauza');
pauza.onclick=pause;

let zacatek=document.querySelector('.zacatek');
zacatek.onclick=jdiNaZacatek;

let ztlumit=document.querySelector('.ztlumit');
ztlumit.onclick=ztisit;

let akorat=document.querySelector('.akorat');
akorat.onclick=zvukPulka;

let pecky=document.querySelector('.pecky');
pecky.onclick=zvukMaximum;




