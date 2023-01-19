
export const gameReducer = ( state = {}, action ) => {

  switch (action.type) {
    case '[Game] add to game':
      return{
        ...state,
        namesToGame: [ ...state.namesToGame, action.payload.name],
        imgToGame: [...state.imgToGame, action.payload.img],
        total: state.total + 1
      }

    case '[Game] remove to game':
      return{
        ...state,
        namesToGame: state.namesToGame.filter( name => name !== action.payload.name),
        imgToGame: state.imgToGame.filter( img => img !== action.payload.img),
        total: state.total - 1
      }
  
    default:
      return state
  }
}
