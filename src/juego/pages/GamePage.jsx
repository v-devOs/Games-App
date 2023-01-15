import React from 'react'
import { Score } from '../components/Score'
import '../styles/styles.css'

export const GamePage = () => {
  return (
    <div className='container-game'>
      <div className='container-aux'>
        <header>
          <h1 id='title-game'>Pokemon Quiz</h1>
        </header>

        {/* <Score counter={counter} increase={incrementScore}/> */}

        <div className='container-info-game'>
          <div className="container-image-pokemon">
           
          </div>

          <div className="container-controls">
            
          </div>
          
        </div>
      </div>
  </div>
  )
}
