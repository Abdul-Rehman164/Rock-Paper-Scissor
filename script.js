// Get value form the computer
function getComputerValue(){
    selection = Math.floor(Math.random()*3);

    return (selection==0) ? 'rock' : (selection==1) ? 'paper' : 'scissor';
}


// Get Value from the User
function getPlayerValue(){
    // Handling cancelation of the prompt
    value = prompt('Enter value');
    if (value==null){
        alert('You canceled the game');
        return value;
    } 
    else if (typeof value == 'string') {
        value = value.toLowerCase();
    }

    // if the user writes another value than rock paper or scissor
    if((value != 'rock') && (value != 'paper') && (value != 'scissor')) {
        alert('Enter rock, paper or scissor');
        getPlayerValue();
    } else{
        return value;
    }
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


// Looping through the game
function game(){
    // Cointing wins
    ComputerWin = 0; 
    PlayerWin = 0;

    for(let i = 1; i <= 5; i++){

        const PlayerValue = getPlayerValue();
        const ComputerValue = getComputerValue();
        if (PlayerValue==null){
            return 0;
        }else{

            console.log(`Computer choses ${ComputerValue}`)
            console.log(`You choses ${PlayerValue}`)

            alert(determineWinner(ComputerValue,PlayerValue ));

            console.log(`Computer win ${ComputerWin}`);
            console.log(`Your win ${PlayerWin}`);
        }
    }
}

game();