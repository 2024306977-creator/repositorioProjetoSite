document.addEventListener("DOMContentLoaded",() => {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    
    menuResponsivo.addEventListener("click",() =>{
        navMenu.classList.toggle("active");
    });//Fecha o menu responsivo
    
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link)=>{
        link.addEventListener("click", () =>{
            navMenu.classList.remove("active");
        });
    });
});//Fechamento do evento carregar página html; 
