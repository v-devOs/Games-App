import React from 'react'
import { Routes } from 'react-router-dom'
import { SerieProvider } from './auth/context'
import { GameProvider } from './juego/context/GameProvider'
import { InitialRouter } from './router/InitialRouter'


export const AppGames = () => {
  return (

    <>
      <SerieProvider >
        <GameProvider>
          <InitialRouter />
        </GameProvider>
      </SerieProvider>
    </>
  )
}
