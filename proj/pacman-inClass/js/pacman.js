'use strict'
// const PACMAN = '<img class="pacman" src="./img/pacman.jpeg">';
const PACMAN_RIGHT = '<img class="pacman" src="./img/pacman-right.png">';
const PACMAN_LEFT = '<img class="pacman" src="./img/pacman-left.png">';
const PACMAN_UP = '<img class="pacman" src="./img/pacman-up.png">';
const PACMAN_DOWN = '<img class="pacman" src="./img/pacman-down.png">';
var PACMAN = PACMAN_RIGHT;

var gPacman;
var isSuper = false;

function createPacman(board) {
    gPacman = {
        location: {
            i: 5,
            j: 7
        }

    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(ev) {
    if (!gGame.isOn) return

    // use getNextLocation(), nextCell
    var nextLocation = getNextLocation(ev)
    // console.log('nextLocation', nextLocation)
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('nextCell', nextCell)
    // return if cannot move
    if (nextCell === WALL) return
    // hitting a ghost?  call gameOver
    if (nextCell === GHOST) {
        if (!isSuper) {
            gameOver();
            return
        }
        removeGhost(nextLocation)
    }

    if (nextCell === superFood) {
        if (isSuper) return

        isSuper = true;

        var superCell = document.querySelectorAll(`.cell-1-${gBoard[0].length - 2},.cell-1-1,.cell-${gBoard.length - 2}-1,.cell-${gBoard.length - 2}-${gBoard[0].length - 2}`);
        for (var i = 0; i < superCell.length; i++) { // not on the cell you are in 
            superCell[i].style.opacity = 0.3; // check with your position on the board

        }

        setTimeout(returnGhostToBoard, 5000, superCell)
    }

    if (nextCell === CHERRY) {
        updateScore(10);
        // gTotalFood += 10;
        // console.log('updateScore', updateScore);
    }


    if (nextCell === FOOD) {

        gTotalFood--;
        updateScore(1)
        checkVictory()

    }

    // moving from corrent position:
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // update the DOM
    renderCell(gPacman.location, EMPTY)

    // Move the pacman to new location
    // update the model
    gPacman.location = {
        i: nextLocation.i,
        j: nextLocation.j
    }
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
    // update the DOM
    renderCell(gPacman.location, PACMAN)

}

function getNextLocation(keyboardEvent) {
    // console.log('keyboardEvent.code', keyboardEvent.code)
    // figure out nextLocation

    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }

    switch (keyboardEvent.code) {
        case 'ArrowUp':
            nextLocation.i--
            PACMAN = PACMAN_UP;
            break;
        case 'ArrowDown':
            nextLocation.i++
            PACMAN = PACMAN_DOWN;
            break;
        case 'ArrowLeft':
            nextLocation.j--
            PACMAN = PACMAN_LEFT;
            break;
        case 'ArrowRight':
            nextLocation.j++
            PACMAN = PACMAN_RIGHT;
            break;
        default: return null
    }
    return nextLocation;
}