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

//Language handling
const lang_button = document.getElementById('page_lang');
let lang = localStorage.getItem('lang') ?? "EN";
lang_button.textContent = lang;

lang_button.addEventListener('click',()=>{
    lang = (lang === "ES") ? "EN" : "ES";
    localStorage.setItem('lang', lang);
    lang_button.textContent = lang;
})