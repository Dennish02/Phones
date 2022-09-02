import React from 'react'
import Phone from './Phone'



export default function RenderPhones({phones}) {
  console.log(phones);
  return (
    <section className='contenedorPhones'>
        
          {
              phones ?
                  phones.map(e => (e.map(f => f.phones.map(r => {

                      return (
                          <Phone 
                          name={r.phone_name}
                          img={r.image}
                          slug={r.slug}
                          />
                      )
                  }))))

                  : 'Cargando...'
          }
    </section>
  )
}