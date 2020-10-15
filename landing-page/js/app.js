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
 * Define Global Variables
 * 
*/
const dom = document;
const nav = dom.getElementById('navbar__list');
const h2 = dom.querySelector('h2');
const sections = Array.from(dom.querySelectorAll('section'));
const fragment = dom.createDocumentFragment();
let count = 1;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//helper function to set the attributes of corresponding elements
function setAttr(elem, attrs)
{
    for(let key in attrs)
    {
        elem.setAttribute(key,attrs[key]);
    }
}

//helper function to check if section of page is in view                    
function inViewPort(element)
{
    let bounds=element.getBoundingClientRect(); 
    
    return (
        bounds.top >=0 && bounds.left>=0 && bounds.right<=(window.innerWidth || document.documentElement.clientWidth) && bounds.bottom<=(window.innerHeight || document.documentElement.clientHeight)
        );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


for(let i =0; i<=3; i++)
{
    let li = dom.createElement('li');
    let a = dom.createElement('a');
    a.classList.add('menu__link');
    a.textContent=`Section ${count}`;
    setAttr(a, {href:`#section${count}`, 'data-nav':`section${count}`});
    li.appendChild(a);
    fragment.appendChild(li);
    count++;
}

nav.appendChild(fragment);


// Add class 'active' to section when near top of viewport
dom.addEventListener('scroll', function(){
  
    for(let section of sections)
        {
            if(inViewPort(section))
            {
                section.classList.add('your-active-class');
            }
            else{
                section.classList.remove('your-active-class');
            }
    }
    
});

/* Scroll to anchor ID using scrollTO event*/
nav.addEventListener('click', function(e){
    e.preventDefault();
    const targ=e.target;
    const sectId = targ.dataset.nav;
    document.getElementById(sectId).scrollIntoView({behavior:"smooth"});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


