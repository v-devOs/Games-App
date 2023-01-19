import React, { useContext, useMemo, useState } from 'react'
import { GameContext } from '../context/GameContext'
import { randomOrder } from '../helpers'
import { Button } from './Button'

export const Buttons = React.memo(({ arrayName }) => {

  const randomOrderName = useMemo(() => randomOrder( arrayName ), [ arrayName])
  const [letters, setLetters] = useState('')

  const onSetLetters = ( letter ) => {
    setLetters( ( current ) => current + letter)
  }

  const onResetLetters = () => {
    setLetters('')
  }

  return (

    
    <div className='container-buttons'>

      <div className='container-letter-name'>
        <h3>{ letters }</h3>
      </div>

    {
      randomOrderName.map( (letter) => (
        <Button 
          key={ letter.index } 
          {...letter}  
          onSetLetter={onSetLetters}
          onResetLetters={onResetLetters}
        />
      ))
    }

    </div>
  )
})
