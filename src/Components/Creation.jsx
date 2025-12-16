import React from 'react'

const Creation = ({ item }) => {

    const [expanded, setExpanded] = React.useState(false);
    
  return (
    <div 
   onClick={() => setExpanded(!expanded)} 
    className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
      <div className='flex justify-between items-center gap-4'>
        <div>
            <h2>{item.prompt}</h2>
            <p className='text-gray-500'>{item.type} - {new Date(item.createdAt).toString()}</p>

        </div>
        <button className='bg-[#eff6ff] border border-[#bfdbfe] text-[#1e40af] px-4 py-1 rounded-full'>
            {item.type}
        </button>
      </div>
        {expanded && (
            <div>
                {(() => {
                    const typeLabel = item.type?.toLowerCase() ?? '';
                    const content = item.content ?? '';
                    const isImageLike = typeof content === 'string' && (
                        content.startsWith('data:image') ||
                        /\.(png|jpe?g|gif|webp|svg)$/i.test(content)
                    );
                    const showImage = typeLabel.includes('image') || typeLabel.includes('background') || isImageLike;

                    return showImage ? (
                        <div>
                            <img
                                src={content}
                                alt={item.prompt ?? 'creation-preview'}
                                className='mt-3 w-full max-w-md rounded-lg border border-gray-200 object-cover'
                            />
                        </div>
                    ) : (
                        <pre className='mt-3 whitespace-pre-wrap wrap-break-word text-sm text-slate-700'>
                            {content}
                        </pre>
                    );
                })()}
            </div>
        )}
    </div>
  )
}

export default Creation
