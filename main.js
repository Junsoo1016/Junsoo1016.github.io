const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const cancelBtn = document.querySelector('.navbar__cancelBtn')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const changeIcon = () => {
    const a = document.getElementById('.navbar__toogleBtn');
    a.classList.toggle('.navbar__cancelBtn');
}
