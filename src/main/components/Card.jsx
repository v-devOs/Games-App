import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import { SerieContext } from '../../auth/context/SerieContext'

import '../styles/styles.css'

export const Card = ({ serie }) => {

  const { changePage } = useContext( SerieContext )

  return (
    <Link 
      onClick={() => changePage( serie ) }
      to={'serie'} 
      className='card animate__animated animate__bounceInUp' >

        <div className='card-serie'>

          <div className="card-body">
            <div className='card-img'>
              <img src={serie.img} alt={serie.name} className='img-serie' />
            </div>
          </div>

          <div className='card-title'>
            <h2>{ serie.name }</h2>
          </div>

        </div>
        
  </Link>
      

  )
}
