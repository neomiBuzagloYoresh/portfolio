'use strict'
$(init)

// $(document).ready(function(){
//     renderProjects()
//     creatProjects(gProjectsNum)
// })

function init() {
    creatProjects()
    renderProjects()
    renderModal()
}



function renderProjects() {
    var projs = getProjs()
    console.log(projs);
    var strHTMLs = projs.map((project, idx) =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal"  href="#portfolioModal${idx + 1}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.imgSrc}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.desc}</p>
        </div>
        </div>`);

    document.querySelector('.projects-row').innerHTML = strHTMLs.join('');

}


   
function renderModal() {

    var strHTMLs = gProjs.map((project,indx) => {
        return `
        <div class="continer">
        <div
          class="portfolio-modal modal fade"
          id="portfolioModal${indx+1}"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                     
                      <h2>${project.name}</h2>
                      <p class="item-intro text-muted">
                        Lorem ipsum dolor sit amet
                        consectetur.
                      </p>
                      <img
                        class="img-fluid d-block mx-auto"
                        src="img/portfolio/04-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your
                        project. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt
                        minus dignissimos deserunt repellat
                        aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores
                        repudiandae, nostrum, reiciendis
                        facere nemo!
                      </p>
                      <ul class="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button
                      class="btn btn-primary "
                      type="button"
                    >
                      <a href="${project.url}" target="_blank">
                     Proj
                    </button>

                      <button
                        class="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i class="fa fa-times"></i>
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`});

    document.querySelector('.modal-continer').innerHTML = strHTMLs.join('');


}



 // var elModal = document.querySelector('.modal')
    // elModal.querySelector('h3').innerText = car.vendor
    // elModal.querySelector('h4 span').innerText = car.maxSpeed
    // elModal.querySelector('p').innerText = car.desc
    // elModal.classList.add('open')

//     var strHTMLs = gProjs.map(project =>

//         `<div class="col-md-4 col-sm-6 portfolio-item">
//     <a
//         class="portfolio-link"
//         data-toggle="modal"
//         href="#portfolioModal1"
//     >
//         <div class="portfolio-hover">
//             <div class="portfolio-hover-content">
//                 <i class="fa fa-plus fa-3x"></i>
//             </div>
//         </div>
//         <img
//             class="img-fluid"
//             src="${project.imgSrc}"
//             alt=""
//         />
//     </a>
//     <div class="portfolio-caption">
//         <h4>${project.name}</h4>
//         <p class="text-muted">${project.desc}</p>
//     </div>
// </div>`

//     )
//     document.querySelector('.projects-row').innerHTML = strHTMLs.join('');
// }


// function getProj() {
    
// }



// onclick=href="onOpenModal(${project.id})"