import { Link, Route, Routes } from "react-router-dom"
import { SeriesRoute } from "../../Series/routes/SeriesRoute"
import { MainPage } from "../pages/MainPage"

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="/*" element={ <SeriesRoute /> }/>

      </Routes>

      

    </>
  )
}
