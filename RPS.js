console.log("Hello world")

function computerPlay(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function playerPlay(){
    var input = prompt("Rock, Paper, Scissors?")
    input = input.toUpperCase()
    if (!options.includes(input)){
        console.log("Invalid Entry. Now you chose Rock.")
        input = "ROCK"
    }
    return input
}

function playRound(computerSelection,playerSelection){
    if (playerSelection == computerSelection){
        return("Draw, idiot.")
    }
    else if ((playerSelection == 'ROCK' && computerSelection == "PAPER") || (playerSelection == 'PAPER' && computerSelection == "SCISSORS") || (playerSelection == 'SCISSORS' && computerSelection == "ROCK")){
        return("You lose. " + computerSelection + " beats " + playerSelection +".")
    }
    else {
        return(("You win. " + playerSelection + " beats " + computerSelection +"."))
    }
}

const options = ['ROCK','PAPER','SCISSORS']
var computerSelection = computerPlay()
var playerSelection = playerPlay()
console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(computerSelection,playerSelection))