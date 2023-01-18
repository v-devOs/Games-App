import { useContext } from "react"
import { SerieContext } from "../../auth/context/SerieContext"

export const CardItem = ({ name, img }) => {

  const { handleAddToGame, handleRemoveToGame } = useContext( SerieContext );

  return (
    <div className='card-page animate__animated animate__zoomIn'>
      <div className='card-header'>
        <img src={ img } alt={name} className='card-header-img' />
      </div>

      <div className='card-content'>
        <div className="card-body-name">
          <h3 className='name-item'>{ name }</h3>
        </div>

        <div className='card-controls'>
          <button onClick={ () => handleAddToGame( name, img )} className='btn-add-game'>Agregar</button>
          <button onClick={ () => handleRemoveToGame( name, img )} className='btn-rm-game'>Remover</button>
        </div>
      </div>
   
    </div>
  )
}
