import {  Navigate, Route, Routes } from "react-router-dom"
import { GameProvider } from "../../juego/context/GameProvider"
import { GamePage } from "../../juego/pages/GamePage"
import {  SeriesPage } from "../../Series/pages"
import { MainPage } from "../pages/MainPage"

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="serie" element=
          { 
            <GameProvider>
              <SeriesPage /> 

            </GameProvider>
          
          }
          
        />

        <Route path="serie/juego" element={<GamePage />}/>

        <Route path="/*" element={<Navigate to={'series' }/>} />
      </Routes>

      

    </>
  )
}
