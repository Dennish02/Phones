import React, { lazy, Suspense } from 'react'
// import Phone from './Phone'
const Phone = lazy(()=>import('./Phone'));


export default function RenderPhones({phones, name}) {

  return (
    <section className='contenedor'>
        <h1 className='titulo'>{name}</h1>
      <div className='contenedorPhones'>
      {
              phones.length !== 0 ?
                  phones.map(e => (e.map(f => f.phones.map(r => {

                    return (
                      <Suspense key={r.slug} fallback={<p>Cargando...</p>}>
                        <Phone
                          name={r.phone_name}
                          img={r.image}
                          slug={r.slug}
                        />
                      </Suspense>

                    )
                  }))))

                  : 'Cargando...'
          }
        </div>    
          
         
    </section>
  )
}