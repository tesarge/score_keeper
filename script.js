//Player Buttons
const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetBtn = document.querySelector('#reset');

//ID Player Scores and Play To Score Select in HTML
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const winningScoreSelect = document.querySelector('#playTo');

//Set Player Score and Play to score at start
let p1score = 0;
let p2score = 0;
let win = 3;

//Start  win status as false
let isGameOver = false;

//Allow Select element to set the winning score
winningScoreSelect.addEventListener('change', function () {
    win = parseInt(this.value);
    reset();
});

//When Player buttons clicked, add one to respective player score
p1btn.addEventListener('click', function () {
    if(!isGameOver){
        p1score += 1;
    }
    if (p1score === win){
        isGameOver = true;
        playerOneScore.classList.add('winner');
        playerTwoScore.classList.add('loser');
    }
    playerOneScore.textContent = p1score;

});

p2btn.addEventListener('click', function () {
    if(!isGameOver){
        p2score += 1;
    }
    if (p2score === win){
        isGameOver = true;
        playerTwoScore.classList.add('winner');
        playerOneScore.classList.add('loser');
    }
    playerTwoScore.textContent = p2score;
});


//When Reset button clicked, set scores to zero
resetBtn.addEventListener('click', reset)

function reset () {
    p1score = 0;
    p2score = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    isGameOver = false;
    playerOneScore.classList.remove('winner', 'loser');
    playerTwoScore.classList.remove('winner', 'loser');
};