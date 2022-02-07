'use strict'

// var gProjectsNum = 4
var gProjs ;


function creatProjects() {

    if (!gProjs || !gProjs.length) {
        gProjs = [
    
            creatProject('inPictur', 'inPictur', 'Pic Game', 'how in the picture?', 'proj/inPicture', 'proj/inPicture/picture/1.jpg'),

            creatProject('touchnums', 'Touch-Nums', 'Touch-Nums', 'touch fast', 'proj/touch-nums', 'img/portfolio/01-thumbnail.jpg'),

            creatProject('nhnh', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg'),
             creatProject('pacman', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg')
        ]}
}

// vendor/jquery/jquery.min.js

function getProjs(){
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
  

// function getProj() {
    

//     return[{

//     }

//     ]
// }

// console.log(' creatProject', creatProject('pacman', 'pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo'));
