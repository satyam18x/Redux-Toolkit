import React from 'react'
import Search from './components/Search'
import Tabs from './components/Tabs'
const App = () => {
    return (
        <div className="min-h-screen w-full bg-gray-950 flex flex-col items-center py-8 ">
            <div className="w-full max-w-4xl  backdrop-blur-2xl  border-white/10 p-8 shadow-2xl">
                <h1 className="text-4xl font-black text-white text-center mb-8 tracking-tighter">Media <span className="text-gray-500 font-light">Search</span></h1>
                <Search />
                <Tabs />
            </div>
        </div>
    )
}

export default App