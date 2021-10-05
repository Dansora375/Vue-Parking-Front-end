
export default {

    namespaced: true,
    state: {
         showOptions: false,
        
    },
    mutations: {
        changeShowOptions(state,value) {
            state.showOptions = value;
        },

    
    },
    // actions: {

      

    // },
    getters: {

        showOptions(state) {
            return state.showOptions;
        }
        


    }

}