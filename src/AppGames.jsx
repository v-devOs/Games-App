import React from 'react'
import { Routes } from 'react-router-dom'
import { SerieProvider } from './auth/context'
import { InitialRouter } from './router/InitialRouter'


export const AppGames = () => {
  return (

    <>
      <SerieProvider >
        <InitialRouter />

      </SerieProvider>
    </>
  )
}
