"use strict";

const involvements = [
    {
        image: "assets/img/otcr.png",
        lazyImage: "assets/img/otcr.png",
        name: "OTCR Consulting",
        role: "New-hire Consultant",
        date: "Sep 2023 - Present",
    },
    {
        image: "assets/img/blockchain.png",
        lazyImage: "assets/img/blockchain.png",
        name: "Illini Blockchain",
        role: "Blockchain Developer",
        date: "Sep 2023 - Present",
    },
    {
        image: "assets/img/pct.png",
        lazyImage: "assets/img/pct.png",
        name: "Phi Chi Theta",
        role: "New-member Service Chair",
        date: "Sep 2023 - Present",
    },
    {
        image: "assets/img/stem.png",
        lazyImage: "assets/img/stem.png",
        name: "STEM & Buds",
        role: "Programs & Regional Director",
        date: "Sep 2020 - Aug 2023",
    },
    {
        image: "assets/img/deca.png",
        lazyImage: "assets/img/deca.png",
        name: "DECA",
        role: "VP of Career Development",
        date: "Sep 2019 - May 2023",
    },
    {
        image: "assets/img/computing.png",
        lazyImage: "assets/img/computing.png",
        name: "NV Computing Team",
        role: "Captain",
        date: "Sep 2019 - May 2023",
    }
]

const involvementHTML = document.querySelector(".involvement__content");


displayInvolvements();
function displayInvolvements() {
    involvementHTML.innerHTML = '';
    for (let i = 0; i < involvements.length; i++) {
        const html = `
        <div class="involvement">
            <div class="involvement__picture">
                <img src="${involvements[i].image}">
            </div>
            <div class="involvement__text">
                <h3>${involvements[i].name}</h3>
                <p class="involvement__role__text"><b>${involvements[i].role}</b></p>
                <p class="involvement__role__text">${involvements[i].date}</p>
            </div>
        </div>`;
        involvementHTML.insertAdjacentHTML("beforeend", html);
    }
}