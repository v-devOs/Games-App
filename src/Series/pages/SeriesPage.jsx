import React,{ useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SerieContext } from '../../auth/context/SerieContext'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'
import { Card } from '../components'
import { getIds } from '../helpers/getIds'
import { Search } from './Search'
import '../styles/stylesPages.css'
import { NavBar } from '../ui/NavBar'

export const SeriesPage = () => {

  const { state } = useContext(SerieContext);
  const { actualPage } = state;
  const { name, endPoints } = actualPage;

  const [ charactersIds, setCharactersIds ] = useState({
    ids: getIds(),
    isSingle: false,
    url: endPoints.someCharacters
  })

  const navigate = useNavigate()
 
  const onReloadPokemons = () => {
    setCharactersIds({
      ids: getIds(),
      isSingle: false,
      url: endPoints.someCharacters
    })
  }

  const onSearchPokemon = ( name ) => {
    setCharactersIds({ ids: [name], isSingle: true, url: endPoints.singleCharacter })
  }

  return (
    <>
      <NavBar name={ name }/>
      <div className='container-page'>

        <header className='espacing header-page'>
          <h1 className="title-page">Bienvenido a la pagina { name }</h1>

          <div className='page-controls'>
            <button onClick={ () => navigate('/series',{})} className='btn-control'> <AiOutlineArrowLeft/> </button>
            <button onClick={ () => onReloadPokemons() } className='btn-control'>  <AiOutlineUndo/> </button>
          </div>
        </header>

        <Search onSearch={onSearchPokemon} />
        

        <div className='container-cards-page'>
          {
            charactersIds.ids.map( id => (
              <Card 
                key={ id } 
                url={ charactersIds.url + id } 
                isSingle={ charactersIds.isSingle }  
              />  
            ))
          }
        </div>
      </div>

    </>
  )
}
