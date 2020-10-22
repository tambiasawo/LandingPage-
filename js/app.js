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
const lis = nav.children;
const arrow = dom.querySelector('i');
const mainHeader = dom.querySelector('header')
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
    if(window.innerWidth <=650+'px')
    {
        return (
            (bounds.top>=0) && 
            (bounds.bottom<=(window.innerHeight || document.documentElement.clientHeight) * (1.4))
            );
    }
    else
    {
        return (
        bounds.top >=0 && bounds.left>=0 && bounds.right<=(window.innerWidth || document.documentElement.clientWidth) && 
        (bounds.bottom<=(window.innerHeight || document.documentElement.clientHeight) * (1.6)) 
        );
    }
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
        else
        {
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

for(let i =0; i<lis.length;i++)
{
    let curr = lis[i];
    curr.addEventListener('click', function(e){
        for(let j =0; j<lis.length;j++)
        {
            lis[j].classList.remove('active');
        }
    this.classList.add('active');
    });
}

dom.addEventListener('scroll',function(){
    if((document.body.scrollTop || document.documentElement.scrollTop) > 400)
    {
        arrow.style.display='block';
    }
    else
    {
        arrow.style.display='none';
    }
});

arrow.addEventListener('click', function(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
});

let posY1 = window.pageYOffset;
window.onscroll = function(){
  let posY2 = window.pageYOffset;
  posY1>posY2 ? mainHeader.style.display ='block': mainHeader.style.display='none';
  posY1 = posY2;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



