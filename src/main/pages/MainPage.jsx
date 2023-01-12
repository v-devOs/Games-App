import React from 'react'
import { Card } from '../components/Card'
import { dataSeries } from '../data/dataSeries'
import '../styles/styles.css'


export const MainPage = () => {


  return (
    <div className='container-main'>
    
      <div className='container container-titles'>
        
        <header className='container-headers'>
          <h1 className='title big-title'>Bienvenido</h1>
          <h3 className='second-title'>Selecciona la serie de tu interes</h3>
        </header>
              
      </div>

      <div className="container container-series">

      {
        dataSeries.map( (serie) => (
          <Card key={serie.name} serie={serie} />
        ))
      }

      </div>
    </div>
  )
}
