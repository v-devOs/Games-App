import React, { useContext } from 'react'
import { InformationGame } from '../components/InformationGame'



import '../styles/styles.css'
import { GameContext } from '../context/GameContext';

export const GamePage = () => {

  const { state } = useContext( GameContext );
  const { resolve, attemps, total } = state;

    
  return (
    <div className='container-game'>
      <div className='container-aux'>
        <header>
          <h1 id='title-game information-game'>Quiz de personajes</h1>
          <h2>Has resuelto: { resolve } de { total }</h2>
        </header>

        {/* {
          (charactersToGame.length < 5)
            ? <Message />
            : <InformationCharacter charactersToGame={charactersToGame}/>
        } */}

        <InformationGame />

        <div className='container-attemps'>
          <h2> Llevas { attemps } intentos </h2>
        </div>
 
      </div>
  </div>
  )
}
