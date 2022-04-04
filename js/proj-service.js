'use strict'
var gProjects = _creatProjects();

function _creatProjects() {
    return [
        _creatProject('1', 'Mine Sweeper', 'Mine Sweeper', 'blablablabla', ['JS', 'Matrix', 'CSS']),
        _creatProject('2', 'Pacman', 'Pacman', 'blablablabla', ['JS', 'Matrix']),
        _creatProject('3', 'Ball Board', 'Ball Board', 'blablablabla', ['JS', 'Matrix']),
        _creatProject('4', 'Touch Nums', 'Touch Nums', 'blablablabla', ['JS', 'Matrix']),
        _creatProject('5', 'Chess', 'Chess', 'blablablabla', ['JS', 'Matrix']),
        _creatProject('6', 'Book Shop', 'Book Shop', 'blablablabla', ['JS', 'Matrix']),
    ]
}

function _creatProject(id, projName, title, desc, labels = ["Matrixes", "keyboard events"], url = 'https://www.google.co.il/') {
    return {
        id: id,
        name: projName,
        title: title,
        desc: desc,
        url: url,
        publishedAt: Date.now(),
        labels: labels,
    }
}

function getProjects() {
    return gProjects
}

function getProjectById(projId) {
    console.log(gProjects)
    console.log(gProjects.find(project => projId === project.id))
    return gProjects.find(project => projId === project.id)
}