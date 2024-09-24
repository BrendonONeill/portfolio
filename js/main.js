'use strict'

// hero animation
const textDisplay = document.querySelector("#animatedText");
const textArray = ["Front-end Developer", "Graphic Designer"];
let currentText = [" "];
let j = 0;
let i = 0;
let cycleFinished = false;

const hero = document.querySelector("#home")

//theme-toggle
const darkButton = document.querySelector(".dark-mode-button");
const darkToggle = document.querySelector(".dark-mode-toggle");
const image = document.querySelector(".image-toggle");

// navbar
let navbar = document.querySelector(".nav")
let navburger = document.querySelector(".burger")
let burgerImg = document.querySelector(".img-burger")
let sidebar = document.querySelector(".sidebar")
let sidebarClose = document.querySelector(".sidebar-close")
let sidebarx = document.querySelector(".x")
let sidebarLinks = document.querySelectorAll(".sidebar-links li")
let sidebarBG = document.querySelector(".sidebar-bg")
let github = document.querySelector(".github");
let linkedin = document.querySelector(".linkedin");
let cv = document.querySelector(".cv")

if (localStorage.getItem("light") === null && localStorage.getItem("dark") === null) {
  localStorage.setItem("dark", true);
} 
else if (localStorage.getItem("light")) {
  themeChange();
}


navburger.addEventListener("click", () => {
  sidebar.style.transition = 'all 0.4s linear'
  sidebar.style.left = 0
  sidebarBG.classList.remove("display-bg")
})

sidebarClose.addEventListener("click", () => {
  sidebar.style.transition = 'all 0.4s linear'
  sidebar.style.left = '-100%'
  sidebarBG.classList.add("display-bg")
})

sidebarBG.addEventListener("click", () => {
  sidebar.style.transition = 'all 0.4s linear'
  sidebar.style.left = '-100%'
  sidebarBG.classList.add("display-bg")
})

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    setTimeout(() => {
      sidebar.style.transition = 'all 0.4s linear'
      sidebar.style.left = '-100%'
      sidebarBG.classList.add("display-bg")
    },1000)
  })
})

if(document.title === "Brendon O'Neill's Portfolio")
{
  document.addEventListener("scroll", () => {
    if(window.scrollY >= 100 && !navbar.classList.contains("add-bg"))
    {
      
        navbar.classList.add("add-bg")
    }
    if(window.scrollY < 100 && navbar.classList.contains("add-bg"))
    {
          
            navbar.classList.remove("add-bg")
    }
})


  textLoop()
}

if(document.title === "Brendon O'Neill's Designs"){
  let main = document.querySelector("main")
  let lightbox = document.querySelector(".lightbox")
  let lightboxImg = document.querySelector(".lightbox img")

  lightbox.addEventListener("click", () => {
      lightbox.classList.remove("show-lb")
  })
  
  main.addEventListener("click",(e) =>{
    if(e.target.src !== undefined)
    {
      lightboxNewImg(e.target.src)
    }
  })

  function lightboxNewImg(data){
    lightboxImg.src = data
    lightbox.classList.add("show-lb")
  }

}



function textLoop() {
    textDisplay.innerHTML = currentText.join("");
    if (i < textArray.length) {
      if (j < textArray[i].length && cycleFinished === false) {
        currentText.push(textArray[i][j]);
        j++;
        setTimeout(textLoop, 100);
      } else if (j > 0 && cycleFinished === true) {
        currentText.pop(textArray[i][j]);
        j--;
        setTimeout(textLoop, 100);
      } else if (j == 0 && cycleFinished === true) {
        cycleFinished = false;
        i++;
        setTimeout(textLoop, 100);
      } else if (j == textArray[i].length) {
        cycleFinished = true;
        setTimeout(textLoop, 2000);
      }
    } else {
      i = 0;
      j = 0;
      currentText = [];
      setTimeout(textLoop, 100);
    }
}

darkButton.addEventListener("click", () => {
    if (darkToggle.classList.contains("toggle-light")) {
      localStorage.setItem("dark", true);
      localStorage.removeItem("light");
      themeChange();
    } else {
      localStorage.setItem("light", true);
      localStorage.removeItem("dark");
      themeChange();
    }
  });

  function themeChange() {
    if (localStorage.getItem("light")) {
      image.src = "assets/sun.svg";
      darkToggle.classList.toggle("toggle-light");
      darkToggle.classList.remove("toggle-dark");
      document.documentElement.setAttribute("data-theme", "light");
      burgerImg.src = "assets/menu-dark.svg"
      sidebarx.src = "assets/x-dark.svg"
      github.src = "assets/images/media/github-dark.svg"
      linkedin.src = "assets/images/media/linkedin-dark.svg"
      cv.src = "assets/images/media/file-dark.svg"
      if(document.title === "Brendon O'Neill's Portfolio")
      {
        hero.classList.add("main-header-light")
        hero.classList.remove("main-header-dark")
      }
      
    } else {
      image.src = "assets/moon.svg";
      darkToggle.classList.toggle("toggle-dark");
      darkToggle.classList.remove("toggle-light");
      document.documentElement.setAttribute("data-theme", "dark");
      burgerImg.src = "assets/menu.svg"
      sidebarx.src = "assets/x.svg"
      github.src = "assets/images/media/github.svg"
      linkedin.src = "assets/images/media/linkedin.svg"
      cv.src = "assets/images/media/file.svg"
      if(document.title === "Brendon O'Neill's Portfolio")
      {
        hero.classList.remove("main-header-light")
        hero.classList.add("main-header-dark")
      }
    }
  }


 
    
