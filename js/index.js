const showMenu = document.querySelector('.hamburger-btn')
const menu = document.querySelector('.primary-navigation--shown')
const closeMenu = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')
const removeActive = () => {
  menu.classList.remove('active')
  overlay.classList.remove('over-active')
}
showMenu.addEventListener('click', () => {
  menu.classList.add('active')
  overlay.classList.add('over-active')
})
closeMenu.addEventListener('click', removeActive)
window.addEventListener('scroll', removeActive)