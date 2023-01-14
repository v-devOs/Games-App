import React, {useState } from 'react'
import { Card } from '../components/Card'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const url = `https://pokeapi.co/api/v2/pokemon/`

export const PokemonPage = React.memo(() => {

  const [ pokemonIds, setpokemonIds ] = useState(getIds())
  const navigate = useNavigate()

  const reloadPokemons = () => {
    setpokemonIds( getIds() )
  }

  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Pokemon</h1>

        <div className='page-controls'>
          <button onClick={ () => navigate(-1)} className='btn-control'> <AiOutlineArrowLeft/> </button>
          <button onClick={ () => reloadPokemons() } className='btn-control'>  <AiOutlineUndo/> </button>
        </div>
      </header>

      

      <div className='container-cards-page'>
        {
          pokemonIds.map( pokemonId => (
            <Card key={ pokemonId } url={`${url + pokemonId}`}  />  
          ))
        }
      </div>
    </div>
  )
})
