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
        return 'You Win';
    }
    else {
        ComputerWin++;
        return 'You Lose';
    }
}

function displayWinner(){
    // Cointing wins
    ComputerWin = 0; 
    PlayerWin = 0;

    console.log(`You choses ${PlayerValue}`);
    console.log(`Computer choses ${ComputerValue}`);

    console.log(determineWinner(ComputerValue,PlayerValue ));
    
    console.log(`Computer win ${ComputerWin}`);
    console.log(`Your win ${PlayerWin}`);
}

// Get the value from the user and play the game
function playGame(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click',function(e){
        const buttonClass = e.target.classList.value;
        if (buttonClass === 'rockButton') {
            PlayerValue = 'rock'; 
            ComputerValue = getComputerValue();
            displayWinner();
        } else if (buttonClass === 'paperButton') {
            PlayerValue = 'paper'; 
            ComputerValue = getComputerValue();
            displayWinner();
        } else if (buttonClass === 'scissorButton') {
            PlayerValue = 'scissor'; 
            ComputerValue = getComputerValue();
            displayWinner();
        }
    }));

}



let PlayerValue = '';
let ComputerValue = '';
playGame();