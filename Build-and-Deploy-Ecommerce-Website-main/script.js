// Script for navigation bar
const nav = document.querySelector("#navbar")
const menu = document.querySelector(".menu-icon")
const closeIcon = document.querySelector("#close")

if(menu){
    menu.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

if(closeIcon){
    closeIcon.addEventListener("click",()=>{
        nav.classList.remove("active")
    })    
}