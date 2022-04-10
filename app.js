const openBtn = document.getElementById("btn-open");
const closeBtn = document.getElementById("btn-close");
const mobileNav = document.querySelector(".primary-nav-wrapper");
const primaryNav = document.querySelector(".primary-nav");

openBtn.addEventListener("click", () => {
    mobileNav.classList.add("active");
    closeBtn.classList.add("show");
    openBtn.classList.add("hide");
})

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    closeBtn.classList.remove("show");
    openBtn.classList.remove("hide");
})

//Show dropdown menu
// document.addEventListener("click", (element) => {
//     const dropdown = document.querySelector(".dropdown");

//     if(element.target.classList.contains("dropdown-btn")) {
//         dropdown.classList.add("active");
//     } else {
//         dropdown.classList.remove("active");
//     }
// });


const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdownListItem = document.querySelectorAll(".dropdown");
const ctaHeader = document.querySelector(".cta-header");
const primaryNavbar = document.querySelector(".primary-navbar-wrapper");

console.log(dropdownBtns);

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", function(e) {

    // remove active class from all elements
    dropdownListItem.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // add active class to specific dropdown menu
    const dropdownMenuEl = e.target.parentElement;
    dropdownMenuEl.classList.add("active");
  })
})

document.addEventListener("click", function(e) {
    if(!e.target.classList.contains("dropdown-btn")) {
      dropdownListItem.forEach((menuItem) => {
        menuItem.classList.remove("active");
      })
    }
})