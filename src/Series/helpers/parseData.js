
export const parseData = ( data, actualPage, isSingle ) => {
  
  return ( !isSingle )
          ? parseSome( data, actualPage )
          : parseSingle( data, actualPage )
}

const parseSome = ( data, actualPage ) => {
  const { name } = data;

  return ( actualPage === 'Pokemon' )
          ? { name, img: data.sprites.front_default }
          : { name: name.toLowerCase(), img: data.image}
}

const parseSingle = ( data, actualPage ) => {

  if( actualPage === 'Pokemon' ){
    return parseSome( data, actualPage )
  }
  else{
    const { results } = data;
    const { name, image } = results[0]
    return parseSome( { name: name.toLowerCase(), image}, actualPage )
  }
}
