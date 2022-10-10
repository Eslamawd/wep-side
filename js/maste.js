
let mainColor = localStorage.getItem("color_option");


if (mainColor !== null) {
    document.documentElement.style.setProperty('--min-color', mainColor);

    document.querySelectorAll(".color-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });





}

document.querySelector(".font").onclick = function () {
    document.querySelector(".setting-box").classList.toggle("open");

};


const colorLi = document.querySelectorAll(".color-list li");

colorLi.forEach(li => {
li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--min-color', e.target.dataset.color);   

    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    e.target.classList.add("active");
});
});

let page = document.querySelector(".landing-page");


let imgsArray = ["1.png", "2.png", "3.png", "4.png"];


setInterval(() => {
    let randNumber = Math.floor(Math.random() * imgsArray.length);


    page.style.backgroundImage = 'url("imgs/' + imgsArray[randNumber] + '")';
}, 5000);


let ourSkills = document.querySelector(".skills");
window.onscroll = function () {

    let skillsOffset = ourSkills.offsetTop;
    let skillsHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowSkroll = this.pageYOffset;
    
    if (windowSkroll > (skillsOffset + skillsHeight - windowHeight)) {

        let allSkill = document.querySelectorAll(".skill-box .skill-progress span");

        allSkill.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }

};


let  ourGallery = document.querySelectorAll(".our-gallery img");

ourGallery.forEach(img => {


    img.addEventListener('click', (e) => {
        let overLay = document.createElement("div");
        overLay.className = 'popup-overla';
        document.body.appendChild(overLay);

        
        let popupBox = document.createElement("div");
        
        popupBox.className = 'popup-box';
        
        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        
        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeBottun = document.createElement("span");

        
        let closeBtext = document.createTextNode("X");
        
        closeBottun.appendChild(closeBtext);
        
        closeBottun.className = 'close-botton';
        
        popupBox.appendChild(closeBottun);

    });
});
document.addEventListener("click", function (e) {
 
    if (e.target.className == 'close-botton') {


        e.target.parentNode.remove();
        document.querySelector(".popup-overla").remove();
    }
});


const allLinks = document.querySelectorAll(".links a");

allLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let toggleB = document.querySelector(".togl-meneo");
let linkz = document.querySelector(".links");


toggleB.onclick = function () {
    this.classList.toggle("meneo-active");
    
    linkz.classList.toggle("open");

};

document.addEventListener("click", (e) => {
    if (e.target !==  toggleB && e.target !== linkz) { 

        if (linkz.classList.contains("open")) {
            toggleB.classList.toggle("meneo-active");
    
            linkz.classList.toggle("open");
        }
    }
});