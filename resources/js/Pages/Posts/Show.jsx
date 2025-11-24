import React from 'react'

function Show({post}) {

     const handleBack = () => {
        
        window.history.back();
    }
  return (
    <>
      <div className='mt-4 m-4'>
                <li key={post.id} className="mb-4 border pb-2 list-none">
                   <h3>Post {post.id}</h3> 
                    <small>{post.title}</small>
                    <div className='text-green-600'>
                      <small className='text-green-500'>
                     created   {new Date(post.created_at).toLocaleTimeString()}
                    </small>
                    </div>
                </li>
         
        </div>

          <button onClick={handleBack} 
        className="px-4 py-2 font-bold text-white dark:bg-cyan-800 hover:bg-blue-700 ">
            Back
        </button>
    </>
  )
}

export default Show