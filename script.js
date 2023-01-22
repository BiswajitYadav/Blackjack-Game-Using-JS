let player = {
    Name : "Biswajit",
    Chips : 135
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ""

playerEl.textContent = player.Name + ": " + player.Chips +"$"


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? "
    }
    else if (sum === 21) {
        message = "You've got a blackjack"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game "
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum : " + sum
    cardEl.textContent = "Cards : "
    for (let i = 0; i <= cards.length - 1; i++) {
        cardEl.textContent += cards[i] + " "
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    isAlive = true
    cards = [firstCard, secondCard]
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
} 
