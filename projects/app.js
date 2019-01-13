let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convertWord(letter){
    if(letter === 'r'){
        return 'Rock';
    }
    if(letter === 'p'){
        return 'Paper';
    }
    if(letter === 's'){
        return 'Scissors';
    }
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    result_div.innerHTML = `${convertWord(userChoice)} Beats ${convertWord(computerChoice)}. You Win!`;
}
function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertWord(userChoice)} Loses To ${convertWord(computerChoice)}. You Lose!`;
}
function draw(userChoice, computerChoice){
    result_div.innerHTML = `${convertWord(userChoice)} And ${convertWord(computerChoice)}. Draw!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();