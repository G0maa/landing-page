// #### Global variables ####

// List of sections
const sectionList = document.getElementsByTagName('section');

// Default active section
let activeSection = sectionList[0];
let activeAnchor;

// #### build the nav ####
// Container for dynamically crated anchors
let anchorList = document.createDocumentFragment();

for(const element of sectionList) {

    let newAnchor = document.createElement('a');
    newAnchor.innerHTML = element.getAttribute('data-nav');
    newAnchor.setAttribute('href', `#${element.getAttribute('id')}`);
    newAnchor.setAttribute('id', `${element.getAttribute('id')}-anchor`)
    newAnchor.classList.add('menu__link');
    
    let newLi = document.createElement('li');
    newLi.appendChild(newAnchor);

    anchorList.appendChild(newLi);
}

// Getting the nav-bar container by ID and appending to the anchorList.
const navBarList = document.getElementById('navbar__list');
navBarList.appendChild(anchorList);


// #### Smooth scroll on nav-bar ####
// Scroll to anchor ID using scrollTO event
// Note: Client's browser has to have this feature enabled.
navBarList.addEventListener('click', function(evt) {
    if(evt.target.nodeName === 'A') {
        evt.preventDefault();
        
        const evtTarget = evt.target.getAttribute('href');
        document.querySelector(evtTarget).scrollIntoView({behavior: 'smooth'});
    }
});


// #### Add class 'active' to section when near top of viewport & Highlight nav-bar ####
document.addEventListener('scroll', function () {
    let toSetActive;

    for(const section of sectionList) {
        // Ignore negative values
        if(section.getBoundingClientRect().top < 0)
            continue;
        
        if(!toSetActive)
            toSetActive = section;

        if(section.getBoundingClientRect().top < toSetActive.getBoundingClientRect().top)
            toSetActive = section;
    }        
    
    // Removing & adding active class from active section, new section, respectively
    activeSection.classList.remove('your-active-class');
    toSetActive.classList.add('your-active-class');

    // Removing active class from current active anchor
    document.getElementById(`${activeSection.getAttribute('id')}-anchor`)
    .classList.remove('menu__link__acitve');

    // Adding active class to new active acnhor
    document.getElementById(`${toSetActive.getAttribute('id')}-anchor`)
    .classList.add('menu__link__acitve');

    // Setting new active section
    activeSection = toSetActive;
});

