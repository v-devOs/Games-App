import { Link } from "react-router-dom"
import '../styles/styles.css'
import {FaBars} from 'react-icons/fa'
import { useState } from "react"


export const NavBar = ({ name }) => {

  const [ isActive, setIsActive ] = useState(false)
  
  return (
    <div className="header">
      <nav className="nav">

        <Link className="logo nav-link">{ name }</Link>

        <button
          onClick={ () => setIsActive( !isActive ) } 
          className="nav-toggle"> <FaBars /></button>

        <ul className={`nav-menu ${ isActive? 'nav-menu_visible' : ''}`}>
          <li className="nav-menu-item"><Link to={''}  className="nav-menu-link nav-link">Jugar</Link></li>
          <li className="nav-menu-item"><Link to={'/'}  className="nav-menu-link nav-link">Logout</Link></li>
        </ul>

      </nav>
    </div>
  )
}
