import React from 'react'
import { randomOrder } from '../helpers'

export const Buttons = ({ arrayName }) => {

  const randomOrderName = randomOrder( arrayName );

  return (
    <div className='container-buttons'>

    {
      randomOrderName.map( ({letter, index }) => (
        <button key={index} >{letter}</button>
      ))
    }

    </div>
  )
}
