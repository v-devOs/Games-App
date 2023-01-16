
export const randomOrder = ( arrayName = [] ) => {
  
  let indexOcuped = []
  let indexActual = 0
  let randomOrderName = []

  while( indexOcuped.length < arrayName.length ){
    let index = Math.floor( Math.random() * arrayName.length);

    if( !indexOcuped.includes( index ) ){
      randomOrderName[ index ] = arrayName[ indexActual ];
      indexOcuped = [...indexOcuped, index ];
      indexActual++;
    }

  }

  return randomOrderName;

}
