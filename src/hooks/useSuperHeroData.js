import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from "axios";

const fetchSuperHeroes = ({queryKey})=> {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4100/superheroes/${heroId}`)
 }
const useSuperHeroData = (heroId) => {
    return useQuery({
        queryKey: ['super-hero', heroId],
        queryFn: fetchSuperHeroes,
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
        
      });

}

export default useSuperHeroData