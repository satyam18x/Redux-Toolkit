import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-[#1f1f22] bg-[#0f0f10] py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between gap-12'>
          <div className='space-y-4 max-w-sm'>
            <Link to='/' className='flex items-center gap-2'>
              <div className='w-6 h-6 bg-white rounded flex items-center justify-center'>
                <span className='text-black font-bold text-xs'>X</span>
              </div>
              <span className='font-bold text-sm tracking-tight text-white'>Unsplash+</span>
            </Link>
            <p className='text-xs text-[#64748b] leading-relaxed'>
              A minimalist asset discovery platform. Developed for clarity, speed, and cross-platform usability.
            </p>
          </div>
          
          <div className='flex gap-16'>
            <div className='space-y-4'>
                <h4 className='text-[10px] font-bold uppercase tracking-widest text-[#475569]'>Platform</h4>
                <ul className='space-y-2 text-xs'>
                    <li><Link to='/' className='text-[#64748b] hover:text-white transition-colors'>Explore</Link></li>
                    <li><Link to='/collection' className='text-[#64748b] hover:text-white transition-colors'>Vault</Link></li>
                    <li><a href='#' className='text-[#64748b] hover:text-white transition-colors'>API</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
                <h4 className='text-[10px] font-bold uppercase tracking-widest text-[#475569]'>Legal</h4>
                <ul className='space-y-2 text-xs'>
                    <li><a href='#' className='text-[#64748b] hover:text-white transition-colors'>Privacy</a></li>
                    <li><a href='#' className='text-[#64748b] hover:text-white transition-colors'>Terms</a></li>
                </ul>
            </div>
          </div>
        </div>
        
        <div className='mt-16 pt-8 border-t border-[#1f1f22] flex justify-between items-center'>
          <p className='text-[10px] text-[#475569] uppercase tracking-widest font-medium'>© 2026 UN-PLUS ENGINE.</p>
          <div className='flex gap-6'>
            <a href='#' className='text-[10px] text-[#475569] hover:text-white transition-colors'>Twitter</a>
            <a href='#' className='text-[10px] text-[#475569] hover:text-white transition-colors'>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

