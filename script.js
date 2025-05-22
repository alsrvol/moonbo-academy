// 햄버거 메뉴
const menuToggle = document.querySelector('.menu-toggle')
const sideMenu = document.getElementById('sideMenu')
const overlay = document.getElementById('overlay')

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active')
  overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active')
  overlay.classList.remove('active')
})

// 슬라이드
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
let currentIndex = 0

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index)
    dots[i].classList.toggle('active', i === index)
  })
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i
    showSlide(currentIndex)
  })
})
