
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
    
    case '[Game] add to game':
      return{
        ...state,
        gameState:{
          charactersToGame: [ ...state.gameState.charactersToGame, action.payload.name ],
          imgCharacters: [ ...state.gameState.imgCharacters, action.payload.img ]
        }
      }
    
    case '[Game] remove to game':
      return{
        ...state,
        gameState: {
          charactersToGame: state.gameState.charactersToGame.filter( (name) => name !== action.payload.name ),
          imgCharacters: state.gameState.imgCharacters.filter( (img) => img !== action.payload.img )
        }
      }

    
    default:
      return state;
  }
  
}
