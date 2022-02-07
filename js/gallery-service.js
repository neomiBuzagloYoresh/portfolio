'use strict'

var gProjectsNum = 4
var gProjs = creatProjects(gProjectsNum);


function creatProjects(projectsNum) {
    var projects = [];

    for (var i = 0; i < projectsNum; i++) {
        projects[i] = creatProject('pacman', 'Pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo', 'img/portfolio/01-thumbnail.jpg')
    }
    return projects
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

// console.log(' creatProject', creatProject('pacman', 'pacman', 'best game', 'very good', 'https://www.facebook.com/neomi.buzaglo'));
