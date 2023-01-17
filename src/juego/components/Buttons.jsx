import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { randomOrder } from '../helpers'
import { Button } from './Button'

export const Buttons = React.memo(({ arrayName, handleAddLetter }) => {

  const randomOrderName = useMemo(() => randomOrder( arrayName ), [ arrayName])
  const [isCorrect, setIsCorrect] = useState( false )
  const [letter, setLetter] = useState('')
  const [ actualLetter, incrementActualLetter ] = useCounter(0)

  const onSetLetter = ( letter ) => {
    setLetter( ( current ) => current + letter)
  }

  const incrementLetter = () => {
    incrementActualLetter()
  }

  return (

    
    <div className='container-buttons'>

      <div className='container-letter-name'>
        <h3>{ letter }</h3>
      </div>

    {
      randomOrderName.map( (letter) => (
        <Button 
          key={ letter.index } 
          {...letter}  
          onSetLetter={onSetLetter}
          incrementLetter={incrementLetter}
          actualLetter={actualLetter}
        />
      ))
    }

    </div>
  )
})
