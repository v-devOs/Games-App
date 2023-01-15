import React,{ useContext, useState } from 'react'
import { SerieContext } from '../../auth/context/SerieContext'
import { Card } from '../components'
import { getIds } from '../helpers/getIds'
import '../styles/stylesPages.css'
import { NavBar } from '../ui/NavBar'
import { HeaderPage } from '../components/HeaderPage'

export const SeriesPage = () => {

  const { state } = useContext(SerieContext);
  const { actualPage } = state;
  const { name, endPoints } = actualPage;

  const [ charactersIds, setCharactersIds ] = useState({
    ids: getIds(),
    isSingle: false,
    url: endPoints.someCharacters
  })

 
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

        <HeaderPage 
          name={name}
          onReloadPokemons={onReloadPokemons}
          onSearchPokemon={onSearchPokemon}
        />

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
