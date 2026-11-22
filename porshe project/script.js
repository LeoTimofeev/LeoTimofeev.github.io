const icons = document.querySelector(".icons")
const burger = document.querySelector("#burger")
const close = document.querySelector("#close")
const mobileMenu = document.querySelector(".mobile-list")

icons.addEventListener("click",function(){
    burger.classList.toggle("hidden")
    close.classList.toggle("hidden")
    mobileMenu.classList.toggle("show-mobile")
})