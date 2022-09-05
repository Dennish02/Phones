import React from 'react'

import { Link } from 'react-router-dom';


export default function Phone({name, img, slug}) {
   
  return (
      <section className='phone'>
          <div className='phone-content'>
              <h3 className='phone-name'>{name}</h3>
              <div className='cont-img'>
              <img className='phone-img' src={img} width='50%' />
              </div>
              
          </div>
          <Link to={`/device/${name}/${slug}`}>
          <button
          className='phone-button'>Ver Detalles</button>
         </Link>   
      </section>
  )
}
