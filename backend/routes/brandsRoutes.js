import  express  from "express";
import { getBrands } from "../components/brands.js";
import { busquedaMarca } from "../components/busquedaMarca.js";
import { detalleCelular } from "../components/detalleCelular.js";


const router = express.Router();

router.get('/', getBrands)
router.get('/phones', busquedaMarca)
router.get('/phones/detail', detalleCelular)
export default router