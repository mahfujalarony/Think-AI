import { useClerk, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Eraser, FileText, Hash, House, Image, Scissors, SquarePen, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom' 

const navItems = [
  {to: '/ai', label: 'Dashboard', Icon: House},
  {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
  {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
  {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
  {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
  {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
  {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
  {to: '/ai/community', label: 'Community', Icon: Users},
]

const Sidebar = ({ sidebar, setSidebar}) => {
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();


    if (!user) return null; 

  return (
    <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition duration-300 ease-in-out z-50`}> 
        <div className='my-7 w-full'>

            <img src={user.imageUrl} alt="user"
            className='w-14 h-14 rounded-full mx-auto object-cover'
            />
          
            <h1 className='mt-3 text-center font-medium'>{user.firstName}</h1>

            <div className='mt-10 flex flex-col gap-2'>
              {navItems.map(({to, label, Icon}) => (
                <NavLink 
                  key={to}
                  to={to}
                  end={to === '/ai'}
                  onClick={() => setSidebar(false)}

                  className={({isActive}) => `px-5 py-3 flex items-center gap-3 hover:bg-gray-100 transition-all ${isActive ? 'bg-linear-to-r from-[#3c81f6] to-[#9234ea] text-white hover:bg-transparent' : 'text-gray-600'}`}
                  >
              
                   {({isActive}) => (
                      <>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`}/>
                        <span className="font-medium">{label}</span>
                      </>
                   )}
                  </NavLink>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar