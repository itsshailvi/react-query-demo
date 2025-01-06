import React from 'react'
import {useParams} from 'react-router-dom'
import useSuperHeroData from '../hooks/useSuperHeroData'


const RQSuperHero = () => {
    const {heroId} = useParams()
    const {isLoading, data, isError, error} = useSuperHeroData(heroId)
    if (isLoading) return <p>Loading...</p>;
    if(isError) return <h2>{error.message}</h2>
  return <div>{data?.data.name} - {data?.data.alterego}</div>
  
}

export default RQSuperHero