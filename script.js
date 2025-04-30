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
}
getComputerChoice();