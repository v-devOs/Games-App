export const getIds = () => {

  let ids = []

  while( ids.length < 21){
    let id = Math.floor( Math.random() * 800 );

    if( !ids.includes( id ) ){
      ids.push(id)
    }
  }

  return ids;
}