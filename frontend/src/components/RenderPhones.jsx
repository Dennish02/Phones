import React from 'react'



export default function RenderPhones({phones}) {
  
  return (
    <section>
        
          {
                        phones.length !== 0 ?
                            phones.map(e =>(e.map(f=>f.phones.map(r=>{
                                
                                return(
                                    <div>
                                        <p>{r.phone_name}</p>
                                        <img src={r.image} width='50%'/>
                                    </div>
                                )
                            }))))

                            : 'Cargando...'
                    }
    </section>
  )
}