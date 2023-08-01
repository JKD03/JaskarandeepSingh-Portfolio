const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

function validateEmail(input) {
    const email = input.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorElement = document.getElementById('email-error');

    if (!emailRegex.test(email)) {
      errorElement.textContent = 'Please enter a valid email address.';
    } else {
      errorElement.textContent = '';
    }
  }

function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }
  
  function applyRandomColor() {
    var element1 = document.getElementsByClassName('works');
    var element2 = document.getElementsByClassName('work__img');
    for (var i = 0; i < element1.length; i++) {
      var randomColor = getRandomColor();
      element1[i].style.backgroundColor = randomColor;
      element2[i].style.backgroundColor = randomColor;
    }
  }

  window.onload = applyRandomColor;


var btn11 = document.getElementById('btn1');
btn11.addEventListener('click',function(e){
    e.preventDefault()
    console.log('button clicked');
    var name = document.getElementById('name1').value;
    var email = document.getElementById('email1').value;
    var message = document.getElementById('message1').value;
    var body = 'name: '+name +'<br/> email: '+email +'<br/> message: '+message;
    console.log(name);
    console.log(email);
    console.log(message);
    if(name.length==0){
    prompt("Name can not be Empty");}
    else if(email.length==0){
      prompt("Email can not be null");
    }
    else if(message.length==0){
      prompt("Message field can not be null");
    }
    else{
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jkd.temporary@elasticmail.com",
        Password : "D1CAD768D91E6B90E2F349A288EED741E5AC",
        To : 'talk2jkds@gmail.com',
        From : email,
        Subject : "From Portfolio Website",
        Body : body
    }).then(
      // message => alert(message)
      message => alert("Message Send")
    );
    }
    
})

