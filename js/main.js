// hero animation
const textDisplay = document.querySelector("#animatedText");
const textArray = ["Front-end Developer", "Graphic Designer"];
let currentText = [" "];
let j = 0;
let i = 0;
let cycleFinished = false;

//theme-toggle
const darkButton = document.querySelector(".dark-mode-button");
const darkToggle = document.querySelector(".dark-mode-toggle");
const image = document.querySelector(".image-toggle");

// navbar
let navbar = document.querySelector(".nav")
let navburger = document.querySelector(".burger")
let sidebar = document.querySelector(".sidebar")
let sidebarClose = document.querySelector(".sidebar-close")
let sidebarLinks = document.querySelectorAll(".sidebar-links li")
let sidebarBG = document.querySelector(".sidebar-bg")


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
        console.log("yes")
        navbar.classList.add("add-bg")
    }
    if(window.scrollY < 100 && navbar.classList.contains("add-bg"))
    {
            console.log("yes")
            navbar.classList.remove("add-bg")
    }
})
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
    } else {
      image.src = "assets/moon.svg";
      darkToggle.classList.toggle("toggle-dark");
      darkToggle.classList.remove("toggle-light");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }




textLoop()