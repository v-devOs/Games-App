import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { SerieContext } from "../context/SerieContext";

export const Login = () => {

  const { login } = useContext( SerieContext )
  const navigate = useNavigate();

  const onLogin = () => {
    login()

    navigate('series',{
      replace: true
    })
    
  }

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <button onClick={ onLogin }>Iniciar</button>

    </>
  )
}
