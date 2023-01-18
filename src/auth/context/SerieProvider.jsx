import React, { useReducer } from 'react'
import { types } from '../types/types'
import { SerieContext } from './SerieContext'
import { serieReducer } from './serieReducer'

const initialState = {
  name: '',
  logged: false,
  actualPage: '/',

  gameState: {
    charactersToGame: [],
    imgCharacters: [],
    resolve: 0,
    attemps: 0,
    actualLetter: 0,
    actualCharacter: 0,
    total: 0
  }
  
  
}

export const SerieProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(serieReducer, initialState )

  const login = () => {
    const action = { type: types.login, payload: true }
    dispatch(action)
  }

  const changePage = ( dataSerie ) => {
    const action = { type: types.navigate, payload: dataSerie}
    dispatch( action )
  }

  const handleAddToGame = ( name, img ) => {
    const { gameState } = state;


    if( !gameState.charactersToGame.includes( name ) && !gameState.imgCharacters.includes( img ) ){
      const action = { type: types.addToGame, payload: {name, img} }
      dispatch( action )
    } 
  }

  const handleRemoveToGame = ( name, img ) => {
    const action = { type: types.removeToGame, payload: {name,img} }
    dispatch( action )
  }
  

  return (
    <SerieContext.Provider value={ {state, login, changePage, handleAddToGame, handleRemoveToGame} }>
      { children }
    </SerieContext.Provider>
  )
}
