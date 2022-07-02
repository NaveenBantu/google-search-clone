import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /search , /videos ....
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '17ebee8472msh09fa87f9c279d59p19a7d9jsn965fd64fbe35',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, isLoading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);