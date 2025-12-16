import { Edit, Image, ImageIcon, Sparkles } from 'lucide-react'
import React from 'react'

const GenerateImages = () => {

  const [selectedStyle, setSelectedStyle] = React.useState('Realistic');
  const [input, setInput] = React.useState('');
  const [publish, setPublish] = React.useState(false);

  const ImageStyle = [
    "Realistic",
    "Cartoon",
    "3D Render",
    "Pixel Art",
    "Line Art",
    "Watercolor",
    "Oil Painting",
    "Surreal",
    "Fantasy",
    "Cyberpunk"
  ]
  const onSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      <form action=""
      className='w-full max-w-lg p-4 bg-white rounded-lg border-gray-200'
      >
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#4a7aff]' />
          <h1 className='text-xl font-semibold '>AI Image Generator</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Describe your image</p>

        <textarea
        value={input}
        rows={4}
        className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
        placeholder='Enter your image description here...'
        />

        <p className='mt-4 text-sm font-medium'>Image Style</p>

        <div className='flex flex-wrap gap-2 mt-2'>
          {ImageStyle.map((item, index) => (
            <span key={index}
            onClick={() => setSelectedStyle(item)}
            className={`text-xs px-4 py-1 border rounded-full cursor-pointer
              ${selectedStyle === item ? 
                'bg-green-50 text-green-700' : 
                'text-gray-500 border-gray-300'
              }
              `}
            >
              {item}
            </span>
          ))}
        </div>

        <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer'>
            <input type="checkbox" 
            onChange={(e) => setPublish(e.target.checked)}
            checked={publish}
            className='sr-only peer'
            />

            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>

            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make this image Public</p>
          </div>

        <button
        className='w-full flex justify-center items-center gap-2 bg-linear-to-r  from-green-400 to-green-600 text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'
        >
          <ImageIcon className='w-5'/>
          Generate Image
        </button>

      </form>

      {/* right side */}

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-150'>
        <div className='flex items-center gap-3'>
          <ImageIcon className='w-5 h-5 text-green-600' />
          <h1 className='text-xl font-semibold '>Generated Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'> 
            <ImageIcon className='w-9 h-9' />
            <p>Enter a topic and click 'generate image' to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenerateImages
