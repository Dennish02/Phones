import axios from 'axios';



const getBrands =()=>{
   return async function(dispatch){
    try {
        let {data} = await axios.get('http://localhost:3001/brands')
        return dispatch({
            type: 'GET-BRANDS',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
   }
}
const searchByBrand=(value)=>{
       
    return async function(dispatch){
        try {
            let {data} = await axios.get(`http://localhost:3001/brands/phones/${value}`)
            return dispatch({
                type: 'SEARCH_BY_BRAND',
                payload:data
            })
        } catch (error) {
            console.log(error.nessage)
        }
    }
}

const getPhoneDetail =(value)=>{
    return async function(dispatch){
        try {
            let {data} = await axios.get(`http://localhost:3001/brands/phones/detail/${value}`)
            console.log(data);
        } catch (error) {
            console.log(error.message)
        }
    }
}
export {
    getBrands,
    searchByBrand,
    getPhoneDetail

}