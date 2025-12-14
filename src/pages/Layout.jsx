import { Menu, X } from 'lucide-react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav>
        <h1 className='text-blue-500 hover:text-blue-400 cursor-pointer text-2xl font-bold' onClick={() => navigate("/")}>Think AI</h1>
        {
          sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' /> : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
        }
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
