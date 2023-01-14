import React, { useReducer } from 'react'
import { types } from '../types/types'
import { SerieContext } from './SerieContext'
import { serieReducer } from './serieReducer'

const initialState = {
  logged: false,
  actualPage: '/',
  charactersToGame: []
}

export const SerieProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(serieReducer, initialState )

  const login = () => {
    const action = { type: types.login, payload: true }
    dispatch(action)
  }

  const changePage = ( linkSerie ) => {
    const action = { type: types.navigate, payload: linkSerie}
    dispatch( action )
  }

  const handleAddToGame = ( character ) => {
    if( !state.charactersToGame.includes( character ) ){
      const action = { type: types.addToGame, payload: character }
      dispatch( action )
    } 
  }

  const handleRemoveToGame = ( character ) => {
    const action = { type: types.removeToGame, payload: character }
    dispatch( action )
  }
  

  return (
    <SerieContext.Provider value={ {state, login, changePage, handleAddToGame, handleRemoveToGame} }>
      { children }
    </SerieContext.Provider>
  )
}
