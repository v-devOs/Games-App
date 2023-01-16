import React, { useContext } from 'react'
import { SerieContext } from '../../auth/context/SerieContext'
import { useCounter } from '../../hooks/useCounter'
import { Buttons } from '../components/Buttons'
import { InformationCharacter } from '../components/InformationCharacter'
// import { Message } from '../components/Message'
import { parseName } from '../helpers/parseName'
import '../styles/styles.css'

export const GamePage = () => {

  const { state } = useContext( SerieContext );
  const { actualPage,  charactersToGame} = state;

  const [ resolve, increment ] = useCounter(0)
  const [ attemps, incrementAttemps ] = useCounter(0)
  const [ actualLetter, incrementActualLetter ] = useCounter(0)
  const [ actualCharacter, incrementActualCharacter] = useCounter(1)

  const arrayName = parseName( charactersToGame[actualCharacter].name );

  return (
    <div className='container-game'>
      <div className='container-aux'>
        <header>
          <h1 id='title-game information-game'>Quiz de personajes</h1>
          <h2>Has resuelto: { resolve } de { charactersToGame.length }</h2>
        </header>


        {/* {
          (charactersToGame.length < 5)
            ? <Message />
            : <InformationCharacter charactersToGame={charactersToGame}/>
        } */}

        <InformationCharacter charactersToGame={charactersToGame} actualCharacter={actualCharacter}/>
        <Buttons arrayName={arrayName} />

        <div>
          <h3>Llevas: {attemps} intentos</h3>
        </div>
        
      </div>
  </div>
  )
}
