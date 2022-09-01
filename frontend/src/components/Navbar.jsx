import React from 'react'
import { useDispatch } from 'react-redux';
import { searchByBrand } from '../redux/action';

export default function Navbar({ names }) {
    const dispatch = useDispatch();


    function handleSelect(e){
        dispatch(searchByBrand(e.value))
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
