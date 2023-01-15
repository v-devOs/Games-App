import React from 'react'
import { useForm } from '../../hooks/useForm'
import '../styles/stylesPages.css'

export const Search = ({ onSearch }) => {

  const { inputSearch, onInputChange, onResetForm } = useForm({
    inputSearch: ''
  })

  const handleSubmitForm = ( event ) => {
    event.preventDefault();
    if( inputSearch.legth <= 3) return
    onSearch( inputSearch );
    onResetForm()
  }

  return (
    <div>
      <form className='form-search' onSubmit={ handleSubmitForm }>
        <input 
          type="text"
          placeholder='Busca tu personaje...'
          name='inputSearch'
          value={ inputSearch }
          onChange={ (event) => onInputChange({ target: { name: 'inputSearch', value: event.target.value}})}
          className='input-search'
        />

      </form>
    </div>
  )
}
