// tady je místo pro náš program
function setBold(element) {
    element.style.fontWeight = "bold"

}

function setNormal(element) {
    element.style.fontWeight = "normal"

}

function odstavecBarva() {
    let odstavec = document.querySelector('.odstavec')
    odstavec.classList.toggle("cervenyText")
}