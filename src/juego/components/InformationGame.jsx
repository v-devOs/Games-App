import React, { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { GameContext } from '../context/GameContext';
import { parseName } from '../helpers';
import { Buttons } from './Buttons'



export const InformationGame = React.memo( () => {

  const { state } = useContext( GameContext );
  const { namesToGame, imgToGame, actualCharacter} = state;

  // const [ attemps, incrementAttemps ] = useCounter(0)
  // const [ actualCharacter, incrementActualCharacter] = useCounter(0)

  const arrayName = parseName( namesToGame[ actualCharacter ] );

  return (
    <div className='container-info-game'>
      <div className="container-image-pokemon">
        <img src={imgToGame[actualCharacter]} alt={''} />
      </div>

      {
        <Buttons 
          arrayName={arrayName} 
        />
      }
    </div>
  )
})
