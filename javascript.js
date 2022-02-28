//create a computer number randomizer that outputs either scissors, paper, or rock. Maybe through random + if statements?

function computerPlay () {

    // creates a number from 1-3 representing scissors, paper or rock, output number, then if statements run
function computer () {
    computer = Math.floor(Math.random() * 3) ;
    return computer
}

computer()
    
    if (computer === 0) {
        return "scissors"
    }

    if (computer === 1) {
        return "paper"
    }
    if (computer === 2) {
        return "rock"
    }

    else {
        return "an error has occured"
    }

}

const rockSelection = document.querySelector(".rock");
const paperSelection = document.querySelector('.paper');
const scissorsSelection = document.querySelector('.scissors');
const announcer = document.querySelector('.announcer');
const playerCounter = document.querySelector('.player');
const computerCounter = document.querySelector('.computer');
const gameWinner = document.querySelector('.gamewinner');
const winLosePage = document.querySelector('.playerWinLose');
const playAgain = document.querySelector('.playagain');
const winText = document.querySelector('.textWinAnnouncer');
const playerPlay =document.querySelector('.playerPlay');
const compPlay = document.querySelector('.computerPlay');

//   function askPlayer (selection) {
//         let playerAnswer = selection;
//         return playerAnswer
//     }

// can't call the playRound twice or else it'll break

function playPlayer() {
        let computerScore = 0;
        let playerScore = 0;

        rockSelection.addEventListener("click", () => {
            let playRock  = playRound('rock');
            if (playRock === 1) {
                playerScore += 1 ;
                playerCounter.textContent = `Player Score: ${playerScore}`;
            }

            else if (playRock === 0) {
                computerScore += 1;
                computerCounter.textContent = `Computer Score: ${computerScore}`
            }
            gameAnnounce()
        })
        paperSelection.addEventListener('click', () => {
            let playPaper = playRound('paper');
            if (playPaper === 1) {
                playerScore += 1 ;
                playerCounter.textContent = `Player Score: ${playerScore}`
            }
            else if (playPaper === 0) {
                computerScore += 1;
                computerCounter.textContent = `Computer Score: ${computerScore}`
            }
            gameAnnounce()
        })
        scissorsSelection.addEventListener('click', () => {
            let playScissors = playRound('scissors');
            if (playScissors=== 1) {
                playerScore += 1 ;
                playerCounter.textContent = `Player Score: ${playerScore}`
            }
            else if (playScissors=== 0) {
                computerScore += 1;
                computerCounter.textContent = `Computer Score: ${computerScore}`
            }
            gameAnnounce() 
        })

        function gameAnnounce() {
            if (playerScore === 5) {
                computerScore = 0;
                playerScore = 0;
                playerCounter.textContent = `Player Score: ${playerScore}`;
                computerCounter.textContent = `Computer Score: ${computerScore}`;
                winText.textContent='You won the match, would you like to play again?';
                winLosePage.style.opacity = '1';
                winLosePage.style.zIndex = '1';
             }
        
             else if (computerScore === 5) {
                computerScore = 0;
                playerScore = 0;
                playerCounter.textContent = `Player Score: ${playerScore}`;
                computerCounter.textContent = `Computer Score: ${computerScore}`;
                winText.textContent='You lost the match, would you like to play again?';
                winLosePage.style.opacity = '1';
                winLosePage.style.zIndex = '1';
             }
            }

        }
playPlayer()

playAgain.addEventListener('click', () => {
    winLosePage.style.opacity = '0';
    winLosePage.style.zIndex = '-1';
    announcer.textContent = 'SELECT AN OPTION';
    playerPlay.style.removeProperty('background');
    compPlay.style.removeProperty('background');



})


function playRound (playerSelection, computerSelection = computerPlay()) {

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        announcer.textContent = 'You win the round!';
        playerPlay.style.background = 'url(./Icons-images/scissors.svg)';
        compPlay.style.background = 'url(./Icons-images/paper.svg)';

        return 1
    }

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        announcer.textContent = 'You lost the round';
        playerPlay.style.background = 'url(./Icons-images/scissors.svg)';
        compPlay.style.background = 'url(./Icons-images/rock.svg)';
        return 0
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        announcer.textContent = 'You win the round!';
        compPlay.style.background = 'url(./Icons-images/scissors.svg)';
        playerPlay.style.background = 'url(./Icons-images/rock.svg)';
        return 1
    }
    

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        announcer.textContent = 'You lost the round';
        playerPlay.style.background = 'url(./Icons-images/rock.svg)';
        compPlay.style.background = 'url(./Icons-images/paper.svg)';
        return 0
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        announcer.textContent = 'You win the round!';
        playerPlay.style.background = 'url(./Icons-images/paper.svg)';
        compPlay.style.background = 'url(./Icons-images/rock.svg)';
        return 1
    }
    

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        announcer.textContent = 'You lost the round the round';
        playerPlay.style.background = 'url(./Icons-images/paper.svg)';
        compPlay.style.background = 'url(./Icons-images/scissors.svg)';
        
        return 0
    }

    if (playerSelection === computerSelection) {
        announcer.textContent = "It's a tie!";
        switch(playerSelection) {
            case "rock" : playerPlay.style.background = 'url(./Icons-images/rock.svg)';
            break

            case "scissors" : playerPlay.style.background = 'url(./Icons-images/scissors.svg)';
            break

            case "paper" : playerPlay.style.background = 'url(./Icons-images/paper.svg)';
            break
        }

        switch(computerSelection) {
            case 'rock' : compPlay.style.background = 'url(./Icons-images/rock.svg)';
            break

            case 'scissors' : compPlay.style.background = 'url(./Icons-images/scissors.svg)';
            break

            case 'paper' : compPlay.style.background = 'url(./Icons-images/paper.svg)';
            break
        }

    }

    else {

        return "RESTART GAME, BAD INPUT."
    }   

}

// playPlayer()

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
    
//     switch ('') {

//         case 0: 
//             computerScore += 1; 
//             console.log(computerScore)
//         break;

//         case 1: 
//             playerScore += 1;
//             console.log(playerScore)
//         break;
//     }


//             function gameAnnounce() {

//     if (computerScore > playerScore) {
//         return "Player Lose"

//         //drop div and say PLAYER WIN, then give option to reset game so they can play again.
//     }
//     if (computerScore < playerScore) {
//         return "Player Win"

//         //drop div and say PLAYER WIN, then give option to reset game so they can play again.
//     }
//     if (computerScore === playerScore) {
//         return "GAME TIE"

//         //drop div and say PLAYER WIN, then give option to reset game so they can play again.
//     }
// }

// return gameAnnounce()
// }

// game()







