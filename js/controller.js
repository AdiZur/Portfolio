'use strict'

$(document).ready(initPage)
function initPage() {
    renderProjects()
    addEventListeners()
}

function addEventListeners() {
    $('.contact-form').on('submit', onSubmitForm)
}

function renderProjects() {
    const projects = getProjects()
    const strHTMLs = projects.map(project => {
        // console.log(project)
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${project.id}')">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
        </div>
    </div > `
    })
    $('.row-adi').html(strHTMLs.join(''))
}


function renderModal(projId) {
    console.log(projId)
    var project = getProjectById(projId)
    const strHTML = `<h2>${project.name}</h2>
<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
<img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
  blanditiis
  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
  cupiditate,
  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
<ul class="list-inline">
  <li>Date: ${project.publishedAt}</li>
  <li>Client: Threads</li>
  <li>Category: Illustration</li>
</ul>
<button onclick="location.href='${project.url}'" class="btn btn-primary" data-dismiss="modal" type="button">Visit my game</button>
<button class="btn btn-primary" data-dismiss="modal" type="button">
  <i class="fa fa-times"></i>
  Close Project</button>`

    $('.modal-body').html(strHTML)
}



function onSubmitForm(ev) {
    ev.preventDefault()
    console.log(ev)
    var $mail = $(ev.target[0]).val()
    var $subject = $(ev.target[1]).val()
    var $body = $(ev.target[2]).val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$mail}&su=${$subject}&body=${$body}&bcc=someone.else@example.com`)

}