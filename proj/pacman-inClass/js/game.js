'use strict'
const WALL = '🧇';
const FOOD = '.';
const EMPTY = ' ';
const CHERRY = '🍒';
var superFood = '🍖';
var gCherrySetInterval;
// var gFoodCounter = 0;
var gTotalFood; // change to 56


var gBoard;
var gGame = {
    score: 0,
    isOn: false
}

function init() {
    gTotalFood = 0
    // console.log('Hello')
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    // console.table(gBoard)
    updateScore(0)
    printMat(gBoard, '.board-container')

    gCherrySetInterval = setInterval(addCherry, 15000); // interval

    gGame.isOn = true

}


function buildBoard() {
    var SIZE = 10;
    var board = [];
    gTotalFood = 0
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;

            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if (board[i][j] === FOOD) {
                gTotalFood++;
            }
        }

    }

    board[1][1] = superFood;
    board[1][8] = superFood;
    board[8][1] = superFood;
    board[8][8] = superFood;
    gTotalFood -= 5
    console.log('gTotalFood', gTotalFood);
    return board;
}

function updateScore(diff) {

    //update model and dom
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score;
    if (!gGame.isOn) {
        gGame.score = 0

    }
}

function gameOver() {
    console.log('Game Over');

    gGame.isOn = false;

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // update the DOM
    renderCell(gPacman.location, EMPTY);
    clearInterval(gCherrySetInterval)
    var restModel = document.querySelector('.rainbow-box');
    restModel.style.display = 'block';
    //var textDiff = document.querySelector('.rainbow-box span');
    //textDiff.innerText = 'Game Over!';
    restModel.querySelector('span').innerText = 'Game Over!'
    var restBtn = document.querySelector('.reset');
    restBtn.style.display = 'block';
    clearInterval(gIntervalGhosts)
}

function restartGame() {
    gGame.score = 0;
    gTotalFood = 0;
    gameOver();
    init();
    var restModal = document.querySelector('.rainbow-box');
    restModal.style.display = 'none';
    var restBtn = document.querySelector('.reset');
    restBtn.style.display = 'none';
}

function checkVictory() {
    if (gTotalFood) return
    var restModal = document.querySelector('.rainbow-box');
    restModal.style.display = 'block';
    var textDiff = document.querySelector('.rainbow-box span');
    textDiff.innerText = 'VICTORY!';
    textDiff.style.color = 'black';
    document.querySelector('.reset').style.display = 'block';
}

