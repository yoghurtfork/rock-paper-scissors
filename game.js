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

let humanScore = 0;
let computerScore = 0;

