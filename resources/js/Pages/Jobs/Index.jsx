import { Link } from '@inertiajs/react'
import React from 'react'

function Index({jobs ,jobs1}) {

  return (
  
    
    <>
     { console.log(jobs1) }
    <div>
        <h2 className='text-2xl font-bold mb-4'>Job Listings</h2>
           {jobs.map(post => (
                <li key={post.id} className="mb-4 border border-cyan-200 pb-2 list-none">
                   <h3><Link 
                   href={`/jobs/${post.id}`}
                   className='font-medium'
                   >Post {post.id}</Link></h3> 
                    <small className='font-bold text-green-600'>{post.title}</small><br></br>
                     <small>{post.location}</small>
                    <div>
                      <small  className='text-fuchsia-600'>
                     created   {new Date(post.created_at).toLocaleTimeString()}
                    </small>
                    </div>
                </li>
            ))}
            </div>
    
    </>
  )
}

export default Index