const carousel = document.getElementById('images')
const btnPreviousCarousel = document.getElementById('carousel-previous')
const btnNextCarousel = document.getElementById('carousel-next')
const imagesCarousel = document.querySelectorAll('.product-item')

const previusIcon = document.querySelector('#carousel-previous i')
const nextIcon = document.querySelector('#carousel-next i')

let device = () => carousel.clientWidth == 100
let axxis = (device()) ? "Y" : "X"
let activeImage = 0


const slideCarousel = (direction) => {

  if (direction == 'previous') activeImage--
  else activeImage++

  if (activeImage > imagesCarousel.length - 2) activeImage = 0

  if (activeImage < 0) activeImage = imagesCarousel.length - 2

  carousel.style.transform = `translate${axxis}(${-activeImage * 100}px)`
}

const eventListners = (elements, action) => {
  elements.forEach(element => {
    element.addEventListener(action, () => {
      slideCarousel(element.dataset.action)
    })
  });
}

eventListners([btnPreviousCarousel, btnNextCarousel], 'click')

