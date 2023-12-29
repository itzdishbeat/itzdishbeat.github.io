// Debug Log
console.log("main.js Connected");

// Tabs

const tabs = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add("active");

        allContent.forEach(content => {content.classList.remove("active")})
        allContent[index].classList.add("active");
    })
})

// Sort list

const categoryBtns = document.querySelectorAll(".scrollable-tabs-btn");
categoryBtns.forEach((category, index) => {
    category.addEventListener('click', () => {
        categoryBtns.forEach(category => {category.classList.remove("active")});
        category.classList.add("active");

        categoryContent.forEach(content => {content.classList.remove("active")})
        categoryContent[index].classList.add("active")
    })
})

// About Product

const aboutFullBtn = document.querySelector(".about-full-btn");
const aboutFullInfo = document.querySelector(".about-more");
const aboutFullBtnText = document.querySelector(".about-full-btn-text");
const aboutFullBtnIcon = document.querySelector(".about-full-btn svg");
aboutFullBtn.addEventListener("click", () => {
    var x = document.getElementById("aboutMore");
    if (x.className === "about-more") {
        x.className += " active";
        window.location = "#aboutMore";
        aboutFullBtnText.innerHTML = "Меньше";
        aboutFullBtnIcon.style.transform = 'rotate(-180deg)';

    } else {
        x.className = "about-more";
        aboutFullBtnText.innerHTML = "Смотреть все";
        aboutFullBtnIcon.style.transform = 'rotate(0deg)';
    }
});

// Accordion

var accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
    // accordion is currently open, so close it
        content.style.maxHeight = null;
    } else {
    // accordion is currently closed, so open it
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
}