let menu = document.querySelector('#menu-btn');
let navLinks = document.querySelector('.header .navbar .links');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navLinks.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navLinks.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('.header .navbar').classList.add('active');
    } else {
        document.querySelector('.header .navbar').classList.remove('active');
    }
}