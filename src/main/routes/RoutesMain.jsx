import {  Route, Routes } from "react-router-dom"
import {  SeriesPage } from "../../Series/pages"
import { MainPage } from "../pages/MainPage"

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="serie" element={<SeriesPage /> }/>

      </Routes>

      

    </>
  )
}
