const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu")
menuButton.addEventListener('click', () =>{
    console.log("Кликнули");
    menu.classList.toggle('is-open')
})