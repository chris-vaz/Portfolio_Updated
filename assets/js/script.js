'use strict';

// Adding event listener to multiple items
const addEventonElements = function(elements, eventType, callback){
    for( let i=0, len=elements.length; i<len; i++){
        elements[i].addEventListener(eventType,callback);
    }
}



// PRE LOADER
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

// NAVBAR
// Navbar toggle action for mobile size
const navTogglers = document.querySelectorAll("[data-nav-toggle]");
const navToggleBtn = document.querySelectorAll("[data-nav-toggle-btn]");
const navbar = document.querySelectorAll("[data-navbar]");
const overlay = document.querySelectorAll("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers,"click", toggleNavbar);

// HEADER
//  header active when window scroll down to 100px

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if(window.scrollY >= 100){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});