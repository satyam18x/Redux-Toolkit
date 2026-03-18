import { useDispatch, useSelector } from 'react-redux'
import { addCollection, removeCollection, addedToast, removeToast } from '../REDUX/features/collection'

const ResultCard = ({ item }) => {
    const dispatch = useDispatch()
    const { items: collection } = useSelector((state) => state.collection)
    const isSaved = collection.some(i => i.id === item.id)

    const toggleSave = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (isSaved) {
            dispatch(removeCollection(item.id))
            dispatch(removeToast())
        } else {
            dispatch(addCollection(item))
            dispatch(addedToast())
        }
    }

    return (
        <div className='minimal-card rounded overflow-hidden flex flex-col h-full group'>
            {/* Media Container */}
            <div className='aspect-video overflow-hidden bg-[#161618] relative'>
                {item.type === 'photo' && (
                    <img 
                        className='h-full w-full object-cover' 
                        src={item.thumbnail} 
                        alt={item.title} 
                        loading="lazy"
                    />
                )}
                {item.type === 'video' && (
                    <video 
                        className='h-full w-full object-cover' 
                        autoPlay loop muted playsInline
                        src={item.src}
                    ></video>
                )}
                
                {/* Simple Save Button on Media */}
                <button
                    onClick={toggleSave}
                    className={`absolute top-2 right-2 p-2 rounded transition-colors ${
                        isSaved 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-black/50 text-white opacity-0 group-hover:opacity-100'
                    }`}
                >
                    <svg className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </div>

            {/* Metadata Layer (Always Visible) */}
            <div className='p-4 space-y-2 flex-grow flex flex-col justify-between'>
                <div className='space-y-1'>
                    <div className='flex items-center gap-2'>
                        <span className='text-[10px] font-bold uppercase tracking-wider text-blue-500/80'>{item.type}</span>
                        <span className='text-[10px] font-medium text-[#475569]'>• curated</span>
                    </div>
                    <h3 className='text-xs font-bold text-white line-clamp-1 leading-snug'>{item.title}</h3>
                </div>
                
                <div className='pt-3 flex items-center justify-between border-t border-[#1f1f22] mt-auto'>
                    <a 
                        href={item.url} 
                        target='_blank' 
                        rel='noreferrer' 
                        className='text-[10px] font-medium text-[#64748b] hover:text-white transition-colors flex items-center gap-1'
                    >
                        Source
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResultCard




