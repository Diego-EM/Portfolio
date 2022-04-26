// Header behavior
const header = document.getElementById('header');
addEventListener('scroll',()=>{
    if (window.scrollY > 0)
        header.classList.add('scrolled')
    else 
        header.classList.remove('scrolled')
},
{ passive: true }
)