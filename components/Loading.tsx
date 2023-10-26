import React from 'react'

const Loading = () => {
  return (
    <div className='grid place-content-center relative z-40 h-[100vh]'>
      <div className="w-12 h-12 rounded-full animate-spin border-x-8 border-dashed border-black border-t-transparent"></div>
    </div>
  )
}

export default Loading
