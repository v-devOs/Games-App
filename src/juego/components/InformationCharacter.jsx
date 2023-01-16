import React from 'react'
import { Buttons } from './Buttons'

export const InformationCharacter = ({ charactersToGame, actualCharacter }) => {
  return (
    <div className='container-info-game'>
      <div className="container-image-pokemon">
        <img src={ charactersToGame[actualCharacter].img} alt={charactersToGame[actualCharacter].name } />
      </div>
   
    </div>
  )
}
