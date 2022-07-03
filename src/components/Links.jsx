import React from 'react'
import { NavLink } from 'react-router-dom';

const linkArr = [
    { url: '/search', text: 'All' },
    { url: '/image', text: 'Images' },
    { url: '/news', text: 'News' },
    { url: '/video', text: 'Videos' }
]

export const Links = () => {
    return (
        <div className='m-4'>
            {linkArr.map(({ url, text }) => (
                <NavLink to={url} className="m-2" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700">
                    {text}
                </NavLink>
            ))}
        </div>
    )
}
