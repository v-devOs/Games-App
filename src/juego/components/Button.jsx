import React, { useContext, useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { GameContext } from '../context/GameContext'
import { getName } from '../helpers/getName'

export const Button = React.memo(({ letter, onSetLetter }) => {
  
  const { state, onCorrectLetter, onIncorrectLetter, onFinishedGame } = useContext( GameContext );
  const { attemps ,actualLetter, namesToGame, actualCharacter } = state;
  const [isCorrect, setIsCorrect] = useState(false)
  
  const arrayName = getName( namesToGame[actualCharacter] );

  const onClickButton = ( letter ) => {
    
    if( letter === arrayName[actualLetter] && attemps < 5){
      onCorrectLetter()
      onSetLetter( letter )
      setIsCorrect( true )

     
    }
    else if( letter !== arrayName[actualLetter] && attemps < 5){
      onIncorrectLetter()
    }
    else{
      onFinishedGame()
    }
  }
  return (
    <>
      <button
        className={`btn btn-letter ${ isCorrect? 'disable': 'visible' }`}
        onClick={ () => onClickButton( letter )}
      >
        { letter }
      </button>

    </>


  )
})
