
export const parseName = ( name = '') => {
  const arrayName = name.split('');

  return arrayName.map( (letter, index) => ({letter, index}),)
}
