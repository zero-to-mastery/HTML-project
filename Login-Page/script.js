const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const popup = document.querySelector('.btn-login');
const close = document.querySelector('.close-btn');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    document.getElementsByTagName('form')[0].reset();
    wrapper.classList.remove('active');
})

popup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

close.addEventListener('click', () => {
    document.getElementsByTagName('form')[0].reset();
    wrapper.classList.remove('active-popup');
})

// -----Off-canvas menu-------- 

// copy navigation to offCanvas
const fromNav = document.querySelector('header nav');
const toNav = document.querySelector('aside nav');
toNav.innerHTML = fromNav.innerHTML;

// toggle navigation on button click
const offCanvas = document.querySelector('.off-canvas');
const menuToggle = document.querySelector('.menu-toggle');
const closeCanvas = document.querySelector('.off-canvas .t-close');
menuToggle.addEventListener('click', () => {
    offCanvas.classList.toggle('active');
})
closeCanvas.addEventListener('click', () => {
    offCanvas.classList.toggle('active');
})