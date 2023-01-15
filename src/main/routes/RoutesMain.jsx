import {  Navigate, Route, Routes } from "react-router-dom"
import {  SeriesPage } from "../../Series/pages"
import { MainPage } from "../pages/MainPage"

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="serie" element={<SeriesPage /> }/>

        <Route path="serie/juego" element={<><h1>Juegos</h1></>}/>

        <Route path="/*" element={<Navigate to={'series' }/>} />
      </Routes>

      

    </>
  )
}
