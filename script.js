// Get value form the computer
function getComputerValue(){
    selection = Math.floor(Math.random()*3);

    return (selection==0) ? 'rock' : (selection==1) ? 'paper' : 'scissor';
}

// Determine whose the winner
function determineWinner(ComputerSelection, PlayerSelection){

    if(ComputerSelection === PlayerSelection){
        return "It's a tie";
    }

    else if (
    (PlayerSelection === 'rock' && ComputerSelection === 'scissor') || 
    (PlayerSelection === 'paper' && ComputerSelection === 'rock') ||
    (PlayerSelection === 'scissor' && ComputerSelection === 'paper')
    ) {
        PlayerWin++;
        return 'You Win the Round';
    }
    else {
        ComputerWin++;
        return 'You Lose the Round';
    }
}

function displayWinner(){

    ComputerValue = getComputerValue();

    const text = document.querySelector('.displayWinner');
    text.innerHTML = '';
    text.innerHTML += `You choses ${PlayerValue} <br>`;
    text.innerHTML += `Computer choses ${ComputerValue} <br>`;

    text.innerHTML += `${determineWinner(ComputerValue,PlayerValue)}<br>`;

    text.innerHTML += `Computer win ${ComputerWin} <br>`;
    text.innerHTML += `Your win ${PlayerWin} <br>`;
}

// Get the value from the user and play the game
function playGame(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click',function(e){

        const buttonClass = e.target.classList.value;

        if (buttonClass === 'rockButton') {
            PlayerValue = 'rock'; 
            displayWinner();
        } else if (buttonClass === 'paperButton') {
            PlayerValue = 'paper'; 
            displayWinner();
        } else if (buttonClass === 'scissorButton') {
            PlayerValue = 'scissor'; 
            displayWinner();
        }
        
    }));

}



let PlayerValue = '';
let ComputerValue = '';
let ComputerWin = 0; 
let PlayerWin = 0;
playGame();