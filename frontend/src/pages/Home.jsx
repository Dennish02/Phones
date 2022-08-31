import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from '../redux/action';


export default function Home() {
    const dispatch = useDispatch()
    const names = useSelector((state) => state.names);
    useEffect(()=>{
      dispatch(getBrands())
    },[])
  
    return (
      <div >
       <h1>Hola</h1>
       
  <select name="" id="">
  
  {
      names?   
      names.map(e=>(
        <option key={e.slug}>{e.name}</option>
      ))
  
      : 'Cargando...'
     }
  </select>
   
      </div>
    )
}
