const btnMenuOpen = document.getElementById('open-menu-mobile-btn')
const btnMenuClose = document.getElementById('close-menu-mobile-btn')

const menuMobile = document.getElementById('menu-mobile')
const navBar = document.getElementById('nav-bar')

const menuFade = document.getElementById('menu-fade')

var menuActive = false


const menuToggle = (elements) => {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      menuMobile.classList.toggle('active')
      menuFade.classList.toggle('active')
    })
  })
}

menuToggle([btnMenuOpen, btnMenuClose])