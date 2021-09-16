var searchBar=document.getElementsByName("search-bar")[0];
let opcion=false;
document.getElementsByClassName("SVG search")[0].addEventListener("click",()=>{
    searchBar.classList.toggle("opening");
    searchBar.readOnly=opcion;
    opcion=!opcion;
})


// var popupcontainer=document.getElementById("dialog-newParking");
// document.getElementsByClassName("cancelar")[0].addEventListener("click",()=>{
//     popupcontainer.close();
// });




// document.getElementsByClassName("SVG add")[0].addEventListener("click",()=>{
//     popupcontainer.showModal();
// })



