import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getPhoneDetail } from '../redux/action';


export default function DetailDevice() {
    const dispatch= useDispatch()
    const phone = useSelector((state) => state.phone);
    const { slug,name } = useParams()

    useEffect(()=>{
        dispatch(getPhoneDetail(slug))
    },[])
  return (
    phone.length !== 0 ? 
   
       
        <section className='contenedor-phone'>
            <h2 className='titulo-phone'>{name}</h2>
            <div className='detalles-phone'>
                
                <div className='cont-img'>
                <img className='phone-img' src={phone.img[0]} alt='Foto Celu'/>
                </div>
                <div>
                <h3 className='brand'> {phone.brand}</h3>
                <p>Sistema operativo: {phone.os}</p>
                <p>Fecha de creación: {phone.release}</p>
                <p>Almacenamiento: {phone.storage}</p>
                </div>
                
            </div>
            <section className='especificaciones-phone'>
                <h3>Especificaciones Técnicas</h3>
                
                {phone.specification.map(e=>{
                    return (
                        <div key={e.title}>
                            <h3>{e.title}</h3>
                            {e.specs.map(t=>{
                                return(
                                    <div>
                                        <p>{t.key}</p>
                                        <p>{t.val.map(o=>{
                                            return(
                                                <p>{o}</p>
                                            )
                                        })}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </section>
                
        </section>
    
    : <p>Cargando celu ...</p>
  )
}
