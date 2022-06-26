import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/">
                    <p className='p-3 rounded-md bg-teal-600 text-white '>WebExplore</p>
                </Link>
                <button type='button' className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg' onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? 'Light ☀️' : 'Dark 🌙'}
                </button>
            </div>
        </div>
    )
}
