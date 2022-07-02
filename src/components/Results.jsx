import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading';

export const Results = () => {
    const { getResults, results, isLoading, searchTerm, setSearchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        getResults('/search/q=Javascript&num=20')
    }, []);

    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {results?.results?.map(({ link, title }, index) => {
                        return (<div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel='noreferrer'>
                                <p className='text-sm'>
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                            </a>
                        </div>)
                    })}
                </div>
            )
        case '/news':
            return "NEWS"
        case '/images':
            return "IMAGES"
        case '/videos':
            return "VIDEOS"

        default:
            return 'ERROR';
    }
    return (
        <div>Results</div>
    )
}
