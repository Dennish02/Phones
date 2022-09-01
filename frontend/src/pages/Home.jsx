import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import RenderPhones from '../components/RenderPhones';
import { getBrands } from '../redux/action';


export default function Home() {
    const dispatch = useDispatch()
    const names = useSelector((state) => state.names);
    const phones = useSelector((state) => state.namphoneByBrandes);
    useEffect(()=>{
      dispatch(getBrands())
    },[])
  
  return (
    <section >
      

     <Navbar names={names}/>
     <h1 className='titulo'>Web para buscar celulares</h1>

     <RenderPhones phones={phones}/>
    </section>
  )
}
