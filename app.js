const listenav = document.querySelector(".listenav");
const logomenu = document.querySelector(".logomenu");
const lienmenu = document.querySelectorAll(".item-nav");

logomenu.addEventListener('click',()=>{
    listenav.classList.toggle('active');

})

// POUR REFERMER LE MENU QUAND ON CLIQUE SUR UN LIEN
lienmenu.forEach(lien => {
    lien.addEventListener('click',()=>{
        listenav.classList.toggle("active");
    })
    
});