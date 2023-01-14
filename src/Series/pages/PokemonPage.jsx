import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'
import { Card } from '../components/Card'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import { Search } from './Search'

const url = `https://pokeapi.co/api/v2/pokemon/`

export const PokemonPage = React.memo(() => {

  const [ pokemonIds, setpokemonIds ] = useState(getIds())
  const navigate = useNavigate()

  const onReloadPokemons = () => {
    setpokemonIds( getIds() )
  }

  const onSearchPokemon = ( name ) => {
    setpokemonIds( [name] )
  }

  return (
    <>

      <div className='container-page'>
        <header className='espacing header-page'>
          <h1 className="title-page">Bienvenido a la pagina Pokemon</h1>

          <div className='page-controls'>
            <button onClick={ () => navigate('/series',{})} className='btn-control'> <AiOutlineArrowLeft/> </button>
            <button onClick={ () => onReloadPokemons() } className='btn-control'>  <AiOutlineUndo/> </button>
          </div>
        </header>

        <Search onSearch={onSearchPokemon} />
        

        <div className='container-cards-page'>
          {
            pokemonIds.map( pokemonId => (
              <Card key={ pokemonId } url={`${url + pokemonId}`}  />  
            ))
          }
        </div>
      </div>

    </>

  )
})
