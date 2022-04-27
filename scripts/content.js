const PageContent = {
    EN: {
        n1: "About",
        n2: "Skills",
        n3: "Projects",
        n4: "Contact",
        w1: "Hi! I'm Diego Muñoz",
        w2: "I'm a Jr. web developer",
        at: "About me",
        a1: "I'm a computer technician, and I'm currently studying at Universidad Veracruzana. I'm a self-taught person, passionate about frontend and backend web development.",
        a2: "I'm starting my professional career developing projects where I can use what I learned, improve development techniques and bring a great user experience implementing the tools and technologies, whatever the case may be.",
        a3: "My objective is being part of the sector to contribute to projects that benefit and bring good experiences to the final user, thus bringing a positive impact in a personal and professional way.",
        a4: "I own certifies that avails my tech skills due to my education trough online courses provided by FreeCodeCamp. Feel free to verify their source.",
        a5: "View certifications",
        st: "Skills",
        s1: "In my way, I learned multiple technologies and tools that I've implemented in my projects using the MVC architecture pattern and the following technologies.",
        s2: "Also, I've been developing my personal life to bring a positive impact socially and professionally.",
        sl1: "Adaptable",
        sl2: "Assertive",
        sl3: "Creative",
        sl4: "Disciplined",
        sl5: "Organized",
        sl6: "Productive",
        sl7: "Self educated"
    },
    ES: {
        n1: "Sobre mi",
        n2: "Habilidades",
        n3: "Proyectos",
        n4: "Contacto",
        w1: "Hey! Soy Diego Muñoz",
        w2: "Soy un desarrollador web jr.",
        at: "Sobre mi",
        a1: "Soy técnico bachiller en computación y actualmente me encuentro estudiando en la Universidad Veracruzana. Soy una persona autodidacta, apasionado por el desarrollo web, tanto del lado cliente como del servidor.",
        a2: "Estoy trazando mi camino profesional a partir de proyectos en los cuales me permitan hacer uso de todo lo que he aprendido con el tiempo, perfeccionar técnicas de desarrollo y brindar una experiencia de usuario agradable implementando las herramientas y tecnologías según sus necesidades.",
        a3: "Mi objetivo es formar parte del sector de la informática para contribuir a proyectos que beneficien y den una buena experiencia al usuario final, y de tal forma dar un impacto positivo a nivel personal y profesional con las tecnologías del momento.",
        a4: "Cuento con certificados que avalan mis habilidades técnicas gracias al estudio a través de cursos online proveídos por FreeCodeCamp. Siéntete libre de verificar las fuentes.",
        a5: "Ver certificados",
        st: "Mis habilidades",
        s1: "En el camino he aprendido el uso de múltiples herramientas y las he implementado en mis proyectos utilizando el patrón MVC y las siguientes tecnologías.",
        s2: "De igual manera me he desarrollado en mi vida personal procurando dar un impacto positivo a nivel social y laboral.",
        sl1: "Adaptable",
        sl2: "Asertivo",
        sl3: "Creativo",
        sl4: "Disciplinado",
        sl5: "Organizado",
        sl6: "Productivo",
        sl7: "Autodidacta"
    }
}

const DinamicContent = {
    EN: [
        "I create solutions and resolve needs",
        "I'm a passionate web developer",
        "I make awesome experiences",
        "I love coding and coffee"
    ],
    ES: [
        "Creo soluciones y resuelvo necesidades",
        "Soy un desarrollador web apasionado",
        "Creo experiencias asombrosas",
        "Amo la programación y el café"
    ]
}

//Language handling
const lang_button = document.getElementById('page_lang');
let lang = localStorage.getItem('lang') ?? "EN";
lang_button.textContent = lang;

lang_button.addEventListener('click',()=>{
    lang = (lang === "ES") ? "EN" : "ES";
    localStorage.setItem('lang', lang);
    lang_button.textContent = lang;
    setContent();
});

//Getting all text content elements
const navAbout = document.getElementById('nav_about');
const navSkill = document.getElementById('nav_skill');
const navProject = document.getElementById('nav_project');
const navLink = document.getElementById('nav_link');

const welcomeGreet = document.getElementById('welcome_greet');
const welcomeMessage = document.getElementById('welcome_message');

const aboutTitle = document.getElementById('about_title');
const aboutP1 = document.getElementById('about_p1');
const aboutP2 = document.getElementById('about_p2');
const aboutP3 = document.getElementById('about_p3');
const aboutP4 = document.getElementById('about_p4');
const aboutCert = document.getElementById('about_certification');

const skillTitle = document.getElementById('skill_title');
const skillTech = document.getElementById('skill_tech');
const skillPersonal = document.getElementById('skill_personal');
const skillListSe = document.getElementById('list_se');
const skillListAdap = document.getElementById('list_adap');
const skillListAsse = document.getElementById('list_asse');
const skillListCrea = document.getElementById('list_crea');
const skillListDisc = document.getElementById('list_disc');
const skillListOrg = document.getElementById('list_org');
const skillListProd = document.getElementById('list_prod');

//Setting content by lang user preference
const setContent = () => {
    navAbout.textContent = PageContent[lang].n1;
    navSkill.textContent = PageContent[lang].n2;
    navProject.textContent = PageContent[lang].n3;
    navLink.textContent = PageContent[lang].n4;

    welcomeGreet.textContent = PageContent[lang].w1
    welcomeMessage.textContent = DinamicContent[lang][textIndex];

    aboutTitle.textContent = PageContent[lang].at;
    aboutP1.textContent = PageContent[lang].a1;
    aboutP2.textContent = PageContent[lang].a2;
    aboutP3.textContent = PageContent[lang].a3;
    aboutP4.textContent = PageContent[lang].a4;
    aboutCert.textContent = PageContent[lang].a5;

    skillTitle.textContent = PageContent[lang].st;
    skillTech.textContent = PageContent[lang].s1
    skillPersonal.textContent = PageContent[lang].s2
    skillListAdap.textContent = PageContent[lang].sl1;
    skillListAsse.textContent = PageContent[lang].sl2;
    skillListCrea.textContent = PageContent[lang].sl3;
    skillListDisc.textContent = PageContent[lang].sl4;
    skillListOrg.textContent = PageContent[lang].sl5;
    skillListProd.textContent = PageContent[lang].sl6;
    skillListSe.textContent = PageContent[lang].sl7;
}

//Dinamic welcome message in welcome section
const colors = [
    "#34b0e1",
    "#45ac54",
    "#ce1a35",
    "#6b1ace"
];

let textIndex = 0;
let colorIndex = 0;
let textLimit = DinamicContent[lang].length - 1;
let colorLimit = colors.length - 1;
welcomeMessage.textContent = DinamicContent[lang][textIndex];
welcomeMessage.style.color = colors[colorIndex];

welcomeMessage.addEventListener('animationend',()=>{
    if (welcomeMessage.classList.contains('vanish'))
        welcomeMessage.classList.replace('vanish','appear');
        setTimeout(()=>{
            welcomeMessage.style.color = "#1d1d1d";
        }, 470)
})

welcomeMessage.addEventListener('animationstart',()=>{
    if (welcomeMessage.classList.contains('appear')){
        textIndex = (textIndex >= textLimit) ? 0 : textIndex + 1;
        colorIndex = (colorIndex >= colorLimit) ? 0 : colorIndex + 1;
        welcomeMessage.textContent = DinamicContent[lang][textIndex];
        welcomeMessage.style.color = colors[colorIndex];
    }
})

let welcomeInterval = setInterval(()=>{
    welcomeMessage.classList.replace('appear','vanish');
}, 4500);

setContent();