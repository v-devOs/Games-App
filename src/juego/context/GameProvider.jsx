import React, { useReducer } from 'react'
import { GameContext } from './GameContext'
import { gameReducer } from './gameReducer'

const gameState = {
  charactersToGame: [],
  imgCharacters: [],
  resolve: 0,
  attemps: 0,
  actualLetter: 0,
  actualCharacter: 0,
  total: 0
}

export const GameProvider = ({ children }) => {

  const [state, dispatch] = useReducer(gameReducer, gameState);

  const add = ( name ) => {
    const action = { type: '[Game] add to game', payload: name}
    dispatch( action )
  }
  return (
    <GameContext.Provider value={{ state, add}}>

      { children }
    </GameContext.Provider>
  )
}
