import React, { useState } from 'react'
import { Card } from '../components/Card'
import {AiOutlineUndo} from 'react-icons/ai'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'

const url = `https://rickandmortyapi.com/api/character/`

export const RickMortyPage = () => {

  const [ charactersIds, setCharactersIds ] = useState(getIds())

  const reloadCharacters = () => {
    setCharactersIds( getIds() )
  }

  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Rick and Morty</h1>

        <div className='page-controls'>
          <button onClick={ () => reloadCharacters() } className='btn-reload'> <AiOutlineUndo/> </button>
        </div>
      </header>

      

      <div className='container-cards-page'>
        {
          charactersIds.map( characterId => (
            <Card key={ characterId } id={ characterId } url={ url + characterId } />  
          ))
        }
      </div>
    </div>
  )
}
