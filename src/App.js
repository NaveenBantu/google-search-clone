import React, { useState } from 'react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Routes } from './components/Routes'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='bg-slate-100 dark:bg-slate-800 dark:text-gray-200 min-h-screen'>
                <h1 className='text-3xl font-bold text-teal-700'>
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    <Routes />
                    <Footer />
                </h1>
            </div>
        </div>
    )
}

export default App