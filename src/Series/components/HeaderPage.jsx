import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from '../pages/Search'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'



export const HeaderPage = ({ name, onReloadPokemons, onSearchPokemon }) => {

  const navigate = useNavigate()

  return (
    <header className='espacing header-page'>
      <div className='container-title'>
        <h1 className="title-page">Bienvenido a la pagina { name }</h1>
      </div>

      <div className='container-input-search'>
        <Search onSearch={onSearchPokemon} /> 
      </div>


      <div className='page-controls'>
        <button onClick={ () => navigate('/series',{})} className='btn-control'> <AiOutlineArrowLeft/> </button>
        <button onClick={ () => onReloadPokemons() } className='btn-control'>  <AiOutlineUndo/> </button>
      </div>

    </header>
  )
}
