const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const btnBurger = document.querySelector('#burger-menu');
const nav = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.navigation a');
const darkmode = document.querySelector('#dark-mode');


btnBurger.addEventListener('click', ()=> {
  nav.classList.toggle('active')
  btnBurger.classList.toggle('bx-x')
  if(window.scrollY == 0){
    header.classList.toggle('active')
 }
});

linkNav.forEach(link => {
    link.addEventListener('click', ()=> {
        nav.classList.remove('active')
       btnBurger.classList.remove('bx-x')
    });
})

window.addEventListener('scroll', ()=> {
  nav.classList.remove('active')
  btnBurger.classList.remove('bx-x')
});


window.addEventListener('scroll', ()=> {
  header.classList.toggle('active', window.scrollY > 0)
});


const scrollActive = () => {
  sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if(top >= offset && top < offset + height) {
          linkNav.forEach(links => {
              links.classList.remove('active');
              document.querySelector(`.navigation a[href*=${id}]`).classList.add('active');
          })
      }
  })
}

window.addEventListener('scroll', scrollActive)


darkmode.addEventListener('click', ()=> {
  if(darkmode.classList.contains('bx-moon')){
    darkmode.classList.replace('bx-moon', 'bx-sun')
    document.body.classList.add('active')
  }else {
    darkmode.classList.replace('bx-sun', 'bx-moon')
    document.body.classList.remove('active')
  }
});


const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 2000,
  reset: true
})

sr.reveal('.home-content, .home-img, .about-img, .about-content, .services-box, .menu-box, .contact form, .btn, .section-heading', {interval: 200})

// Validation du formulaire de contact
const contactForm = document.querySelector('.contact form');
const nameInput = document.querySelector('input[placeholder="Nom"]');
const prenomInput = document.querySelector('input[placeholder="Prenom"]');
const emailInput = document.querySelector('input[placeholder="E-mail"]');
const messageTextarea = document.querySelector('textarea[placeholder="Message"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation du nom
    if (nameInput.value.trim() === '') {
        alert('Veuillez entrer votre nom.');
        isValid = false;
    }

    // Validation du prénom
    if (prenomInput.value.trim() === '') {
        alert('Veuillez entrer votre prénom.');
        isValid = false;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert('Veuillez entrer une adresse email valide.');
        isValid = false;
    }

    // Validation du message
    if (messageTextarea.value.trim() === '') {
        alert('Veuillez entrer un message.');
        isValid = false;
    }

    if (isValid) {
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    }
});
