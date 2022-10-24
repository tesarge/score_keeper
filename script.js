/////////////////////////////Game Basics////////////////////////////////
//ID Player Scores and Play To Score Select in HTML
const winningScoreSelect = document.querySelector('#playTo');

//Set  Play to score at start
let win = 3;

//Start  win status as false
let isGameOver = false;

/////////////////////////Players & Functions//////////////////////////////
//Player Info Objects
const p1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#playerOneScore')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#playerTwoScore')
}

//Player buttons functionality
function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
    }
    if (player.score === win){
        isGameOver = true;
        player.display.classList.add('winner');
        opponent.display.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
}


//When Player buttons clicked, add one to respective player score
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);

});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});



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
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    isGameOver = false;
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;
};

