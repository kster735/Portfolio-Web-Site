

const links = document.querySelectorAll("nav ul li a");
let homepage = document.querySelector(".home");
let cvpage = document.querySelector(".cv");
let skillspage = document.querySelector(".skills");
let projectspage = document.querySelector(".projects-container");
let certificationspage = document.querySelector(".certifications-container");


links[0].addEventListener('click', (event) =>{
    event.stopPropagation();
    homepage.classList.add("show");
    cvpage.classList.remove("show");
    skillspage.classList.remove("show");
    projectspage.classList.remove("show");
    certificationspage.classList.remove("show");
});

links[1].addEventListener('click', (event) =>{ 
    event.stopPropagation();
    homepage.classList.remove("show");
    cvpage.classList.add("show");
    skillspage.classList.remove("show");
    projectspage.classList.remove("show");
    certificationspage.classList.remove("show");
});

links[2].addEventListener('click', (event) =>{ 
    event.stopPropagation();
    homepage.classList.remove("show");
    cvpage.classList.remove("show");
    skillspage.classList.add("show");
    projectspage.classList.remove("show");
    certificationspage.classList.remove("show");
});

links[3].addEventListener('click', (event) =>{
    event.stopPropagation(); 
    homepage.classList.remove("show");
    cvpage.classList.remove("show");
    skillspage.classList.remove("show");
    projectspage.classList.add("show");
    certificationspage.classList.remove("show");
});

links[4].addEventListener('click', (event) =>{
    event.stopPropagation(); 
    homepage.classList.remove("show");
    cvpage.classList.remove("show");
    skillspage.classList.remove("show");
    projectspage.classList.remove("show");
    certificationspage.classList.add("show");
});







