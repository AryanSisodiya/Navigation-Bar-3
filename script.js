// Theme Changer

const themeChange = document.querySelector('.dark-html-btn');
let theme = 'white';
themeChange.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (theme == 'white') {
        html.style.filter = 'invert(1)';
        document.querySelector(".logo").style.filter = "invert(1)";
        document.querySelector(".context-menu").style.filter = "invert(1)";
        document.querySelector("footer").style.filter = "invert(1)";
        theme = 'black';
    } else {
        html.style.filter = 'invert(0)';
        document.querySelector(".logo").style.filter = "invert(0)";
        document.querySelector(".context-menu").style.filter = "invert(0)";
        document.querySelector("footer").style.filter = "invert(0)";
        theme = 'white';
    };
});

// To make nav stick after some scrolling
let navbar = document.querySelector('.nav-2');
let sticky = navbar.offsetTop;
const navUl = document.querySelector(".nav-ul");

window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        // navUl.classList.add("sticky-nav")
    } else {
        navbar.classList.remove("sticky");
        // navUl.classList.remove("sticky-nav")
    }
};

// Context Menu
window.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    document.querySelector(".context-menu").classList.toggle("context-menu-show");

});

// To close context menu
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
    document.querySelector(".context-menu").classList.toggle("context-menu-show");

});


// Menu Open
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".menu-close");
const menu = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show-nav");
    hamburger.classList.toggle("change-color");
});