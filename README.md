# Landing Page Project

## About the project:

After finishing first two weeks of FWD, I was presented with this pracitce project,
main goal is to practice JS & Manipulating the DOM, also to ensure some clean-code along the way.

## Tasks are:
- Making a dynamic nav-bar, that is depending on the number of sections the nav-bar is dynamically created.

- Smooth scoll, nav-bar links has to scroll to each section, and to have a smooth scroll.

- Each section when it gets in `viewport` has to be highlighted & the nav-bar link of that section has to be highlighted too.

## About the implementation:

* ### Dynamic nav-bar
1. used `createDocumentFragment()` for container.
2. created `li` and `a` using `createElement()`.
3. Scanned for existing `sections` using `getElementsByTagName()`.
4. Used each of section attribute `data-nav` to assign `.innerHTML` to each anchor.
5. Used `appendChild()` after setting the anchors.


* ### Smooth scrolling nav-bar
1. Added eventListener `click` to `navbar__list`.
2. Prevented default scrolling.
3. Used `event.target` to get `id` of section.
4. Used `scrollIntoView()` to have smooth scroll.

* ### Section highlight & nav-bar highlighting
1. Added eventListener `scroll` to `document`.
2. Traversed `sectionList` for the closest to zero non-negative value.
3. Switched removed class active for section & anchor, and added them to the new active section & anchor.

