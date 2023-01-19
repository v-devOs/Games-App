import React, { useReducer } from 'react'
import { types } from '../types/types'
import { GameContext } from './GameContext'
import { gameReducer } from './gameReducer'

const gameState = {
  namesToGame: [],
  imgToGame: [],
  resolve: 0,
  attemps: 0,
  actualLetter: 0,
  actualCharacter: 0,
  total: 0,
  isPlayGame: true
}

export const GameProvider = ({ children }) => {

  const [state, dispatch] = useReducer(gameReducer, gameState);

  const onAddToGame = ( name, img ) => {
    if( !state.namesToGame.includes(name) && !state.imgToGame.includes(img)){
      const action = { type: types.addToGame, payload: {name, img}}
      dispatch( action )
    }
  }

  const onRemoveToGame = ( name, img ) => {
    const action = { type: types.removeToGame, payload: {name,img}}
    dispatch( action );
  }

  const onCorrectLetter = () => {
    const action = {type: types.correct}
    dispatch( action )
  }

  const onIncorrectLetter = () => {
    const action = { type: types.incorrect}
    dispatch( action )
  }

  const onFinishedGame = () => {
    const action = { type: types.finished }
    dispatch(action)
  }
  return (
    <GameContext.Provider value={{ 
      state, 
      onAddToGame, 
      onRemoveToGame, 
      onCorrectLetter,
      onIncorrectLetter,
      onFinishedGame
    }}>
      { children }
    </GameContext.Provider>
  )
}
