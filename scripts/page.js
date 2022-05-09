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

//Scrollreveal
const scroll = ScrollReveal();

scroll.reveal('.sr_elem', {
    viewOffset: {
        top: 60,
        bottom: 60,
    },
    delay: 200,
    distance: "10px",
    duration: 350
});

scroll.reveal('.sr_project', {
    viewOffset: {
        top: 60,
        bottom: 60,
    },
    viewFactor: 0.3,
    delay: 150,
    distance: "20px",
    duration: 200
});