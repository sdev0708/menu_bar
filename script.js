const menuIcon = document.querySelector('.menuIcon')
const menu = document.querySelector('.menu')
const userIcon = document.querySelector('.userIcon')
const bookmarkIcon = document.querySelector('.bookmarkIcon')
const chatIcon = document.querySelector('.chatIcon')
const mailIcon = document.querySelector('.mailIcon')

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active')
    userIcon.classList.toggle('hidden')
    bookmarkIcon.classList.toggle('hidden')
    chatIcon.classList.toggle('hidden')
    mailIcon.classList.toggle('hidden')
})