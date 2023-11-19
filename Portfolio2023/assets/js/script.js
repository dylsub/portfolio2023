"use strict";

const navTabs = document.querySelectorAll(".nav__link");
const teamRow = document.querySelector(".team__row");
const navMenu = document.querySelector(".menu__outline");
const nav = document.querySelector(".nav");
const mobileNav = document.querySelector(".mobile__nav");


let isStart = true;
let isMobile = window.innerWidth >= 1000 ? false : true;
let isNavOpen = false;
mobileNav.style.display = "none";

//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    const stickyNav = document.querySelector(".sticky__nav");
    if (scrollTop > 200) {
        stickyNav.classList.add("solid")
    } else {
        stickyNav.classList.remove("solid")
    }

    if (window.innerWidth >= 1000) {
        isMobile = false;
        nav.classList.add("animate__animated");
        navMenu.classList.add("hidden");
        setMobileNav(false);
    } else if (window.innerWidth < 1000 && !isNavOpen) {
        isMobile = true;
        nav.classList.remove("animate__animated");
        navMenu.classList.remove("hidden");
    }
}, 3);

//////////////////////////////////////////

//Mobile Nav
navMenu.addEventListener("click", () => {
    if (isNavOpen) {
        setMobileNav(false);
    } else if (!isNavOpen) {
        setMobileNav(true);
    }
});

document.querySelector(".mobile__nav__links").addEventListener("click", (e) => {

    //checks if not clicking on a nav__link
    if (!e.target.classList.contains('nav__link__a')) return;

    setMobileNav(false);
});

document.querySelector("body").addEventListener("click", (e) => {
    if (!(e.target.classList.contains('mobile__nav')
        || e.target.classList.contains('mobile__nav__link')
        || e.target.classList.contains('nav__link__a')
        || e.target.classList.contains('mobile__nav__links')
        || e.target.classList.contains('mobile__nav__brand')
        || e.target.classList.contains('menu__outline'))
        && isNavOpen) {
        setMobileNav(false);
    }
});

function setMobileNav(setOpen) {
    if (setOpen) {
        navMenu.name = "close-outline";
        // navMenu[1].name = "close-outline";
        mobileNav.style.display = "block";
        isNavOpen = true;
    } else if (!setOpen) {
        navMenu.name = "menu-outline";
        // navMenu[1].name = "menu-outline";
        mobileNav.style.display = "none";
        isNavOpen = false;
    }
}

///////////////////////////////////////////

/*Todo list
1) Update images
2) Lazy loading of images
3) Optimization
4) Allow for map dragging on desktop but not mobile
5) Tweak text
6) Finish footer
*/

////////////////////////////////////////////

//Lazy loading (optimization)
const images = document.querySelectorAll(".lazy-load");

images.forEach((image) => {
    image.src = image.dataset.src;
    image.addEventListener("load", () => {
        image.classList.remove("lazy-load");
    });
});

/////////////////////////////////////////////

//Slider

// const carousel = document.querySelector(".projects_content"),
//     firstImg = carousel.querySelectorAll(".item_img")[0],
//     arrowIcons = document.querySelectorAll(".wrapper i"),
//     wrapper = document.querySelector(".wrapper");
// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft <= 20 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft >= scrollWidth - 20 ? "none" : "block";
// }
// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         let mult = 2;

//         if (window.innerWidth < 1000) {
//             mult = 1;
//         }
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth * mult : firstImgWidth * mult;
//         setTimeout(() => showHideIcons(), 500); // calling showHideIcons after 60ms
//     });
// });
// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;
//     if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }
// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }
// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if (!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     console.log(prevPageX);
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }
// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
//     if (!isDragging) return;
//     isDragging = false;
//     showHideIcons();
//     // autoSlide();
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);
// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);