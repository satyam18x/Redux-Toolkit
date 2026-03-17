import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../REDUX/features/searchSlice'

const Search = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(setQuery(text))
        }
    }

    return (
        <div className='w-full px-6 py-8'>
            <form onSubmit={submitHandler} className='max-w-3xl mx-auto relative group'>
                <div className='absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-gray-400 group-focus-within:text-black transition-colors' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                </div>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    className='w-full bg-gray-50 border-none pl-14 pr-32 py-5 text-lg rounded-2xl outline-none ring-2 ring-transparent focus:ring-black/5 focus:bg-white focus:shadow-2xl transition-all duration-300'
                    type="text"
                    placeholder='Search for high-resolution images and videos...' 
                />
                <button 
                    
                    type='submit'
                    className='absolute right-3 top-3 bottom-3 px-8 bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-800 active:scale-95 transition-all duration-200'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search