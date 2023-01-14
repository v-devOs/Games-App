
export const CardItem = ({ sprites, name}) => {
  return (
    <div className='card-page'>
      <div className='card-header'>
        <img src={ sprites.front_default } alt={name} className='card-header-img' />
      </div>

      <div className='card-content'>
        <div className="card-body-name">
          <h3 className='name-item'>{ name }</h3>
        </div>

        <div className='card-controls'>
          <button className='btn-add-game'>Agregar</button>
          <button className='btn-rm-game'>Remover</button>
        </div>
      </div>
   
    </div>
  )
}
