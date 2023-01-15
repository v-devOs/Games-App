import React from 'react'
import { dataSeries } from '../../data/dataSeries'
import { Card } from '../components/Card'
import '../styles/styles.css'


export const MainPage = () => {


  return (

    <div className='container-main'>
    
      <div className='container-titles animate__animated animate__bounceInDown'>

        <header className='container-headers header-series'>
          <h1 className='title big-title'>Bienvenido</h1>
          <h3 className='title second-title'>Selecciona la serie de tu interes</h3>
        </header>
              
      </div>

      <div className="container-series">

      {
        dataSeries.map( (serie) => (
          <Card key={serie.name} serie={serie} />
        ))
      }

      </div>
    </div>
  )
}
