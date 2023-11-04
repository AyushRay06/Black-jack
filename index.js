
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Ayush Ray",
    chip : 145
}
 

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip
console.log(playerEl)
console.log(cards)

//for generating random Card
function getRendomCard(){
    let randomNumber = Math.floor(Math.random() * 13) +1
    if(randomNumber >10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

//for starting the game
function startGame(){
    isAlive = true
    let firstCard = getRendomCard();
    let secondCard = getRendomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if (sum<=20){
        message = "Pick another card?"
    }else if(sum === 21){
        message = "Congratulation you won!"
        hasBlackJack = true
    }else{
        message = "You lose"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack ===false){
        let card = getRendomCard();
        sum += card
        cards.push(card)
        renderGame(); 
    }
    
}



