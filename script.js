const galleryContainer = document.querySelector(".gallery-container")
let imageContainer = galleryContainer.querySelectorAll(".image-container")
let image = imageContainer.querySelector(".image-container img")



let prevPos = window.scrollY
window.onscroll = () => {
    let currPos = window.scrollY
    let navbar = document.getElementById("navbar")
    if (currPos < prevPos) {
        navbar.style.top = "-56px"
    } else {
        navbar.style.top = "0px"
    }
    prevPos = currPos
}