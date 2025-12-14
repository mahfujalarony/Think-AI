import React from 'react'
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  const imageUrl = ['/u1.jpg', '/u2.jpg', '/u4.jpg', '/u5.jpg'];

  
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradient_bg.png)] bg-cover bg-no-repeat min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content <br /> with <span className='text-primary'>AI tools</span></h1>
        <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-sx text-gray-600'>Unlock your creativity with our AI-powered platform. Generate stunning images, engaging text, and more with just a few clicks.</p>

        <div className='mt-10 flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
          <button onClick={() => navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
           <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
        </div>

        <div className='mt-20'>
          {imageUrl.map((url, index) => (
            <img 
              key={index}
              src={url} 
              alt={`User creation ${index + 1}`} 
              className={`inline-block w-10 h-10 rounded-full border-2 border-white object-cover ${index !== 0 ? '-ml-4' : ''}`} 
            />
          ))}

          <span className='text-gray-600 text-sm ml-3'>Join 10,000+ users creating with Think AI</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
