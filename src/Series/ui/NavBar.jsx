import { Link } from "react-router-dom"
import '../styles/styles.css'
import {FaBars} from 'react-icons/fa'


export const NavBar = () => {
  return (
    <div className="header">
      <nav className="nav">

        <Link className="logo nav-link">Nombre Serie</Link>

        <button className="toggle"> <FaBars /></button>

        <ul className="nav-menu">
          <li className="nav-menu-item"><Link to={''}  className="nav-menu-link nav-link">Buscar</Link></li>
          <li className="nav-menu-item"><Link to={''}  className="nav-menu-link nav-link">Jugar</Link></li>
          <li className="nav-menu-item"><Link to={'/'}  className="nav-menu-link nav-link">Inicio</Link></li>
          
          {/* <FontAwesomeIcon icon={'fa-solid fas-bars'}/> */}

          

        </ul>


      </nav>
    </div>
  )
}
