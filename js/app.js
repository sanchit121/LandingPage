/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const scrollToButton = document.getElementById("scrollBtn");
const sectionsElements = document.querySelectorAll("section");
let navItems = "";

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/** @description Helper function to add a class
 * @param {HTMLElement} element
 * @param {string} classToAdd
 */
const addClass = (element, classToAdd) => {
  element.classList.add(classToAdd);
};

/** @description Helper function to remove a class
 * @param {HTMLElement} element
 * @param {string} classToRemove
 */
const removeClass = (element, classToRemove) => {
  element.classList.remove(classToRemove);
};

/** @description Helper function to scroll to top
 *
 */
const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/** @description Create Nav dynamically */
const createNav = () => {
  sectionsElements.forEach((section) => {
    navItems += `<li> <a class="nav__link menu__link" href="#${section.id}" id="li__${section.id}">
          ${section.dataset.nav}</a></li>`;
  });
  const navbarList = document.getElementById("navbar__list");

  navbarList.innerHTML = navItems;
};

createNav();

/** @description adding active class to current section and highlighting the nav*/
const updateSectionAndNavOnScroll = () => {
  sectionsElements.forEach((section) => {
    let elementOffset = section.getBoundingClientRect();
    const currentNavItem = document.getElementById(`li__${section.id}`);
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      addClass(section, "your-active-class");
      addClass(currentNavItem, "currentNav");
    } else {
      removeClass(section, "your-active-class");
      removeClass(currentNavItem, "currentNav");
    }
  });
};

/** @description Function to scroll to show or hide scroll to button
 *
 */
const updateScrollToButtonVisibility = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToButton.style.display = "block";
  } else {
    scrollToButton.style.display = "none";
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener("scroll", updateSectionAndNavOnScroll);

window.onscroll = function () {
  updateScrollToButtonVisibility();
};
scrollToButton.addEventListener("click", scrollToTop);
