import axios from "axios";


const busquedaMarca = async (req, res)=>{
    const {slug, name} = req.body
    let peticiones = [];
    let pages=1
    let obj = {}; 
    let filtroResultado= []

    try {   
       
            for(let i=1; i<=pages;i++){
                let {data} = await axios.get(`http://api-mobilespecs.azharimm.site/v2/brands/${slug}?page=${i}`)  
                pages =data.data.last_page;
               peticiones = [...peticiones, data.data]
            }
          
            obj.name= name;
            obj.detail = peticiones
    
           filtroResultado = [...filtroResultado, obj]
        

        res.status(200).json(filtroResultado)
    } catch (error) {
        res.status(404).json({err: error.message})
    }

   

}

export {
    busquedaMarca
}