let card1 = 6
let card2 = 8
let card3 = 7
let message;
let sum = card1 + card2 + card3
let result = document.getElementById("msg")
let ans = document.getElementById("sum")
let cards = document.getElementById("crds")

function startGame(){
    if (sum<=20){
        message = "Pick another card?"
    }else if(sum === 21){
        message = "Congratulation you won!"
    }else{
        message = "You lose"
    }
    result.innerText = message
    ans.innerText += sum
    cards.innerText += card1 + ",  " + card2 + ", " + card3

}

function newCard(){
    result.innerText = "Adding one new crd to the deck!"
    startGame();
}



