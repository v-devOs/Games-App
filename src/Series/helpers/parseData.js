
export const parseData = ( data, actualPage, isSingle ) => {
  return ( !isSingle )
          ? parseSome( data, actualPage )
          : parseSingle( data, actualPage )

  // const { name } = data;

  // if( actualPage === 'Pokemon' ){
  //   return {
  //     name,
  //     img: data.sprites.front_default
  //   }
  // }
  // else{
  //   return{
  //     name,
  //     img: data.image
  //   }
  // }
  
}

const parseSome = ( data, actualPage ) => {
  const { name } = data;

  return ( actualPage === 'Pokemon' )
          ? { name, img: data.sprites.front_default }
          : { name, img: data.image}
}

const parseSingle = ( data, actualPage ) => {

  if( actualPage === 'Pokemon' ){
    return parseSome( data, actualPage )
  }
  else{
    const { results } = data;
    const { name, image } = results[0]

    return parseSome( { name, image}, actualPage )
  }
}
