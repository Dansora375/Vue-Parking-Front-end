let opcionesParking=[
    "Carro","moto"
];
let app = new Vue({
    el:'#app',
    data : {
        message : 'Hello',
        opcionesPark : opcionesParking,
        dialogActive:false
    },
    methods : {
        showDialogParking: function(){

        },
        hideDialog: function(){
            alert("Hola mundo");
            if(dialogActive)
                document.getElementById("PruebaDialog").close;
            else
                document.getElementById("PruebaDialog").showModal();
            dialogActive=!dialogActive;
        }
    }
});