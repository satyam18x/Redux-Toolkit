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
    }, [query, activeTab, dispatch])

    if (loading) return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className='aspect-video bg-[#1c1c1e] rounded border border-[#1f1f22] animate-pulse'></div>
                ))}
            </div>
        </div>
    )

    if (error) return (
        <div className='max-w-7xl mx-auto px-6 py-20 text-center'>
            <h2 className='text-sm font-bold text-[#64748b] uppercase tracking-widest mb-2'>Connection Error</h2>
            <p className='text-xs text-[#475569]'>{error}</p>
        </div>
    )

    return (
        <div className='max-w-7xl mx-auto px-6 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20'>
                {results.map((item) => (
                    <ResultCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )

}


export default ResultGrid

