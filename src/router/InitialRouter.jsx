import { Route, Routes } from "react-router-dom"
import { Login } from "../auth"
import { RoutesMain } from "../main/routes/RoutesMain"

export const InitialRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="series/*" element={<RoutesMain />}/>



      </Routes>
    </>
  )
}
