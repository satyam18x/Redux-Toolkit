import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className='sticky top-0 z-50 nav-minimal px-6 py-3 bg-[#0f0f10]'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <Link to='/' className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-white rounded flex items-center justify-center'>
              <span className='text-black font-bold text-xs'>X</span>
            </div>
            <span className='font-bold text-sm tracking-tight text-white'>Media Search</span>
          </Link>
          
          <div className='flex items-center gap-1'>
            <Link 
              to='/' 
              className={`text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${
                location.pathname === '/' 
                ? 'bg-[#1f1f22] text-white' 
                : 'text-[#64748b] hover:text-[#94a3b8]'
              }`}
            >
              Explore
            </Link>
            <Link 
              to='/collection' 
              className={`text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${
                location.pathname === '/collection' 
                ? 'bg-[#1f1f22] text-white' 
                : 'text-[#64748b] hover:text-[#94a3b8]'
              }`}
            >
              Vault
            </Link>
          </div>
      </div>
    </nav>
  )
}

export default Navbar



