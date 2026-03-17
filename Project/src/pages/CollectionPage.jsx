/*import React from 'react'
import { useSelector } from 'react-redux'
import ResultCard from '../components/ResultCard'

const CollecctionPage = () => {
    const collection = useSelector(state => state.collection.items)

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <div className='flex items-center justify-between mb-10'>
                <h2 className='text-3xl font-bold tracking-tight'>Saved Collection</h2>
                <div className='text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full'>
                    {collection.length} items
                </div>
            </div>
            
            {collection.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-32 text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <p className='text-xl'>Your collection is waiting to be filled</p>
                    <p className='text-sm mt-2 font-light'>Save photos and videos to see them here.</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {collection.map(item => (
                        <ResultCard key={item.id} item={item} type={item.urls ? 'photos' : 'videos'} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CollecctionPage
*/