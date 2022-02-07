'use strict'

// var gProjectsNum = 4
var gProjs ;


function creatProjects() {

    if (!gProjs || !gProjs.length) {
        gProjs = [
    
            creatProject('pacman', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg'),
            creatProject('pacman', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg'),
            creatProject('nhnh', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg'),
       creatProject('pacman', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg')
        ]}
    
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
