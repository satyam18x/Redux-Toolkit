import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../REDUX/features/collection';

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
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
                    />
                )}
                {item.type === 'video' && (
                    <video 
                        className='h-full w-full object-cover' 
                        autoPlay loop muted playsInline
                        src={item.src}
                    ></video>
                )}

                {/* Simple Remove Button */}
                <button
                    onClick={removeFromCollection}
                    className="absolute top-2 right-2 p-2 rounded bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-colors"
                    title="Remove from Vault"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            {/* Metadata Layer */}
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
                        className='text-[10px] font-medium text-[#64748b] hover:text-white transition-colors'
                    >
                        Source ↗
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard


