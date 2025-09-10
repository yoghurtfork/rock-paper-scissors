let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice(){
    let choice = "choice";
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Choose 'rock', 'paper', or 'scissors'!", "choice");
        choice = choice.toLowerCase();
    }
    return choice;
}

function playGame(){
    let humanChoice;
    let computerChoice;
    humanScore = 0;
    computerScore = 0;

    for (i = 1; i <= 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        console.log("Round " + i + ": " + playRound(humanChoice, computerChoice));
    }

    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
    
    if (computerScore == humanScore){
        console.log("The game is a tie!");
    }
    else if (computerScore < humanScore){
        console.log("The game is won!");
    }
    else {
        console.log("The game is lost!");
    }
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const roundResult = document.querySelector("#roundResult");
const runningScore = document.querySelector("#runningScore");

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function playRound(humanChoice, computerChoice){
    let str = "";
    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            str = "Tie!";
        }
        else if (computerChoice == "paper"){
            str = "You lose! Paper beats rock.";
            computerScore++;
        }
        else {
            str = "You win! Rock beats scissors.";
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "paper"){
            str = "Tie!";
        }
        else if (computerChoice == "rock"){
            str = "You win! Paper beats rock.";
            humanScore++;
        }
        else {
            str = "You lose! Scissors beats paper.";
            computerScore++;
        }
    }
    else {
        if (computerChoice == "scissors"){
            str = "Tie!";
        }
        else if (computerChoice == "rock"){
            str = "You lose! Rock beats scissors.";
            computerScore++;
        }
        else {
            str = "You win! Scissors beats paper.";
            humanScore++;
        }
    }
    roundResult.textContent = str;
    runningScore.textContent = "Total score - " + humanScore + ":" + computerScore;
    return str;
}