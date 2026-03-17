
/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCollection, removeFromCollection } from '../REDUX/features/collection'

const ResultCard = ({ item, type }) => {
    const dispatch = useDispatch()
    const collection = useSelector(state => state.collection.items)
    const isSaved = collection.some(i => i.id === item.id)

    const toggleSave = () => {
        if (isSaved) {
            dispatch(removeFromCollection(item))
        } else {
            dispatch(addToCollection(item))
        }
    }

    return (
        <div className='relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500'>
            {type === 'photos' ? (
                <img 
                    src={item.urls.regular} 
                    alt={item.alt_description} 
                    className='w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110' 
                />
            ) : (
                <div className='relative h-80'>
                    <video 
                        src={item.video_files[0].link} 
                        className='w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110' 
                        loop 
                        muted 
                        onMouseOver={e => e.target.play()}
                        onMouseOut={e => e.target.pause()}
                    />
                    <div className='absolute bottom-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white uppercase tracking-wider'>Video</div>
                </div>
            )}
            
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                <p className='text-white text-sm font-medium line-clamp-2'>
                    {type === 'photos' ? item.alt_description : item.user.name}
                </p>
            </div>

            <button 
                onClick={toggleSave}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-90 ${
                    isSaved ? 'bg-red-500 text-white shadow-red-500/50' : 'bg-white/80 text-gray-700 hover:bg-white'
                } shadow-lg`}
            >
                {isSaved ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                )}
            </button>
        </div>
    )
}

export default ResultCard
*/
