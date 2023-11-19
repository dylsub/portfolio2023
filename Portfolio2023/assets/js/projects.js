"use strict";

const projects = [
    {
        link: "https://dylsub.itch.io/smogcity",
        image: "assets/img/smogcity.png",
        lazyImage: "assets/img/smogcity.png",
        openInNewTab: true,
        title: "Smog City",
        description: "A 2D platformer made in 30 days. Placed 🥇 for the 2023 SkillsUSA: IAVGC Event. Developed with C# and Unity"
    },
    {
        link: "https://stemandbudsnaperville.org",
        image: "assets/img/stemandbuds.jpg",
        lazyImage: "assets/img/stemandbuds.jpg",
        openInNewTab: true,
        title: "STEM & Buds Naperville",
        description: "This website was made as an outreach tool for STEM & Buds, a For-youth By-youth nonprofit organization that introduces kids to STEM. Developed with JS/CSS/HTML"
    },
    {
        link: "beeCareful.html",
        image: "assets/img/beeCareful.jpg",
        lazyImage: "assets/img/beeCareful.jpg",
        openInNewTab: true,
        title: "Bee Careful!",
        description: "An addicting puzzle-arcade game made in 5 days. Received an honorable mention for the $10,000 grand prize for Kajam 2022. Developed with KaboomJS"
    },
    {
        link: "https://dylsub.itch.io/pocapola",
        image: "assets/img/islandgame.jpg",
        lazyImage: "assets/img/islandgameload.jpg",
        openInNewTab: true,
        title: "PocaPola Island",
        description: "An adventure game made in 30 days. Placed 🥈 for the 2022 SkillsUSA: IAVGC Event. Developed with C# and Unity"
    },
    {
        link: "task.html",
        image: "assets/img/tasklist.jpg",
        lazyImage: "assets/img/tasklistload.jpg",
        openInNewTab: true,
        title: "Online To-Do List",
        description: "Takes notes and organize your responsibilites with this easy-to-use application! Developed with JS/CSS/HTML"
    },
    {
        link: "https://nvcomputing.com",
        image: "assets/img/computing.jpg",
        lazyImage: "assets/img/computing.jpg",
        openInNewTab: true,
        title: "NVComputing Website",
        description: "The official website for the Neuqua Valley Computing Team. Redesigned \"Schedule\" and \"Home\" tab. Worked with ExpressJS/HTML/Bootstrap"
    },
    {
        link: "deca.html",
        image: "assets/img/decawebsite.jpg",
        lazyImage: "assets/img/decawebsite.jpg",
        openInNewTab: true,
        title: "NVHS DECA Website",
        description: "This website prototype was made with dynamicity in mind. It can serve as an informational tool as well as a resource for current members. Developed with JS/CSS/HTML"
    },
    {
        link: "down.html",
        image: "assets/img/downbad.jpg",
        lazyImage: "assets/img/downbadload.jpg",
        openInNewTab: true,
        title: "Down Bad Test",
        description: "Take this checklist test to determine how \"down bad\" you are! &ensp;(For entertainment only). Developed with JS/HTML/CSS"
    },
    {
        link: "https://dylsub.itch.io/forbiddengrowth",
        image: "assets/img/forbiddengrowth.jpg",
        lazyImage: "assets/img/forbiddengrowthload.jpg",
        openInNewTab: true,
        title: "Forbidden Growth",
        description: "Themed platformer that focuses on quick reactions. Made in 7 days for the Blackthornprod Game Jam #3. Placed 🥈 for the 2021 SkillsUSA: IAVGC Event. Developed with C# and Unity."
    },
    {
        link: "gamblingIndex.html",
        image: "assets/img/gambling.jpg",
        lazyImage: "assets/img/gamblingload.jpg",
        openInNewTab: true,
        title: "Gambling Simulator",
        description: "Gambling application used to desmonstrate probability for the <b>2/28 Stem & Buds</b> session. Developed with JS/HTML/CSS"
    },
    {
        link: "https://dylsub.itch.io/atoms2d",
        image: "assets/img/Atoms2D.jpg",
        lazyImage: "assets/img/Atoms2Dload.jpg",
        openInNewTab: true,
        title: "Atoms 2D",
        description: "A short platformer with an atom theme. Made in 48 hours for GMTK 2021 Game Jam. Developed with C# and Unity"
    },
    {
        link: "https://dylsub.itch.io/savethemzombie",
        image: "assets/img/savethem.jpg",
        lazyImage: "assets/img/savethemload.jpg",
        openInNewTab: true,
        title: "Save Them",
        description: "An open-world 2D game with an apocalyptic theme. Made in 7 days for the VimJam Game Jam #1. Developed with C# and Unity"
    },
    {
        link: "vector.html",
        image: "assets/img/vector.jpg",
        lazyImage: "assets/img/vectorload.jpg",
        openInNewTab: true,
        title: "3D Vector Calculator",
        description: "A PreCalc 3D Vector Calculator for Cross Product, Dot Product, and Magnitude. Developed with JS/HTML/CSS"
    },
    // {
    //     link: "",
    //     image: "",
    //     lazyImage: "",
    //     title: "123",
    //     description: "1234"
    // },

]

