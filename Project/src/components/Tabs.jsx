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
        <div className='flex gap-2 border-b border-[#1f1f22] mb-8'>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => dispatch(setActiveTabs(tab.id))}
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                        activeTab === tab.id 
                        ? 'border-blue-600 text-white' 
                        : 'border-transparent text-[#64748b] hover:text-[#94a3b8]'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}



export default Tabs


