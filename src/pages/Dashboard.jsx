import { Protect } from '@clerk/clerk-react'
import { Gem, GemIcon, Sparkles } from 'lucide-react'
import React from 'react'
import Creation from '../Components/Creation'


const Creations = [
  {
    id: 1,  
    prompt: 'Write a blog post about the benefits of AI in healthcare.',
    content: 'AI in healthcare improves diagnostics, personalizes treatment, and enhances patient care.',
    type: 'Article',
    createdAt: '2024-06-01T10:30:00Z'
  },
  {
    id: 2,
    prompt: 'Generate an image of a futuristic cityscape at sunset.',
    content: '/p1.jpg',
    type: 'Image',
    createdAt: '2024-06-02T14:15:00Z'
  },
  {
    id: 3,
    prompt: 'Create a list of catchy blog titles for a tech blog.',
    type: 'Blog Titles',
    content: `1. "The Future of AI: Trends to Watch in 2024"\n2. "How Blockchain is Revolutionizing Finance"\n3. "Top 10 Gadgets You Need in 2024"\n4. "The Rise of Quantum Computing: What You Need to Know"\n5. "Cybersecurity in the Age of IoT"`,
    createdAt: '2024-06-03T09:45:00Z'
  },  
  {
    id: 4,
    prompt: 'Remove the background from a product image.',  
    type: 'Background Removal',
    content: '/p2.jpg',
    createdAt: '2024-06-04T11:20:00Z'
  },
]

const Dashboard = () => {
  return (
    <div className='w-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>

        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl font-semibold'>{Creations.length}</h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-[#3588F2] to-[#0bb0d7] text-white flex justify-center items-center'>
            <Sparkles className='w-5 text-white' />
          </div>
        </div>

                <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-sm'>Active Plan</p>
            <h2 className='text-xl font-semibold'>
              <Protect plan='premium' fallback="Free">Premium</Protect>
            </h2>
          </div>

          <div className='w-10 h-10 rounded-lg bg-linear-to-br from-[#3588F2] to-[#0bb0d7] text-white flex justify-center items-center'>
            <GemIcon className='w-5 text-white' />
          </div>
        </div>


      </div>


      <div className='space-y-3'>
        <p className='mt-6 mb-4'>Recent Creations</p>

        {
          Creations.map((item) => <Creation key={item.id} item={item} />)
        }
      </div>

    </div>
  )
}

export default Dashboard
