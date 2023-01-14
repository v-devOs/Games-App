
export const parseData = ( data, actualPage ) => {
  const { name } = data;

  if( actualPage === 'Pokemon' ){
    return {
      name,
      img: data.sprites.front_default
    }
  }
  else{
    return{
      name,
      img: data.image
    }
  }
  
}
