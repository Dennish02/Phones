import React from 'react'
import { useDispatch } from 'react-redux'
import { getPhoneDetail } from '../redux/action';

export default function Phone({name, img, slug}) {
    const dispatch = useDispatch();

    function handleSlag(){
        dispatch(getPhoneDetail(slug))
    }
  return (
      <section className='phone'>
          <div className='phone-content'>
              <h3 className='phone-name'>{name}</h3>
              <div className='cont-img'>
              <img className='phone-img' src={img} width='50%' />
              </div>
              
          </div>
          <button
          onClick={handleSlag}
          className='phone-button'>Ver Detalles</button>
        
      </section>
  )
}
