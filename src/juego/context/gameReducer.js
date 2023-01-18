
export const gameReducer = ( state = {}, action ) => {

  switch (action.type) {
    case '[Game] add to game':
      return{
        ...state,
        charactersToGame: [ ...state.charactersToGame, action.payload]
      }
  
    default:
      return state
  }
}
