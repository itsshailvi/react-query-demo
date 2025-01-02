import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from "axios";

const fetchSuperHeroes = ()=> {
   return axios.get("http://localhost:4100/superheroes")
}
const ReactQuerySuperHeroPage = () => {
//hook requires 2 args  one of them s unique key second accept a function that returns a promise
const { isLoading, data } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
  });
  
  if (isLoading) return <p>Loading...</p>;


  return (
    <>
        <h1>Super Hero Page</h1>
        <ul>
        {
            data?.data.map((hero) => {
                return <li key = {hero.id}>{hero.name}</li>
            })
        }
      </ul>
    </>
    
  )
}

export default ReactQuerySuperHeroPage