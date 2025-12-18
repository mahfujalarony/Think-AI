import { EarIcon, Edit, Eraser, EraserIcon, FileText, Hash, Sparkles } from 'lucide-react'
import React from 'react'

const ReviewResume = () => {

  const [input, setInput] = React.useState('');

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
          <h1 className='text-xl font-semibold '>Review Resume</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Resume</p>

        <input type="file"
        accept='application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600'
        required
        />


        <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF, DOC, and DOCX formats</p>
        <button
        className='w-full flex justify-center items-center gap-2 bg-linear-to-r  from-[#f6ab41] to-[#ff4938] text-white px=4 py-2 mt-6 text-sm rounded-lg cursor-pointer'
        >
          <FileText className='w-5'/>
          Review Resume
        </button>

      </form>

      {/* right side */}

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <EarIcon className='w-5 h-5 text-[#4a7aff]' />
          <h1 className='text-xl font-semibold '>Analysis Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'> 
            <FileText className='w-9 h-9' />
            <p>Upload a resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume
