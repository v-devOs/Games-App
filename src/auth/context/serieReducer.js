
export const serieReducer = ( state = {}, action = {}) => {

  switch (action.type) {
    case '[Serie] login':
      return {
        ...state,
        logged: action.payload,
        actualPage: '/'
      }
    
    case '[Serie] logout':
      return {
        ...state,
        logged: false
      }
    case '[Serie] navigate':
      return{
        ...state,
        actualPage: action.payload
      }
    
    case '[Serie] add to game':
      return{
        ...state,
        charactersToGame: [ ...state.charactersToGame, action.payload ]
      }
    
    case '[Serie] remove to game':
      return{
        ...state,
        charactersToGame: state.charactersToGame.filter( character => character !== action.payload )
      }

    
    default:
      return state;
  }
  
}
