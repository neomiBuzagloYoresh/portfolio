'use strict'

var gQuests;
var gCurrQuestIdx = 0;
var gNextId = 100

function onInit() {
    gQuests = createQuests()
    console.log('gQuests', gQuests);
    renderQuests()
}

function createQuests() {
    return [
        {
            id: gNextId++,
            opts: ['Elvis Presley', 'John Lennon'],
            correctOptIndex: 1,
            img: 'picture/1.jpg'
        },
        {
            id: gNextId++,
            opts: ['David Bowie', 'Ringo Starr'],
            correctOptIndex: 0,
            img: 'picture/2.jpg'
        },
        {
            id: gNextId++,
            opts: ['Arik Einstein', 'John Denver'],
            correctOptIndex: 0,
            img: 'picture/3.jpg'
        },
        {
            id: gNextId++,
            opts: ['Bon Jovi', 'Frank Sinatra'],
            correctOptIndex: 1,
            img: 'picture/4.jpg'
        }

    ]
}

function checkAnswer(idx) {
    var elContainerBtn = document.querySelector('.reset');
    var elVictory = document.querySelector('h2');

    var currQuest = gQuests[gCurrQuestIdx]
    console.log('currQuest', currQuest);

    if (idx === currQuest.correctOptIndex) {
        if (gCurrQuestIdx === gQuests.length - 1) {
            // console.log(gCurrQuestIdx);
            elVictory.style.display = 'block';
            elContainerBtn.style.display = 'block';
        } else {
            gCurrQuestIdx++;
            return renderQuests()
        }
    }
}

function renderQuests() {
    var elImg = document.querySelector('.quest-container img');
    var elContainerBtn = document.querySelector('.buttons-container');
    var currQuest = gQuests[gCurrQuestIdx];
    elImg.src = currQuest.img;
    // console.log(elImg.src);
    var strHTML = '';
    for (var i = 0; i < currQuest.opts.length; i++) {
        var currOpt = currQuest.opts[i];
        strHTML += `<button onClick = "checkAnswer(${i})" >${currOpt}</button>`;
    }
    elContainerBtn.innerHTML = strHTML;
    // console.log(elContainerBtn.innerHTML);
}

function newGame() {
    var elContainerBtn = document.querySelector('.reset');
    var elVictory = document.querySelector('h2');
    elContainerBtn.style.display = 'none';
    elVictory.style.display = 'none';
    gCurrQuestIdx = 0;
    renderQuests();
}


