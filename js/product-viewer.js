const imgRotate = document.getElementById('img-rotate')
const btnPrevious = document.getElementById('btn-previous')
const btnNext = document.getElementById('btn-next')
const imgCount = 24

let imgActive = 3
let mouseOn = false

function imgAlternate(direction) {
  if (direction) {
    imgActive == 1 ? imgActive = imgCount : imgActive--
  } else {
    imgActive < imgCount ? imgActive++ : imgActive = 1
  }
  imgRotate.setAttribute('src', `./img/shoe/Ni_${imgActive}.png`)
}

function addEventListner(element, action, direction) {
  element.addEventListener(action, function () {
    imgAlternate(direction)
  })
}

addEventListner(btnNext, 'click', true)
addEventListner(btnPrevious, 'click', false)
