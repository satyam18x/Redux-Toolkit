import { useSelector } from 'react-redux'
import ResultGrid from '../components/ResultGrid'
import Search from '../components/Search'
import Tabs from '../components/Tabs'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className='min-h-screen bg-[#0f0f10] text-[#94a3b8]'>
            <div className='max-w-7xl mx-auto px-6 py-12 lg:py-20'>
                {!query && (
                    <div className='max-w-3xl space-y-6 mb-16'>
                        <h1 className='text-4xl md:text-5xl font-bold text-white'>
                            Find high-quality assets instantly
                        </h1>
                        <p className='text-lg text-[#64748b] leading-relaxed'>
                            A streamlined discovery engine for high-resolution imagery and video assets.
                            Built for professionals who value speed and precision.
                        </p>
                    </div>
                )}

                <div className='mb-12'>
                    <Search />
                </div>

                {!query && (
                    <div className='space-y-16'>
                        <div className='space-y-6'>
                            <h2 className='text-xs font-bold uppercase tracking-widest text-[#64748b]'>Popular assets</h2>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                {[
                                    { name: 'Abstract', count: '2.4k' },
                                    { name: 'Landscapes', count: '1.8k' },
                                    { name: 'Industrial', count: '940' },
                                    { name: 'Texture', count: '1.2k' }
                                ].map((cat) => (
                                    <div key={cat.name} className='minimal-card p-4 rounded cursor-pointer group'>
                                        <p className='text-sm font-bold text-white group-hover:text-blue-500 transition-colors'>{cat.name}</p>
                                        <p className='text-[10px] text-[#64748b] mt-1'>{cat.count} files</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {query && (
                    <div className='space-y-8 animate-in fade-in duration-500'>
                        <Tabs />
                        <ResultGrid />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage


