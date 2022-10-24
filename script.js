/////////////////////////Players & Functions//////////////////////////////
//Player Info Objects
const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: playerOneScore = document.querySelector('#playerOneScore')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: playerOneScore = document.querySelector('#playerTwoScore')
}

//Player buttons functionality
function updateScores(player, opponent){
    if(!isGameOver){
        player += 1;
    }
    if (player === win){
        isGameOver = true;
        player.classList.add('winner');
        opponent.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}


//When Player buttons clicked, add one to respective player score
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);

});

p2button.addEventListener('click', function () {
    updateScores(p2, p1)
});

/////////////////////////////Game Basics////////////////////////////////
//ID Player Scores and Play To Score Select in HTML
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

///////////////////////////////Reset Button/////////////////////////////
//Reset button
const resetBtn = document.querySelector('#reset');

//When Reset button clicked, set scores to zero
resetBtn.addEventListener('click', reset)

//Reset function
function reset () {
    p1score = 0;
    p2score = 0;
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
    isGameOver = false;
    playerOneScore.classList.remove('winner', 'loser');
    playerTwoScore.classList.remove('winner', 'loser');
};

