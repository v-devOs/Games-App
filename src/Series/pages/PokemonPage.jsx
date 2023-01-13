import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Card } from '../components/Card'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'

export const PokemonPage = () => {

  const pokemonIds = getIds();


  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Pokemon</h1>
      </header>

      <div className='container-cards-page'>
        {
          pokemonIds.map( pokemonId => (
            <Card key={ pokemonId } id={pokemonId}  />  
          ))
        }
      </div>
    </div>
  )
}
