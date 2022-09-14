// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    let arrayItem = ['Rock', 'Paper', 'Scissors'];
  
    const computerRandomChoice = arrayItem[Math.floor(Math.random() * arrayItem.length)]; 
  
    return computerRandomChoice;
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  function getResult(playerChoice, computerChoice) {
     let score 
      
     if(playerChoice === computerChoice){
          score = 0
      } else if(playerChoice === "Rock" && computerChoice === "Scissors"){
          score = 1
      } else if(playerChoice === "Scissors" && computerChoice === "Paper") {
          score = 1
      } else if(playerChoice === "Paper" && computerChoice === "Rock") {
          score = 1
      } else {
          score = -1
      }
  
      return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    // Don't forget to grab the div with the 'result' id!
   let result = document.getElementById('result');
   
   let playerScore = document.getElementById('player-score');
   playerScore.innerText = `${Number(playerScore.innerText) + score}`
   
   let hand = document.getElementById('hands');
   hand.innerText = `${playerChoice} vs ${computerChoice}`
  
   if(score === 1){
      return result.innerText = 'Win'
   }else if(score === -1) {
      return result.innerText = 'Lose'
   } else {
      return result.innerText = 'Draw'
   }
  
  
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    const computer = getComputerChoice();
    const result = getResult(playerChoice.value, computer);
  
    showResult(result, playerChoice.value, computer);
  }
  
  
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  function playGame() {
    // use querySelector to select all RPS Buttons
    const btns = document.querySelectorAll('.rpsButton');
  
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    
      btns.forEach(btn => {
          btn.onclick = () => onClickRPS(btn)
      });
   
  
    // Add a click listener to the end game button that runs the endGame() function on click
      let resetGame = document.getElementById('endGameButton');
      resetGame.onclick = () => endGame();
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
      let result = document.getElementById('result');
      let playerScore = document.getElementById('player-score');
      let hand = document.getElementById('hands');
  
      result.innerText = '';
      playerScore.innerText = '';
      hand.innerText = '';
  }
  
  playGame();