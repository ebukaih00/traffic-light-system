let trafficlightEl = document.querySelectorAll(".traffic")
let currentlight = 0

function removelights() {
    for (let i = 0; i < trafficlightEl.length; i++) {
        
        trafficlightEl[i].classList.remove("active")
    }
}

function updatecolor() {
    removelights()
    currentlight += 1
    if (currentlight > 2) {
        currentlight = 0
    }
trafficlightEl[currentlight].classList.add("active")

} 
