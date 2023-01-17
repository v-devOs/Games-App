import React, { useMemo, useState } from 'react'
import { randomOrder } from '../helpers'

export const Buttons = React.memo(({ arrayName, handleAddLetter }) => {

  const randomOrderName = useMemo(() => randomOrder( arrayName ), [ arrayName])
  const [isCorrect, setIsCorrect] = useState( false )

  const onClickButton = ( letter, index ) => {
    setIsCorrect( handleAddLetter( letter, index ) );
  }
  return (
    <div className='container-buttons'>

    {
      randomOrderName.map( ({letter, index }) => (
        <button
          className={`btn btn-letter ${ isCorrect? 'disable' : 'visible' }`}
          onClick={ () => onClickButton( letter, index)} 
          key={index}>
            {letter} 
        </button>
      ))
    }

    </div>
  )
})
