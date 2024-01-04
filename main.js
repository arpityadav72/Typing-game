let wordInput = document.getElementById("word-input")
let currentWord = document.getElementById("current-word")
let timeInput = document.getElementById("time")
let scoreInput = document.getElementById("score")
let message = document.getElementById("message")
let audio = document.getElementById("music")


let timeleft = 5
let scoreDisplay = 0

const words = ["Jack", "Python", "Carry", "Asus", "Dell", "Hp", "Acer", "Hulk", "Ironman", "Thor"]

function showWords(words) {

    let randomIdx = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randomIdx]

}

function inputHandler(input) {
    if (input == currentWord.innerHTML) {
        console.log("batao bhai")
        showWords(words)
        wordInput.value = ""
        timeleft = 5
        scoreDisplay++
        scoreInput.innerHTML = scoreDisplay


    }
}


window.addEventListener("DOMContentLoaded", function () {
    showWords(words)
    wordInput.addEventListener("input", (e) => inputHandler(e.target.value))
})

function timeHandler(){
    if (timeleft==0){
        message.innerText="GAME OVER"
        
    }
    if ( timeleft >= 0)
    timeInput.innerHTML=timeleft
 timeleft--
 

}


setInterval(timeHandler, 1000)
