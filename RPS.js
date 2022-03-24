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
        input = computerPlay()
        console.log("Invalid Entry. Now you chose " + input + ".")
    }
    return input
}

function playRound(computerSelection,playerSelection){
    if (playerSelection == computerSelection){
        return("Draw, idiot. You both chose " + playerSelection + ".")
    }
    else if ((playerSelection == 'ROCK' && computerSelection == "PAPER") || (playerSelection == 'PAPER' && computerSelection == "SCISSORS") || (playerSelection == 'SCISSORS' && computerSelection == "ROCK")){
        return("You lose. " + computerSelection + " beats " + playerSelection +".")
    }
    else {
        return(("You win. " + playerSelection + " beats " + computerSelection +"."))
    }
}

function game(){
    var computerScore = 0
    var playerScore = 0
    var round
    while (computerScore < 3 && playerScore < 3){
        round = playRound(computerPlay(),playerPlay())
        if (round.indexOf("win") != -1 ){
            playerScore++;
        }
        else if (round.indexOf("lose") != -1 ){
            computerScore++;
        }
        else {}
        console.log(round)
        console.log("You:" + playerScore + " | Computer:" + computerScore)
    }
}

const options = ['ROCK','PAPER','SCISSORS']

game()