import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../REDUX/features/searchSlice'

const Tabs = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector(state => state.search.activeTab)

    const tabs = [
        { id: 'photos', label: 'Photos' },
        { id: 'videos', label: 'Videos' },
       
    ]

    return (
        <div className='flex justify-center gap-6 p-6 border-b border-gray-100'>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => dispatch(setActiveTabs(tab.id))}
                    className={`px-8 py-2.5 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                        activeTab === tab.id 
                        ? 'bg-gray-500 text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default Tabs
