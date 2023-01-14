import React, { useState } from 'react'
import { Card } from '../components/Card'
import {AiOutlineUndo, AiOutlineArrowLeft} from 'react-icons/ai'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import { useNavigate } from 'react-router-dom'

const url = `https://rickandmortyapi.com/api/character/`

export const RickMortyPage = () => {

  const [ charactersIds, setCharactersIds ] = useState(getIds())
  const navigate = useNavigate()

  const reloadCharacters = () => {
    setCharactersIds( getIds() )
  }

  return (
    <div className='container-page'>
      <header className='espacing header-page'>
        <h1 className="title-page">Bienvenido a la pagina Rick and Morty</h1>

        <div className='page-controls'>
          <button onClick={ () => navigate(-1)} className='btn-control'> <AiOutlineArrowLeft/> </button>
          <button onClick={ () => reloadCharacters() } className='btn-control'> <AiOutlineUndo/> </button>
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
