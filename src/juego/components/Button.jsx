import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { randomOrder } from '../helpers'

export const Button = ({ letter, index, onSetLetter, incrementLetter, actualLetter }) => {

  const [isCorrect, setIsCorrect] = useState(false)

  const onClickButton = ( letter, index ) => {
    if( actualLetter === index){
      onSetLetter( letter )
      setIsCorrect( !isCorrect )
      incrementLetter()
    }
  }
  return (
    <button
      className={`btn btn-letter ${ isCorrect? 'disable': 'visible' }`}
      onClick={ () => onClickButton( letter, index )}
    >
      { letter }
    </button>
  )
}
