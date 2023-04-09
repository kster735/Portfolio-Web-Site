const links = document.querySelectorAll("nav ul li a");
let homepage = document.querySelector(".home");
let cvpage = document.querySelector(".cv");
let skillspage = document.querySelector(".skills");
let projectspage = document.querySelector(".projects-container");
let certificationspage = document.querySelector(".certifications-container");

const views = [homepage, cvpage, skillspage, projectspage, certificationspage]; 

views.forEach(v =>{
    v.classList.remove('show');
});

let href = sessionStorage.getItem("currentPage");

switch(href){
    case '#home':
        views[0].classList.add('show'); 
        break;
    case '#cv':
        views[1].classList.add('show');
        break;
    case '#skills':
        views[2].classList.add('show');
        break;
    case '#projects':
        views[3].classList.add('show');
        break;
    case '#certifications':
        views[4].classList.add('show');
        break;
    default:
        views[0].classList.add('show');
        break;
}

for (let i=0; i<links.length; i++){
    links[i].addEventListener('click', (event) =>{
        const target = event.target;
        href = target.getAttribute('href');
        console.log(href);
        sessionStorage.setItem("currentPage", href); 
        for ( let j=0; j<views.length; j++){
            if (j===i){
                views[j].classList.add('show');
            }else{
                views[j].classList.remove('show');
            }
        }
    });
};





