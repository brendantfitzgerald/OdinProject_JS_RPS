console.log("Let's play Rock, Paper, Scissors!")

//Declare viable options.
const options = ['ROCK','PAPER','SCISSORS']

//Generate Computer's Play
function computerPlay(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return options[0]
        case 1:
            return options[1]
        case 2:
            return options[2]
    }
}

//Prompt for Player's Play and force to Upper Case.
function playerPlay(){
    var input = prompt("Rock, Paper, Scissors?")
    input = input.toUpperCase()
    if (!options.includes(input)){
        input = computerPlay()
        console.log("Invalid Entry. Now you chose " + input + ".")
    }
    return input
}

//Compare Computer's Play to Player's Play and return result for Round.
function playRound(computerSelection,playerSelection){
    if (playerSelection == computerSelection){
        return("Draw, idiot. You both chose " + playerSelection + ".")
    }
    else if ((playerSelection == options[0] && computerSelection == options[1]) || (playerSelection == options[1] && computerSelection == options[2]) || (playerSelection == options[2] && computerSelection == options[0])){
        return("You lose. " + computerSelection + " beats " + playerSelection +".")
    }
    else {
        return(("You win. " + playerSelection + " beats " + computerSelection +"."))
    }
}

//Play best of 5 Rounds and keep score.
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



game()