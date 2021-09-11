var searchBar=document.getElementsByName("search-bar")[0];
var opcion=true;
document.getElementsByClassName("SVG search")[0].addEventListener("click",()=>{
    searchBar.classList.toggle("opening");
    searchBar.readOnly=!searchBar.readOnly;
})


var popupcontainer=document.getElementsByClassName("add-popup-container")[0];
document.getElementsByClassName("cancelar")[0].addEventListener("click",()=>{
    popupcontainer.classList.add("ocultar");
});

document.getElementsByClassName("SVG add")[0].addEventListener("click",()=>{
    popupcontainer.classList.remove("ocultar");
})