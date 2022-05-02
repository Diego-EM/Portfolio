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
    duration: 350,
    reset: true
});

scroll.reveal('.sr_project', {
    viewOffset: {
        top: 60,
        bottom: 60,
    },
    viewFactor: 0.3,
    delay: 150,
    distance: "20px",
    duration: 200,
    reset: true
});

//Email handler
const contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(this);
    const formContent = Object.fromEntries(formData);
    const validField = /[^\s].*/gim;
    const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    validateField(formContent.name, validField, 'name', 'You should type your name to meet you :)')
        .then(() => validateField(formContent.email, validEmail, 'email', 'You must type a valid email address'))
        .then(() => validateField(formContent.body, validField, 'body', 'You can write your idea here :)'))
        .then(() => {
            switchLoader();
            const email = {
                Host : "host",
                Username : "username",
                Password : "password",
                To : 'youremail@domain.com',
                From : formContent.email,
                Subject : "Hey! You must set the params with your own config",
                Body : formContent.body
            }
            Email.send(email)
                .then( message =>{
                    switchLoader();
                    console.log(message);
                })
        })
        .catch(e => {
            const invalidMessage = document.getElementById(`invalid_${e.field}`); 
            const invalidField = document.getElementsByName(e.field);
            invalidField[0].classList.add('invalid_field');
            invalidMessage.classList.add('visible');
            invalidMessage.textContent = e.error;
            setTimeout(()=>{
                invalidMessage.classList.remove('visible');
            }, 3500)
        })
})

//fieldName is used for displaying which input has an invalid value
const validateField = (value, regex, fieldName = "", errorMsg = "") => {
    return new Promise((res, rej) => {
        if (regex.test(value)){
            const field = document.getElementsByName(fieldName);
            const invalidMessage = document.getElementById(`invalid_${fieldName}`);
            field[0].classList.remove('invalid_field');
            invalidMessage.classList.remove('visible');
            res();
        }
        rej({ field: fieldName, error: errorMsg });
    })
}

const switchLoader = () => {
    const button = document.getElementById('submit_form');
    const loader = document.getElementById('loader_container');
    button.classList.toggle('visible');
    loader.classList.toggle('visible');
}