
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
    
    case '[Game] letter correct':
      return{
        ...state,
        actualLetter: state.actualLetter + 1,
      }
    case '[Game] letter incorrect':
      return{
        ...state,
        attemps: state.attemps + 1
      }
    
    case '[Game] finished game':
      return{
        ...state,
        isPlayGame: action.payload
      }
    case '[Game] finished name':
      return{
        ...state,
        resolve: state.resolve + 1,
        attemps: 0,
        actualLetter: 0,
        actualCharacter: state.actualCharacter + 1
      }
  
    default:
      return state
  }
}
