import React, { useContext } from 'react'
import { SerieContext } from '../../auth/context/SerieContext';
import { useFetch } from '../../hooks/useFetch';
import { parseData } from '../helpers/parseData';
import { CardItem } from './CardItem';


export const Card = ({ url }) => {

  const { state } = useContext( SerieContext )

  const { data, isLoading } = useFetch( url )

  const item = !!data && parseData( data, state.actualPage )


  return (

    ( isLoading )
      ? 'Cargando...'
      : <CardItem {...item} />
    
  )
}
