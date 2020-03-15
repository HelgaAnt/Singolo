
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});   


const PFMENU = document.getElementById('portfolio-menu');

PFMENU.addEventListener('click', (event) => {
    PFMENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});  