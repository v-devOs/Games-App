import React from 'react'
import '../styles/styles.css'

export const Card = ({ serie }) => {
  return (
    <div className='card card-serie'>

      <div className='card-title'>
        <h2>{ serie.name }</h2>
      </div>


      <div className="card-body">

        <div className='card-img'>
          <img src={serie.img} alt={serie.name} className='img-serie' />
        </div>

        <div className="card-description">
          <p className='description'>{serie.description}</p>
        </div>
      </div>

      
     
    </div>
  )
}
