import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
import useSuperHeroesData from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

const fetchSuperHeroes = ()=> {
   return axios.get("http://localhost:4100/superheroes")
}
const ReactQuerySuperHeroPage = () => {
    // const onSuccess = (data)=> {
    //     console.log('perform success', data)
    // }
    // const onError = (data)=> {
    //     console.log('perform error', data)
    // }
//hook requires 2 args  one of them s unique key second accept a function that returns a promise
// const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
//     queryKey: ['super-heroes'],
//     queryFn: fetchSuperHeroes,
    // cacheTime:5000,
    // staleTime:30000,
    // refetchOnMount:false,
    // refetchOnWindowFocus:'always'
    // refetchInterval: 2000
    // refetchIntervalInBackground:true
    // enabled: false
    // onSuccess: onSuccess,
    // onError: onError,
    // select: (data) => {
    //     const superheroes = data.data.map((hero)=> hero)
    //     return superheroes
    // }
    
//   });

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData()
  
  console.log({isLoading,isFetching})
  if (isLoading) return <p>Loading...</p>;
  if(isError) return <h2>{error.message}</h2>


  return (
    <>
        <h1>Super Hero Page</h1>
        <button onClick={refetch}>fetch heroes</button>
        <ul>
        {/* {
            data?.data.map((hero) => {
                return <li key = {hero.id}>{hero.name}</li>
            })
        } */}
                {
            data?.data.map((hero) => {
                return <li key = {hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </li>
            })
        }
        {/* {data.map((hero)=> {
            return <li key = {hero.id}>{hero.name}</li>
        })} */}
      </ul>
    </>
    
  )
}

export default ReactQuerySuperHeroPage