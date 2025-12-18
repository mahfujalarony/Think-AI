import { Heart } from 'lucide-react';
import React from 'react'

const Community = () => {
  const [creations, setCreations] = React.useState([]);
  const [user, setUser] = React.useState(null);


  //dummy data for testing

  const dummyCreations = [
    {
      content: '/g1.jpg',
      prompt: 'A beautiful sunset over the mountains',
      likes: ['user1', 'user2']
    },
    {
      content: '/g2.jpg',
      prompt: 'A futuristic cityscape at night',
      likes: ['user2', 'user3', 'user4']
    },
    {
      content: '/g3.jpg',
      prompt: 'A serene beach with crystal clear water',
      likes: []
    }
  ];
  React.useEffect(() => {
    setCreations(dummyCreations);
  }, []);
  return (
    <div  className='flex-1 h-full flex flex-col gap-4 p-6'>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {creations.length === 0 ? (
          <div className='h-full flex flex-col justify-center items-center gap-4 text-gray-400'>
            <p className='text-2xl'>No Creations Yet</p>
          </div>
        ) : (
          creations.map((creation, index) => (
            <div key={index}
            className='relative group inline-block px-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'
            >
              <img src={creation.content} alt=""
              className='w-full h-64 object-cover rounded-lg'
              />

              <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end group-hover:justify-between p-3 group-hover:bg-linear-to-b from-transparent to-black/80 text-white rounded-lg'>
                <p>{creation.prompt}</p>
                <div className='flex gap-1 items-center'>
                  <p>{creation.likes.length}</p>
                  <Heart className={`w-5 h-5 hover:scale-110 cursor-pointer
                    
                    ${creation.likes.includes(user?.id) ? 'fill-red-500 text-red-600' : 'text-white'}`}/>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Community
