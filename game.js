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
    console.log(str);
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);