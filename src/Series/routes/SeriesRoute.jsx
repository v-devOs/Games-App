import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PokemonPage } from '../pages/PokemonPage'

export const SeriesRoute = () => {
  return (
    <>
      
      <Routes>
        <Route path='pokemon' element={<PokemonPage />} />
      </Routes>
      
    </>
  )
}
