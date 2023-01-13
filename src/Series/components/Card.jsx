import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';

export const Card = ({ id }) => {
  // const endPoint = `https://pokeapi.co/api/v2/pokemon/`

  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
  const { name, sprites } = !!data && data
  const { front_default } = !!sprites && sprites

  return (
    <div className='card-page'>
      <div className='card-header'>
        <img src={ front_default } alt={name} className='card-header-img' />
      </div>

      <div className='card-content'>
        <div className="card-body-name">
          <h3 className='name-item'>{ name }</h3>
        </div>

        <div className='card-controls'>
          <button className='btn-rm-game'>Remover</button>
          <button className='btn-add-game'>Agregar</button>
        </div>
      </div>
   
    </div>
  )
}
