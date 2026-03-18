import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from '../REDUX/features/collection'

const CollectionPage = () => {
    const collection = useSelector(state => state.collection.items)
    const dispatch = useDispatch()

    return (
        <div className='min-h-screen bg-[#0f0f10] text-[#94a3b8]'>
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
                {collection.length > 0 ? (
                    <div className="space-y-12 mb-16">
                        <div className='max-w-3xl space-y-6'>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Your Vault</h1>
                            <p className="text-lg text-[#64748b] leading-relaxed">
                                Persistent collection of curated assets. Review and manage your discoveries across sessions.
                            </p>
                            <div className='flex items-center gap-6 pt-2'>
                                <p className='text-xs font-bold uppercase tracking-widest text-[#475569]'>{collection.length} items curated</p>
                                <button 
                                    onClick={() => dispatch(clearCollection())}
                                    className="btn-minimal text-[10px] font-bold uppercase tracking-widest px-6"
                                >
                                    Purge Vault
                                </button>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8 border-t border-[#1f1f22]'>
                            {collection.map((item) => (
                                <CollectionCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-40 text-center space-y-8">
                        <div className="w-16 h-16 bg-[#161618] rounded border border-[#1f1f22] flex items-center justify-center">
                            <span className='text-[#475569] font-bold text-2xl'>X</span>
                        </div>
                        <div className='space-y-3'>
                            <h2 className="text-xl font-bold text-white">Vault is empty</h2>
                            <p className="text-sm text-[#475569] max-w-[300px] mx-auto">You haven't added any assets to your collection yet.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CollectionPage




