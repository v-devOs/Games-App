import React, { useCallback, useContext, useState } from 'react'
import { InformationGame } from '../components/InformatioGame'
import { SerieContext } from '../../auth/context/SerieContext';
import { useCounter } from '../../hooks/useCounter';


import '../styles/styles.css'

export const GamePage = () => {

  const [letter, setLetter] = useState('')

  const { state } = useContext( SerieContext );
  const { charactersToGame } = state;
  const [ resolve, increment ] = useCounter(0)
  const [ actualLetter, incrementActualLetter ] = useCounter(0)

  

  const handleAddLetter = ( letter, index ) => {

    if( actualLetter === index ){
      incrementActualLetter()
      setLetter( (current) => current + letter)
      
      return true
    }

    return false
  }
  
  
  return (
    <div className='container-game'>
      <div className='container-aux'>
        <header>
          <h1 id='title-game information-game'>Quiz de personajes</h1>
          <h2>Has resuelto: { resolve } de { charactersToGame.length }</h2>
        </header>

      
      <div className='conatiner-letters-name'>
        <h3>{ letter }</h3>
      </div>


        {/* {
          (charactersToGame.length < 5)
            ? <Message />
            : <InformationCharacter charactersToGame={charactersToGame}/>
        } */}

        <InformationGame charactersToGame={ charactersToGame } handleAddLetter={ handleAddLetter }/>

       
        
      </div>
  </div>
  )
}
