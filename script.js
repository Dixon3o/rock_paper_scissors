let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let computerChoice;
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0){
        computerChoice = 'paper';
        console.log('Computer choice is: paper');
    } else if (randomNum === 1){
        computerChoice = 'rock';
        console.log('Computer choice is: rock')
    } else{
        computerChoice = 'scissors';
        console.log('Computer choice is: scissors');
    }
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice = prompt("Choose between rock, paper or scissors: ");
    humanChoice = humanChoice.toLowerCase();
    console.log("Your choice is: " + humanChoice)
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1;
        console.log('Congrats! You won. You now have ' + humanScore + " victories");
    } else if (humanChoice === 'paper' && computerChoice === 'paper'){
        console.log("It's a draw.");
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore += 1;
        console.log('You lost! Computer now has ' + computerScore + ' victories');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore += 1;
        console.log('Congrats! You won. You now have ' + humanScore + " victories");
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore += 1;
        console.log('You lost! Computer now has ' + computerScore + ' victories');
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
        console.log("It's a draw.");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore += 1;
        console.log('Congrats! You won. You now have ' + humanScore + " victories");
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore += 1;
        console.log('You lost! Computer now has ' + computerScore + ' victories');
    } else if (humanChoice === 'rock' && computerChoice === 'rock'){
        console.log("It's a draw.");
    }
    return humanChoice && computerChoice;
}
function playGame(){
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    declareWinner();
}
playGame();
function declareWinner(){
    if (humanScore > computerScore){
        console.log("Congrats! You won against the computer!");
    } else if (computerScore > humanScore){
        console.log("You have put a fight but couldn't defeat the computer!");
    } else {
        console.log("It is a complete draw this time.");
    }
}