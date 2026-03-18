import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../REDUX/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab === 'photos') {
                    const response = await fetchPhotos(query)                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description || 'Untitled Photo',
                        thumbnail: item.urls.small,
                        src: item.urls.regular,
                        url: item.links.html
                    }))
                } else if (activeTab === 'videos') {
                    const response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'Untitled Video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatch])

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid
/*import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setResults, setLoading, setError } from '../REDUX/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector(state => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!query) return

        const fetchData = async () => {
            dispatch(setLoading())
            try {
                let data
                if (activeTab === 'photos') {
                    data = await fetchPhotos(query)
                    dispatch(setResults(data.results))
                } else if (activeTab === 'videos') {
                    data = await fetchVideos(query)
                    dispatch(setResults(data.videos))
                }
            } catch (err) {
                dispatch(setError(err.message))
            }
        }

        fetchData()
    }, [query, activeTab, dispatch])

    if (!query) {
        return (
            <div className='flex flex-col items-center justify-center min-h-[50vh] text-gray-400'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className='text-lg font-light tracking-wide'>Start searching for inspiration...</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[50vh]'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black'></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className='p-10 text-center max-w-md mx-auto'>
                <div className='bg-red-50 text-red-600 p-6 rounded-2xl'>
                    <h3 className='font-bold mb-2'>Search Error</h3>
                    <p className='text-sm opacity-80'>{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {results && results.map(item => (
                    <ResultCard key={item.id} item={item} type={activeTab} />
                ))}
            </div>
            
            {results && results.length === 0 && (
                <div className='text-center py-20 text-gray-500'>
                    No results found for "{query}". Try something else.
                </div>
            )}
        </div>
    )
}

export default ResultGrid
*/