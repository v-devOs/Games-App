import React, { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { parseName } from '../helpers';
import { Buttons } from './Buttons'



export const InformationGame = React.memo(({ charactersToGame }) => {

  const [ attemps, incrementAttemps ] = useCounter(0)
  const [ actualCharacter, incrementActualCharacter] = useCounter(0)

  const arrayName = parseName( charactersToGame[actualCharacter].name );

  return (
    <div className='container-info-game'>
      <div className="container-image-pokemon">
        <img src={ charactersToGame[actualCharacter].img} alt={charactersToGame[actualCharacter].name } />
      </div>

      {
        <Buttons 
          arrayName={arrayName} 
        />
      }
    </div>
  )
})
