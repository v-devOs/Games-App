import React, { useReducer } from 'react'
import { types } from '../types/types'
import { SerieContext } from './SerieContext'
import { serieReducer } from './serieReducer'

const initialState = {
  name: '',
  logged: false,
  actualPage: '/',
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

  return (
    <SerieContext.Provider value={ {state, login, changePage} }>
      { children }
    </SerieContext.Provider>
  )
}
