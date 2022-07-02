import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading';

export const Results = () => {
    const { getResults, results, isLoading, searchTerm, setSearchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        getResults(`${location.pathname}/q=${searchTerm}&num=20`)
    }, [searchTerm, location.pathname]);

    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {results?.map(({ link, title }, index) => {
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
        case '/image':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        results?.map(({ image, link: { href, title } }, index) => (
                            <a href={href} key={index} className='sm:p-3 p-5' target="_blank" rel='noreferrer'>
                                <img src={image?.src} alt={title} loading='lazy' />
                                <p className='w-36 break-words text-sm mt-2'>{title}</p>
                            </a>
                        )
                        )
                    }
                </div>
            )

        case '/news':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {console.log(results)}
                    {
                        results?.map(function ({ links, id, source, title }) {
                            return (
                                <div key={id} className="md:w-2/5 w-full">
                                    <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline'>
                                        <p className='text-lg dark:text-blue-300 text-blue-700'>
                                            {title}
                                        </p>
                                    </a>
                                    <div>
                                        <a href={source?.href} target='_blank' rel='noreferrer'>
                                            {source?.href}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )

        case '/video':
            return (
                <div className='flex flex-wrap'>
                    {results.map((video, index) => (
                        <div key={index} className="p-2">
                            <ReactPlayer url={video.additional_links?.[0].href} controls width="350px" height="200px" />
                        </div>
                    ))}
                </div>
            )

        default:
            return 'ERROR';
    }
    return (
        <div>Results</div>
    )
}
