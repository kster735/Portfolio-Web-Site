const links = document.querySelectorAll("nav ul li a");
let homepage = document.querySelector(".home");
let cvpage = document.querySelector(".cv");
let skillspage = document.querySelector(".skills");
let projectspage = document.querySelector(".projects-container");
let certificationspage = document.querySelector(".certifications-container");

const views = [homepage, cvpage, skillspage, projectspage, certificationspage];

const toggle_menu = document.getElementById('toggle-menu');
const menu = document.querySelector('.menu');


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
    links[i].addEventListener('click', (event) => {

        if (toggle_menu.style.display != 'none') {
            toggle_menu.checked = false;
            menu.style.display = "none";
        }

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





toggle_menu.addEventListener('change', (e) => {
    if (e.target.checked) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});


window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width > 968) {
        toggle_menu.checked = true;
        toggle_menu.style.display = 'none';
        menu.style.display = 'flex';
    } else {
        toggle_menu.checked = false;
        toggle_menu.style.display = 'flex';
        menu.style.display = 'none';
    }
});