const projectHTML = document.querySelector(".projects_content");


displayProjects();
function displayProjects() {
    projectHTML.innerHTML = '';
    const html = `<div class="row">
        <div class="item">
            <a href="${projects[0].link}" ${projects[0].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[0].lazyImage}"
                    data-src="${projects[0].image}">
            </a>
            <a href="${projects[0].link}">
                <h2 class="disable-select">${projects[0].title}</h2>
            </a>
            <p>${projects[0].description}</p>
        </div>
        <div class="item">
            <a href="${projects[1].link}" ${projects[1].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[1].lazyImage}"
                    data-src="${projects[1].image}">
            </a>
            <a href="${projects[1].link}">
                <h2 class="disable-select">${projects[1].title}</h2>
            </a>
            <p>${projects[1].description}</p>
        </div>
        <div class="item">
            <a href="${projects[2].link}" ${projects[2].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[2].lazyImage}"
                    data-src="${projects[2].image}">
            </a>
            <a href="${projects[2].link}">
                <h2 class="disable-select">${projects[2].title}</h2>
            </a>
            <p>${projects[2].description}</p>
        </div>
        
    </div>`;
    projectHTML.insertAdjacentHTML("beforeend", html);

    for (let i = 3; i < projects.length - 1; i += 3) {
        const html = `<div class="row hidden">
        <div class="item">
            <a href="${projects[i].link}" ${projects[i].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[i].lazyImage}"
                    data-src="${projects[i].image}">
            </a>
            <a href="${projects[i].link}">
                <h2 class="disable-select">${projects[i].title}</h2>
            </a>
            <p>${projects[i].description}</p>
        </div>
        <div class="item">
            <a href="${projects[i + 1].link}" ${projects[i + 1].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[i + 1].lazyImage}"
                    data-src="${projects[i + 1].image}">
            </a>
            <a href="${projects[i + 1].link}">
                <h2 class="disable-select">${projects[i + 1].title}</h2>
            </a>
            <p>${projects[i + 1].description}</p>
        </div>
        <div class="item">
            <a href="${projects[i + 2].link}" ${projects[i + 2].openInNewTab ? "target=\"_blank\"" : ""}>
                <img class="lazy-load" src="${projects[i + 2].lazyImage}"
                    data-src="${projects[i + 2].image}">
            </a>
            <a href="${projects[i + 2].link}">
                <h2 class="disable-select">${projects[i + 2].title}</h2>
            </a>
            <p>${projects[i + 2].description}</p>
        </div>
        
    </div>`;
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    let left = projects.length % 3;
    if (left == 1) {
        const html = `
        <div class="row hidden">
            <div class="item">
                <a href="${projects[projects.length - 1].link}">
                    <img class="lazy-load" src="${projects[projects.length - 1].lazyImage}"
                        data-src="${projects[projects.length - 1].image}">
                </a>
                <a href="${projects[projects.length - 1].link}">
                    <h2 class="disable-select">${projects[projects.length - 1].title}</h2>
                </a>
                <p>${projects[projects.length - 1].description}</p>
            </div>
        </div>`
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    left = projects.length % 3;
    if (left == 2) {
        const html = `
        <div class="row hidden">
            <div class="item">
                <a href="${projects[projects.length - 2].link}">
                    <img class="lazy-load" src="${projects[projects.length - 2].lazyImage}"
                        data-src="${projects[projects.length - 2].image}">
                </a>
                <a href="${projects[projects.length - 2].link}">
                    <h2 class="disable-select">${projects[projects.length - 2].title}</h2>
                </a>
                <p>${projects[projects.length - 2].description}</p>
            </div>
            <div class="item">
                <a href="${projects[projects.length - 1].link}">
                    <img class="lazy-load" src="${projects[projects.length - 1].lazyImage}"
                        data-src="${projects[projects.length - 1].image}">
                </a>
                <a href="${projects[projects.length - 1].link}">
                    <h2 class="disable-select">${projects[projects.length - 1].title}</h2>
                </a>
                <p>${projects[projects.length - 1].description}</p>
            </div>
        </div>`
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    let shown = false
    const projectBtn = document.querySelector(".project__button")
    projectBtn.addEventListener("click", (e) => {
        if (!shown) {
            const rows = document.querySelectorAll(".row")
            for (let i = 0; i < rows.length; i++) {
                rows[i].classList.remove("hidden")
            }
            projectBtn.textContent = "Hide Projects"
        } else {
            const rows = document.querySelectorAll(".row")
            for (let i = 1; i < rows.length; i++) {
                rows[i].classList.add("hidden")
            }
            projectBtn.textContent = "View All Projects"

            var scrollDiv = document.getElementById("projects").offsetTop;
            window.scrollTo({ top: scrollDiv, behavior: 'instant' });
        }



        shown = !shown
    });
}