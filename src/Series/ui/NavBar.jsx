import { Link } from "react-router-dom"
import '../styles/styles.css'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import { SerieContext} from "../../auth/context"


export const NavBar = () => {

  const [ isActive, setIsActive ] = useState(false)
  const { state } = useContext( SerieContext )
  const {actualPage} = state
  

  return (
    <div className="header">
      <nav className="nav">

        <Link className="logo nav-link">{actualPage}</Link>

        <button
          onClick={ () => setIsActive( !isActive ) } 
          className="nav-toggle"> <FaBars /></button>

        <ul className={`nav-menu ${ isActive? 'nav-menu_visible' : ''  }`}>
          <li className="nav-menu-item"><Link to={''}  className="nav-menu-link nav-link">Buscar</Link></li>
          <li className="nav-menu-item"><Link to={''}  className="nav-menu-link nav-link">Jugar</Link></li>
          <li className="nav-menu-item"><Link to={'/'}  className="nav-menu-link nav-link">Logout</Link></li>
        </ul>

      </nav>
    </div>
  )
}
