
let redEl = document.querySelector(".red")
let yellowEl = document.querySelector(".yellow")
let greenEl = document.querySelector(".green")


let colours = ["red", "yellow", "green"]
let currentIndex = 0


function updatecolor(){

   redEl.classList.remove("active")
    yellowEl.classList.remove("active")
    greenEl.classList.remove("active")

    currentIndex+=1
if(currentIndex > 2){
    currentIndex = 0
}

if(colours[currentIndex] === "red"){
    redEl.classList.add("active")
} else if(colours[currentIndex] === "yellow"){
    yellowEl.classList.add("active")
} else {
    greenEl.classList.add("active")
}
}