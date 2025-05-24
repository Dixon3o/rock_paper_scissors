let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let computerChoice;
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0){
        computerChoice = 'paper';
        div2.textContent = 'Computer choice is: paper';
    } else if (randomNum === 1){
        computerChoice = 'rock';
        div2.textContent = 'Computer choice is: rock';
    } else{
        computerChoice = 'scissors';
        div2.textContent = 'Computer choice is: scissors';
    }
    return computerChoice;
}
function getHumanChoice(){
    let humanChoice;
    div.textContent = "Your choice is: " + humanChoice;
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1;
        div3.textContent = 'Congrats! You won. You now have ' + humanScore + " victories.";
    } else if (humanChoice === 'paper' && computerChoice === 'paper'){
        div3.textContent = "It's a draw.";
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore += 1;
        div3.textContent = 'You lost! Computer now has ' + computerScore + ' victories.';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore += 1;
        div3.textContent = 'Congrats! You won. You now have ' + humanScore + " victories.";
    } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        computerScore += 1;
        div3.textContent = 'You lost! Computer now has ' + computerScore + ' victories.';
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
        div3.textContent = "It's a draw.";
    } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore += 1;
        div3.textContent = 'Congrats! You won. You now have ' + humanScore + " victories.";
    } else if (humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore += 1;
        div3.textContent = 'You lost! Computer now has ' + computerScore + ' victories.';
    } else if (humanChoice === 'rock' && computerChoice === 'rock'){
        div3.textContent = "It's a draw.";
    }
if(humanScore === 5){
    humanScore = 0;
    computerScore = 0;
    div3.textContent = 'You have 5 points total. You won.';
} else if (computerScore === 5){
    humanScore = 0;
    computerScore = 0;
    div3.textContent = 'Computer has 5 points total. You lost.';
}
    
}



const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
btn1.textContent = 'Scissors';
btn2.textContent = 'Rock';
btn3.textContent = 'Paper';
document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

btn1.addEventListener('click', ()=>{
    let humanChoice = 'scissors';
    div.textContent = 'Your choice is: ' + humanChoice;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
btn2.addEventListener('click', () =>{
    let humanChoice = 'rock';
    div.textContent = 'Your choice is: ' + humanChoice;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
btn3.addEventListener('click', () => {
    let humanChoice = 'paper';
    div.textContent = "Your choice is: " + humanChoice;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const div = document.createElement('div');
document.body.appendChild(div);
const div2 = document.createElement('div');
document.body.appendChild(div2);
const div3 = document.createElement('div');
document.body.appendChild(div3);
const div4 = document.createElement('div');
document.body.appendChild(div4);

