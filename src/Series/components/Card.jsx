import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { CardItem } from './CardItem';

export const Card = ({ id }) => {
  // const endPoint = `https://pokeapi.co/api/v2/pokemon/`

  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
  const { name, sprites } = !!data && data

  return (

    ( isLoading )
      ? 'Cargando...'
      : <CardItem sprites={sprites} name={name} />
    
  )
}
