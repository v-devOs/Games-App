import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PokemonPage } from '../pages/PokemonPage'
import { RickMortyPage } from '../pages/RickMortyPage'
import { NavBar } from '../ui/NavBar'

export const SeriesRoute = () => {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path='pokemon' element={<PokemonPage />} />
        <Route path='rick' element={<RickMortyPage/>}/>

        <Route path='/*' element={<Navigate to={'pokemon'} />} />
      </Routes>
      
    </>
  )
}
