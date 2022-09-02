import axios from "axios";


const detalleCelular = async (req, res)=>{
    const {slug} = req.params
 
    try {
        let {data} = await axios.get(`http://api-mobilespecs.azharimm.site/v2/${slug}`)
        let celular = {
            brand : data.data.brand,
            img: data.data.phone_images,
            release: data.data.release_date,
            os: data.data.os,
            storage: data.data.storage,
            specification: data.data.specifications
        }
        
        res.send(celular)
    } catch (error) {
        res.status(404).json({err: error.message})
    }
}
export {
    detalleCelular
}