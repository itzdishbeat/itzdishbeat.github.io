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
