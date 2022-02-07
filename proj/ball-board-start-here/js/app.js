var WALL = 'WALL';
var FLOOR = 'FLOOR';
var BALL = 'BALL';
var GAMER = 'GAMER';
var GLUE = 'GLUE';

var GLUE_IMG = '<img src="img/spilled-glue.jpg" />';
var GAMER_IMG = '<img src="img/gamer.png" />'; // content
var BALL_IMG = '<img src="img/ball.png" />';

var gBallSetInterval;
var gGlueSetInterval;
var gCollectedBalls = 0;
var gBallsOnBoard = 2;
var gBoard;
var gGamerPos;
var gIsGameOver = false
var gvictorySound = new Audio('./sound/victory.mp3');
var gBlingSound = new Audio('./sound/bling.mp3');
var gGluePos = null;
var gRemoveGlueInterval = null;

function initGame() {
	gIsGameOver = false;
	gGluePos = false;
	gGamerPos = { i: 2, j: 9 };
	gBoard = buildBoard();
	renderBoard(gBoard);

	gBallSetInterval = setInterval(function () {
		placeElement(BALL, BALL_IMG)
	}, 5000); // interval

	gGlueSetInterval = setInterval(function () {
		placeElement(GLUE, GLUE_IMG)
	}, 2000); // interval

}


function resetGame() {
	gBallsOnBoard = 2;
	gCollectedBalls = 0
	initGame()

}

function buildBoard() {
	// Create the Matrix
	var board = createMat(10, 12)

	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			// Put FLOOR in a regular cell
			var cell = { type: FLOOR, gameElement: null };


			// Place Walls at edges
			if ((i === 0 && j === board.length / 2) || (i === board.length / 2 && j === 0) ||
				(i === board.length - 1 && j === board.length / 2) || (i === board.length / 2 && j === board[0].length - 1))
				cell.type = FLOOR


			else if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
				cell.type = WALL;

			}

			// Add created cell to The game board
			createPassage(board, i, j, cell)
			board[i][j] = cell;


		}

	}

	// Place the gamer at selected position
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

	// Place the Balls (currently randomly chosen positions)
	board[3][8].gameElement = BALL;
	board[7][4].gameElement = BALL;


	console.log(board);
	return board;
}

// Render the board to an HTML table
function renderBoard(board) {

	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];

			var cellClass = getClassName({ i: i, j: j })

			// TODO - change to short if statement
			if (currCell.type === FLOOR) cellClass += ' floor';
			else if (currCell.type === WALL) cellClass += ' wall';

			//TODO - Change To template string
			strHTML += '\t<td class="cell ' + cellClass + '"  onclick="moveTo(' + i + ',' + j + ')" >\n';

			switch (currCell.gameElement) {
				case 'GAMER':
					strHTML += GAMER_IMG;
					break;
				case 'BALL':
					strHTML += BALL_IMG;
					break;
			}
			// TODO - change to switch case statement

			// if (currCell.gameElement === GAMER) {
			// 	strHTML += GAMER_IMG;
			// } else if (currCell.gameElement === BALL) {
			// 	strHTML += BALL_IMG;
			// }

			strHTML += '\t</td>\n';
		}
		strHTML += '</tr>\n';
	}

	console.log('strHTML is:');
	console.log(strHTML);
	var elBoard = document.querySelector('.board');
	elBoard.innerHTML = strHTML;
}

