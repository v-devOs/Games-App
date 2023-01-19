import React, { useContext } from 'react'
import { InformationGame } from '../components/InformationGame'



import '../styles/styles.css'
import { GameContext } from '../context/GameContext';

export const GamePage = () => {

  const { state } = useContext( GameContext );
  const { resolve, attemps, total, isPlayGame } = state;

    
  return (
    <div className='container-game'>
      <div className='container-aux'>
        <header>
          <h1 id='title-game information-game'>Quiz de personajes</h1>
          <h2>Has resuelto: { resolve } de { total }</h2>
        </header>

        {
          (isPlayGame)
            ?<InformationGame />
            : <h2>Perdiste</h2>

        }

        
        <div className='container-attemps'>
          <h2> Llevas { attemps } intentos </h2>
        </div>
 
      </div>
  </div>
  )
}
