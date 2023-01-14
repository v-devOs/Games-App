import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Search } from '../pages'
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
        {/* <Route path='pokemon/search' element = {<Search />}/> */}

        <Route path='/*' element={<Search />} />
      </Routes>
      
    </>
  )
}
