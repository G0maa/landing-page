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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// #### build the nav ####

// Dynamically counting sections:
const sectionList = document.getElementsByTagName('section');

// Container for dynamically crated anchors
let anchorList = document.createDocumentFragment();

for(const element of sectionList) {

    let newAnchor = document.createElement('a');
    newAnchor.innerHTML = element.getAttribute('data-nav');
    newAnchor.setAttribute('href', `#${element.getAttribute('id')}`);
    newAnchor.classList.add('menu__link');
    
    let newLi = document.createElement('li');
    newLi.appendChild(newAnchor);

    anchorList.appendChild(newLi);
}

// Getting the nav-bar container by ID and appending to the anchorList.
const navBarList = document.getElementById('navbar__list');
navBarList.appendChild(anchorList);




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


