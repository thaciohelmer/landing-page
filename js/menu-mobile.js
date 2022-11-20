const btnMenuOpen = document.getElementById('open-menu-mobile-btn')
const btnMenuClose = document.getElementById('close-menu-mobile-btn')

const menuMobile = document.getElementById('menu-mobile')


const menuToggle = (elements) => {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      menuMobile.classList.toggle('active')
    })
  })
}

menuToggle([btnMenuOpen, btnMenuClose])