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
        <div className='w-full'>
            <form onSubmit={submitHandler} className='flex items-center gap-2 max-w-4xl'>
                <div className='relative flex-grow'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#64748b]'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='w-full bg-[#161618] border border-[#1f1f22] pl-11 pr-4 py-3 text-sm rounded outline-none focus:border-blue-600 transition-colors placeholder-[#475569] text-white'
                        type="text"
                        placeholder='Search photos and illustrations...' 
                    />
                </div>
                <button 
                    type='submit'
                    className='btn-primary-minimal text-xs h-[46px] px-8'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search


