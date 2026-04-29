let redEl = document.querySelector(".red")
let yellowEl = document.querySelector(".yellow")
let greenEl = document.querySelector(".green")

let lightEls = [redEl, yellowEl, greenEl]
let currentlight = 0

function removelights() {
    redEl.classList.remove("active")
    yellowEl.classList.remove("active")
    greenEl.classList.remove("active")
}

function updatecolor() {
    removelights()
    currentlight += 1
    if (currentlight > 2) {
        currentlight = 0
    }

    lightEls[currentlight].classList.add("active")
}