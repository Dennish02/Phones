import axios from 'axios';

let getBrands = async (req, res) =>{
   
    try {

            let {data} = await axios.get('http://api-mobilespecs.azharimm.site/v2/brands')
            let datos = data.data.map(el=>(
                {
                    name : el.brand_name,
                    slug: el.brand_slug
                }
            ))
            
           
             
           
           
            // for(let dato of datos){
            //     let page=1

            //     for(let i=0; i<=page;i++){
            //         let {data} = await axios.get(`http://api-mobilespecs.azharimm.site/v2/brands/${dato.slug}?page=${page}`)
            //         return data
            //     }
            //     dato.detail = data.data
            // }
            
            res.status(200).json(datos)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

export {
    getBrands
}