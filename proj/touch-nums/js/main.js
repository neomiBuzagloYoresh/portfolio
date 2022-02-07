'use strict'

var gLevel = 16; // level is 16 || 25 || 36
var gBoard = null;
var gCounter = 1;
var gIsFirstClick;
var gTimerInterval;
var gStartTime;

function init() {
    gIsFirstClick = true;
    gBoard = createBoard(gLevel);
    renderBoard(gBoard);
}

function renderBoard(board) {
    var shuffledBoard = shuffle(board);
    var boardLength = board.length

    var strHTML = '';
    for (var i = 0; i < Math.sqrt(boardLength); i++) {
        strHTML += '<tr>';
        for (var j = 0; j < Math.sqrt(boardLength); j++) {
            var currCell = shuffledBoard.pop();

            strHTML += `<td  data-currCell="${currCell}"
             onclick="cellClicked(this,${currCell})">${currCell}</td>`;

        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    console.log('elBoard', elBoard);
    elBoard.innerHTML = strHTML;
}

function cellClicked(elNumber, clickedNum) {
    gIsFirstClick = true;
    var elVictory = document.querySelector('h2')
    var elResetBtn = document.querySelector('.new-game');

    if (clickedNum === gCounter) {
        if (clickedNum === 1) startTimer();
        elNumber.classList.add('correct');
        gCounter++

        if (gCounter === gLevel + 1) {
            console.log('game over');
            clearInterval(gTimerInterval);
            elResetBtn.style.display = 'block'
            elVictory.style.display = 'block'
        }
    }
}

function newGame() {
    var elResetBtn = document.querySelector('.new-game');
    var elVictory = document.querySelector('h2');
    document.querySelector('.timer').innerText = 'Time: 00.000';
    elVictory.style.display = 'none';
    elResetBtn.style.display = 'none';
    // gLevel = 16;
    gBoard = createBoard();
    renderBoard(gBoard);
}

function getLevel(level) {
    gIsFirstClick = true;
    gLevel = level;
    clearInterval(gTimerInterval);
    document.querySelector('.timer').innerText = 'Time: 00.000';
    gCounter = 1;
    init();
    return gLevel
}


function createBoard(level) {
    var newBoard = [];
    for (var i = 0; i < level; i++) {
        newBoard.push(i + 1);
    }
    return newBoard;
}


// function resetNums() {
//     var nums = []
//     for (var i = 1; i <= gLevel; i++) {
//         nums.push(i)
//     }
//     return nums
// }

