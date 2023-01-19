import React, { useContext, useMemo, useState } from 'react'
import { GameContext } from '../context/GameContext'
import { randomOrder } from '../helpers'
import { Button } from './Button'

export const Buttons = React.memo(({ arrayName }) => {

  const randomOrderName = useMemo(() => randomOrder( arrayName ), [ arrayName])
  const [letter, setLetter] = useState('')

  const onSetLetter = ( letter ) => {
    setLetter( ( current ) => current + letter)
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
        />
      ))
    }

    </div>
  )
})
