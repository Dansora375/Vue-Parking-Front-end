

export function list_info_parq() {
    this.axios.get('/vehicle_zone')
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .catch(e => {            
            return console.log(e.response);
        })
    
}