import React, { useReducer } from 'react'
import { types } from '../types/types'
import { SerieContext } from './SerieContext'
import { serieReducer } from './serieReducer'

const initialState = {
  logged: false,
  actualPage: '/',
}

export const SerieProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(serieReducer, initialState )

  const login = () => {
    const action = { type: types.login, payload: true }
    dispatch(action)
  }

  const changePage = ( linkSerie ) => {
    const action = { type: types.navigate, payload: linkSerie}

    console.log(linkSerie);
    dispatch( action )
  }
  

  return (
    <SerieContext.Provider value={ {state, login, changePage} }>
      { children }
    </SerieContext.Provider>
  )
}
