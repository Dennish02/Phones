import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteCache, searchByBrand } from '../redux/action';

export default function Navbar({ names, setName }) {
    const dispatch = useDispatch();
    function handleSelect(e){
        const eso = e.value; 
        const data = eso.split('-')[0] 
        const titulo = data.charAt(0).toUpperCase() + data.slice(1)
        
        dispatch(deleteCache())
        dispatch(searchByBrand(e.value))
        setName(titulo)
    }

    return (
        <nav className='navbar'>
                <div>
                    <p className='logo'>SP</p>
                </div>
                <div>
                <select
                onChange={(e)=>handleSelect(e.target)}
                    className='select-navbar'
                    >

                    {
                        names.length !== 0 ?
                            names.map(e => {
                               
                                return(
                                    <option value={e.slug} key={e.slug}>{e.name}</option>
                                )
                                
                            })

                            : 'Cargando...'
                    }
                </select>
                </div>
                <div>
                    <p>Filtros</p>    
                </div>
                <div>
                     <p>Search</p>   
                </div>
           

        </nav>
    )
}
