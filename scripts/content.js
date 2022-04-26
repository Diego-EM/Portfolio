const PageContent = {
    EN: {
        m1: "Hi! I'm Diego Muñoz",
        m2:"I'm a Jr. web developer"
    },
    ES: {
        m1: "Hey! Soy Diego Muñoz",
        m2: "Soy un desarrollador web jr."
    }
}

const DinamicContent = {
    EN: [
        "I create solutions",
        "I make awesome experiences",
        "I'm a passionate web developer",
        "I love coding"
    ],
    ES: [
        "Creo soluciones",
        "Creo experiencias asombrosas",
        "Soy un desarrollaror apasionado",
        "Amo la programación"
    ]
}

//Dinamic welcome message in welcome section
const welcome = document.getElementById('welcome_message');
const colors = [
    "#34b0e1",
    "#45ac54",
    "#ce1a35",
    "#6b1ace"
]

let textIndex = 0;
let colorIndex = 0;
let textLimit = DinamicContent[lang].length - 1;
let colorLimit = colors.length - 1;
welcome.textContent = DinamicContent[lang][textIndex];
welcome.style.color = colors[colorIndex];

welcome.addEventListener('animationend',()=>{
    if (welcome.classList.contains('vanish'))
        welcome.classList.replace('vanish','appear');
        setTimeout(()=>{
            welcome.style.color = "#1d1d1d";
        }, 470)
})

welcome.addEventListener('animationstart',()=>{
    if (welcome.classList.contains('appear')){
        textIndex = (textIndex >= textLimit) ? 0 : textIndex + 1;
        colorIndex = (colorIndex >= colorLimit) ? 0 : colorIndex + 1;
        welcome.textContent = DinamicContent[lang][textIndex];
        welcome.style.color = colors[colorIndex];
    }
})

let welcomeInterval = setInterval(()=>{
    welcome.classList.replace('appear','vanish');
}, 4500);
