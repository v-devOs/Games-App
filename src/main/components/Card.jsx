import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import { SerieContext } from '../../auth/context/SerieContext'

import '../styles/styles.css'

export const Card = ({ serie }) => {

  const { changePage } = useContext( SerieContext )

  return (
    <Link 
      onClick={() => changePage( serie.linkSerie ) }
      to={`${serie.linkSerie}`} 
      className='card animate__animated animate__bounceInUp' >
        <div className='card-serie'>

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
  </Link>
      

  )
}
