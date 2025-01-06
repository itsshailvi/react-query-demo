import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from "axios";


const fetchSuperHeroes = ()=> {
    return axios.get("http://localhost:4100/superheroes")
 }

 const fetchfriends = ()=> {
    return axios.get("http://localhost:4100/friends")
 }
const ParallelQueries = () => {
    const {data: superheroes} =useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
  });

  const {data: friends} = useQuery({
    queryKey: ['friends'],
    queryFn: fetchfriends,
  });
  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries