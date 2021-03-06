'use strict'

$(init)

// $(document).ready(function(){
//     renderProjects()
//     creatProjects(gProjectsNum)
// })

function init() {
    createProjects()
    renderProjects()
    renderModal()
}



function renderProjects() {
    var projs = getProjs()
    
    console.log('project',projs)
    
    var strHTMLs = projs.map((project, idx) =>( `<div class="col-md-4 col-sm-6 portfolio-item">
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
        </div>`))

    document.querySelector('.projects-row').innerHTML = strHTMLs.join('');

}

   
function renderModal() {

    var strHTMLs = gProjs.map((project,indx) => {
        return `
        <div class="container">
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
                 ${project.desc}
                 </p>
                        
                 <img
                 class="img-fluid d-block mx-auto" src="${project.imgSrc}"/>
                 <p>
                 ${project.desc}
                        
                 </p>
                 <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Date: January 2017</li>
                 </ul>
        
        
                <a href="${project.url}" target="_blank">
                <button type="button" class="btn btn-secondary" >Check it Out</button>
                </a>
                        
                        
                <button class="btn btn-primary" data-dismiss="modal" type="button" >
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

    document.querySelector('.modal-container').innerHTML = strHTMLs.join('');


}

function onSubmitForm() {
   const elEmail = document.querySelector('input[name=email]');
const elText = document.querySelector('input[name=text]');
 const elContentMsg =document.getElementById("textarea");


const email = elEmail.value;
const text = elText.value;
const content = elContentMsg.value; 

return window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=neomibuz@gmail.com&su=${text}&body=${content}${email}&bcc=someone.else@example.com`)
 
}



//  `<div class="portfolio-modal modal fade" id="portfolioModal${index+1}" tabindex="-1" role="dialog" aria-hidden="true">
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="close-modal" data-dismiss="modal">
//       <div class="lr">
//         <div class="rl"></div>
//       </div>
//     </div>
//     <div class="container">
//       <div class="row">
//         <div class="col-lg-8 mx-auto">
//           <div class="modal-body">
            
//             <h2>${project.name}</h2>
//             <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//             <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
//             <p>
//             </p>
//             <ul class="list-inline">
//               <li>Date: January 2017</li>
//               <li>Client: Threads</li>
//               <li>Category: Illustration</li>
//             </ul>
//             <button type="button" class="btn btn-success" ><a href="${project.url}" target="_blank">Check it Out</button>
//             <button class="btn btn-primary" data-dismiss="modal" type="button">
//                 <i class="fa fa-times"></i>
//                 Close Project</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>  `





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




// `
//         <div class="container">
//         <div
//           class="portfolio-modal modal fade"
//           id="portfolioModal${indx+1}"
//           tabindex="-1"
//           role="dialog"
//           aria-hidden="true"
//         >
//           <div class="modal-dialog">
//             <div class="modal-content">
//               <div class="close-modal" data-dismiss="modal">
//                 <div class="lr">
//                   <div class="rl"></div>
//                 </div>
//               </div>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-lg-8 mx-auto">
//                     <div class="modal-body">
                     
//                       <h2>${project.name}</h2>
//                       <p class="item-intro text-muted">
//                       ${project.desc}
//                       </p>
                     
//                       <img
//                         class="img-fluid d-block mx-auto"
//                         src="${project.imgSrc}"
//                         alt=""
//                       />
//                       <p>
//                       ${project.desc}
                       
//                       </p>
//                       <ul class="list-inline">
//                         <li>Date: January 2017</li>
//                         <li>Date: January 2017</li>
//                         </ul>
//        <button type="button" class="btn btn-success" ><a href="${project.url}" target="_blank">Check it Out</button>
                     
                      
//                       <button
//                         class="btn btn-primary"
//                         data-dismiss="modal"
//                         type="button"
//                       >
//                         <i class="fa fa-times"></i>
//                         Close Project
//                       </button>
                  
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>`