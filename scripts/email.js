//Email handler
const contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = new FormData(this);
    const formContent = Object.fromEntries(formData);
    const validField = /[^\s].*/i;
    const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    validateField(formContent.from_name, validField, 'from_name', PageContent[lang].cerror1)
        .then(() => validateField(formContent.from_email, validEmail, 'from_email', PageContent[lang].cerror2))
        .then(() => validateField(formContent.message, validField, 'message', PageContent[lang].cerror3))
        .then(() => {
            switchLoader();
            emailjs.sendForm('service_hkf04m8', 'template_rj4kghh', this)
            .then(() => {
                switchLoader();
                displayModal('success');
                this.reset();
            })
            .catch(() => {
                switchLoader();
                displayModal('failed');
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

const displayModal = (status) => {
    const modal = document.getElementById('send_status');
    const modalStatus = document.getElementById(status);
    const closeModal = document.getElementById('close_modal');
    modal.classList.add('display');
    modalStatus.classList.add('display');
    
    modal.addEventListener('click', function(e){
        if (e.target === this || closeModal.contains(e.target)){
            modal.classList.remove('display');
            modalStatus.classList.remove('display');
        }
    })
}