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
