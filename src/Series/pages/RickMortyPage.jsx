import React, { useState } from 'react'
import { Card } from '../components/Card'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import { useNavigate } from 'react-router-dom'
import { Search } from './Search'

const url = `https://rickandmortyapi.com/api/character/`

export const RickMortyPage = () => {

  const [ charactersIds, setCharactersIds ] = useState({
    url: `https://rickandmortyapi.com/api/character/`,
    ids: getIds()
  })


  const navigate = useNavigate()

  const reloadCharacters = () => {
    setCharactersIds( getIds() )
  }

  const onSearchCharacter = ( name ) => {
    setCharactersIds( {
      url: `https://rickandmortyapi.com/api/character/?name=`,
      ids: [name]
    })

    console.log(name);
  }

  const { url, ids } = charactersIds


  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Rick and Morty</h1>

        <div className='page-controls'>
          <button onClick={ () => navigate('/series',{})} className='btn-control'> <AiOutlineArrowLeft/> </button>
          <button onClick={ () => reloadCharacters() } className='btn-control'> <AiOutlineUndo/> </button>
        </div>
      </header>

      <Search onSearch={onSearchCharacter} />
      

      <div className='container-cards-page'>
        {
          ids.map( characterId => (
            <Card key={ characterId } id={ characterId } url={ url + characterId } />  
          ))
        }
      </div>
    </div>
  )
}
