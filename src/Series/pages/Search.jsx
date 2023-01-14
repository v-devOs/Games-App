import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Search = ({ onSearch }) => {

  const { inputSearch, onInputChange, onResetForm } = useForm({
    inputSearch: ''
  })

  const handleSubmitForm = ( event ) => {
    event.preventDefault();
    onSearch( inputSearch );
    onResetForm()
  }

  return (
    <div>
      <form className='form-serach' onSubmit={ handleSubmitForm }>
        <input 
          type="text"
          placeholder='Busca tu personaje para jugar'
          name='inputSearch'
          value={ inputSearch }
          onChange={ (event) => onInputChange({ target: { name: 'inputSearch', value: event.target.value}})}
        />

        <button type='submit' className='btn-search'>Buscar</button>

      </form>
    </div>
  )
}
