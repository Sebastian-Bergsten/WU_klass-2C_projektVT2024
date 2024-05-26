const burger = document.getElementById('burger')
const nav = document.getElementById('nav_buttons_list')

function toggleMenu() {
    nav.classList.toggle('nav_active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)