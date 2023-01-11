import React from 'react'
import { Card } from '../components/Card'
import { dataSeries } from '../data/dataSeries'


export const MainPage = () => {


  return (
    <div>
      <header>
        <h1>Bienvenido</h1>
        <h3>Selecciona la Serie de tu interes</h3>
      </header>

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