// Move the player to a specific location
function moveTo(i, j) {
	if (gIsGameOver) return
	if (gGluePos) return
	var targetCell = gBoard[i][j];
	if (targetCell.type === WALL) return;

	// Calculate distance to make sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i);
	var jAbsDiff = Math.abs(j - gGamerPos.j);

	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) ||
		(jAbsDiff === 1 && iAbsDiff === 0) ||
		(gGamerPos.j === 0) ||
		(gGamerPos.j === 11) ||
		(gGamerPos.i === 0) ||
		(gGamerPos.i === 9)) {

		if (targetCell.gameElement === GLUE) {
			gGluePos = true;
			setTimeout(() => gGluePos = false, 3000);

		}
		if (targetCell.gameElement === BALL) {
			gCollectedBalls++;
			gBallsOnBoard--;

			console.log('gBallsOnBoard', gBallsOnBoard);
			var elCounter = document.querySelector('.counterBall');
			elCounter.innerText = `counter: ${gCollectedBalls}`;
			console.log('Collecting!');

			gBlingSound.play();
			if (gBallsOnBoard === 0) gameOver()


		}
		// MOVING from current position
		// Model:
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		// Dom:
		renderCell(gGamerPos, '');

		// MOVING to selected position
		// Model:
		gGamerPos.i = i;
		gGamerPos.j = j;
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GLUE;
		// DOM:
		renderCell(gGamerPos, GAMER_IMG);
		// renderCell(GLUE_IMG, '');
		// clearInterval(gGlueSetInterval);


	} // else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}
// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}
// Move the player by keyboard arrows
function handleKey(event) {

	var i = gGamerPos.i;
	var j = gGamerPos.j;


	switch (event.key) {

		case 'ArrowLeft':
			if (j === 0) {
				moveTo(5, 11);
			} else {
				moveTo(i, j - 1);
			}
			console.log('i', i);
			console.log('j', j);
			break;

		case 'ArrowRight':
			if (j === 11) {
				moveTo(5, 0);

			} else {
				moveTo(i, j + 1);
			}

			break;

		case 'ArrowUp':
			if (i === 0) {
				moveTo(9, 5)

			} else {
				moveTo(i - 1, j);
			}

			break;
		case 'ArrowDown':
			if (i === 9) {

				moveTo(0, 5)
			} else {

				moveTo(i + 1, j);
			}
			break;

	}

}
// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}

function placeElement(element, content) {
	var emptyCells = getEmptyCells() // array of empty cells
	var randomIdx = getRandomInt(0, emptyCells.length) // random index
	var currPos = emptyCells[randomIdx] // position of one empty cell
	gBoard[currPos.i][currPos.j].gameElement = element // update the model 
	renderCell(currPos, content) // update the DOM
	if (element === BALL) {
		gBallsOnBoard++;
	}
	if (gameElement === GLUE) {
		gRemoveGlueInterval = setTimeout(removeGlue, 3000);
	}

}

function getEmptyCells() {
	var emptyCells = []
	for (var i = 0; i < gBoard.length; i++) {
		for (var j = 0; j < gBoard.length; j++) {
			var currCell = gBoard[i][j]
			if (currCell.type === FLOOR && !currCell.gameElement) {
				emptyCells.push({ i, j })
			}
		}
	}
	return emptyCells
}

function gameOver() {
	gIsGameOver = true
	var restButton = document.querySelector('.reset');
	var victory = document.querySelector('.victory');
	restButton.style.display = 'block';
	victory.style.display = 'block';
	gvictorySound.play();
	clearInterval(gBallSetInterval);
	clearInterval(gGlueSetInterval);
	clearInterval(gRemoveGlueInterval);

}

function createPassage(board, i, j, cell) {
	if ((i === 0) && (j === board.length / 2)) {
		cell.type = FLOOR;
		passageUp = board[i][j];
	} else if ((i === board.length - 1) && (j === board.length / 2)) {
		cell.type = FLOOR;
		passageRight = board[i][j];
	} else if ((i === board.length / 2) && (j === 0)) {
		cell.type = FLOOR;
		passageLeft = board[i][j];
	} else if ((i === board.length / 2) && (j === board[0].length - 1)) {
		cell.type = FLOOR;
		passageDown = board[i][j];
	}
}
function removeGlue() {
	// renderCell(gBoard[location.i][location.j], null);
	for (var i = 0; i < gBoard.length; i++) {
		for (var j = 0; j < gBoard.length; j++) {
			const currCell = gBoard[i][j];
			if (currCell.gameElement === GLUE) {
				// update model:
				renderCell({ i: i, j: j }, '');
				// update DOM:
				currCell.gameElement = null;
			}
		}
	}
}

// // Add support for gameElement GLUE,
//  when user steps on
// // GLUE he cannot move for 3 seconds
// . GLUE is added to board
// // every 5 seconds and gone after 3 seconds.

