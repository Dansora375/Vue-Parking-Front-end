import * as controller from '@/Controladores/ResidentController';

export default {

    namespaced: true,
    state: {
         showOptions: false,
         data_resident:[],
         Entrada_data_resident:[]

         
        
    },
    mutations: {
        changeShowOptions(state,value) {
            state.showOptions = value;
        },
        createListaResi(state, entrada){
            state.data_resident=entrada;
        },
        createLista_EntradaResi(state, entrada){
            state.Entrada_data_resident=entrada;
        },
        add_resi(state, data){
            state.Entrada_data_resident.push(data);
            state.showOptions= false;
        }

    
    },
    actions: {
       async cargar_data_resi(context){
            const data_resident= await controller.resiedents_list();
            context.commit('createListaResi',data_resident)
       },
       async cargarData_EntradaResi(context){
            const data_EntradaResi= await controller.list_entrada_resi();
            context.commit('createLista_EntradaResi',data_EntradaResi)
       },
       async addNewResident(context, value){
           const result = await controller.post_Resident(value);
           if (result.result){
               context.commit('add_resi',value )
           }else{
                alert('No se ha podido subir el dato del residente a la base: ');
                console.log('Error al subir el dato del resiedente a la base : ', result.error);
           }
       }
      

    },
    getters: {

        showOptions(state) {
            return state.showOptions;
        },
        resident_list(state){
            return state.data_resident;
        },
        Entrada_resident_list(state){
            return state.Entrada_data_resident;
        }
        
        


    }

}