console.log("Hello Friend!")
const header_ul = document.querySelector("ul.global-nav__primary-items");
const demo_ext = document.createElement("li");
const a_demo_ext = document.createElement("a");

demo_ext.classList.add('global-nav__primary-items');
// demo_ext.innerHTML = "Test"

a_demo_ext.classList.add('global-nav__primary-link--active', 'global-nav__primary-link')
a_demo_ext.setAttribute('href', 'https://github.com/karan51ngh')
a_demo_ext.innerHTML = "test"

demo_ext.appendChild(a_demo_ext);
header_ul.appendChild(demo_ext);

const feed = document.querySelector('[aria-label="Main Feed"]');
console.log("feed")
console.log(feed)
// eed-shared-update-v2__control-menu-container -> every post has this class.