import React from 'react';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = async (heroId) => {
    return axios.get(`http://localhost:4100/superheroes/${heroId}`);
};

export const DynamicParallel = ({ heroIds }) => {
    const validHeroIds = Array.isArray(heroIds) ? heroIds : [];
    console.log('Valid Hero IDs:', validHeroIds);

    const heroQueries = useQueries({
        queries: validHeroIds.map((id) => ({
            queryKey: ['super-hero', id],
            queryFn: () => fetchSuperHeroes(id),
        })),
    });

    console.log('Hero Queries:', heroQueries);

    return (
        <div>
            {heroQueries.map((query, index) => (
                <div key={index}>
                    {query.isLoading ? (
                        <p>Loading hero {validHeroIds[index]}...</p>
                    ) : query.isError ? (
                        <p>Error fetching hero {validHeroIds[index]}</p>
                    ) : (
                        <p>{JSON.stringify(query.data?.data)}</p>
                    )}
                </div>
            ))}
        </div>
    );
};
