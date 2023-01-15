import React from 'react'

export const ResetGame = ({ name, reset }) => {
  return (
    <div className='container-message-lose'>
      <p className='message-lose'>Perdiste :(</p>
      <p>El nombre era {name}</p>
      
      <div className='container-btn'>
        <button id='btn-reset' onClick={reset}>Volver a jugar</button>
      </div>
    </div>
  )
}
