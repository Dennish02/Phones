import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import RenderPhones from '../components/RenderPhones';
import { getBrands, searchByBrand } from '../redux/action';


export default function Home() {
    const dispatch = useDispatch()
    const [name, setName] = useState('Honor')
    const names = useSelector((state) => state.names);
    const phones = useSelector((state) => state.namphoneByBrandes);
    useEffect(()=>{
      dispatch(getBrands())
      dispatch(searchByBrand('honor-phones-121'))
    },[])
  
  return (
    <section >
      

     <Navbar names={names}
      setName={setName}
     />
     <h1 className='titulo'>{name}</h1>

     <RenderPhones phones={phones}/>
    </section>
  )
}
