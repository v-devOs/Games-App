import React, {useState } from 'react'
import { Card } from '../components/Card'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import {AiOutlineUndo} from 'react-icons/ai'

export const PokemonPage = React.memo(() => {

  const [ pokemonIds, setpokemonIds ] = useState(getIds())

  const reloadPokemons = () => {
    setpokemonIds( getIds() )
  }

  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Pokemon</h1>
      </header>

      <div className='page-controlss'>
        <button onClick={ () => reloadPokemons() } className='btn-reload'> <AiOutlineUndo/> </button>
      </div>

      <div className='container-cards-page'>
        {
          pokemonIds.map( pokemonId => (
            <Card key={ pokemonId } id={pokemonId}  />  
          ))
        }
      </div>
    </div>
  )
})
