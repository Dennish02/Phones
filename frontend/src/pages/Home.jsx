import React, { lazy, Suspense, useState } from 'react'
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import DetailDevice from '../components/DetailDevice';
import Navbar from '../components/Navbar';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// const RenderPhones = lazy(()=>import('../components/RenderPhones'))
import RenderPhones from '../components/RenderPhones';
import { getBrands, searchByBrand } from '../redux/action';


export default function Home() {
    const dispatch = useDispatch()
    const [name, setName] = useState('Honor')
    const names = useSelector((state) => state.names);
    const phones = useSelector((state) => state.phoneByBrand);
    useEffect(()=>{
      dispatch(getBrands())
      dispatch(searchByBrand('honor-phones-121'))
    },[])
  
  return (
    <BrowserRouter>
      
        <Navbar names={names}
          setName={setName}
        />
        
    
        <Routes>
          <Route path="/" element={<RenderPhones name={name} phones={phones} />} />
          <Route path="/device/:name/:slug" element={<DetailDevice />} />
        </Routes>
      
          
        
    
      </BrowserRouter>
    
  )
}
