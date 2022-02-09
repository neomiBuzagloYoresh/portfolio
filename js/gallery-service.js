'use strict'

// var gProjectsNum = 4
var gProjs;


function createProjects() {

    if (!gProjs || !gProjs.length) {
        gProjs = [
            creatProject('book-shop', 'book-shop', 'book-shop', 'a book-shop proj', 'proj/book-shop-new/', 'proj/book-shop-new/img/peter-pan1.jpg'),

            creatProject('inPictur', 'inPictur', 'Pic Game', 'how in the picture?', 'proj/inPicture', 'proj/inPicture/picture/1.jpg'),

            creatProject('touchnums', 'Touch-Nums', 'Touch-Nums', 'touch fast', 'proj/touch-nums/', 'proj/touch-nums/img/toch nums.png'),


            creatProject('pacman', 'Pacman', 'Pacman', 'play the pacman game', 'proj/pacman-inClass/', 'proj/pacman-inClass/img/pacman.png'),

            creatProject('minesweeper', 'minesweeper', 'minesweeper', 'Mine Sweeper Game', 'proj/minesweeper-pro1/', 'proj/minesweeper-pro1/img/minesweeper.png')
        ]
    }
    console.log('gProjs', gProjs);
}

// vendor/jquery/jquery.min.js

function getProjs() {
    return gProjs
}

function creatProject(id, name, title, desc, url, imgSrc) {

    return {
        id,
        name,
        title,
        desc,
        url,
        imgSrc,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
    }
}


function getProjById(projId) {
    const project = gProjs.find((project) => projId === project.id)
    return project
}


