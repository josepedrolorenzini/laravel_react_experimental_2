import { Link } from '@inertiajs/react';
import React from 'react'

function Show({job}) {

        const handleBack = () => {
        window.history.back();
        }

  return (
    <>
       <div className='mt-4 m-4'>
                <li key={job.id} className="mb-4 border pb-2 list-none">
                   <h3>Job {job.id}</h3> 
                    <small>{job.title}</small>
                    <div className='text-green-600'>
                      <small className='text-green-500'>
                     created   {new Date(job.created_at).toLocaleTimeString()}
                    </small>
                    </div>
                    <div className='my-3'>

                <Link
                    className="m-1 p-1 font-bold text-white dark:bg-slate-700 hover:bg-slate-800 "
                    href={`/jobs/edit/${job.id}`}
                >
                    Edit
                </Link>
                    </div>
                </li>
         
        </div>

          <button onClick={handleBack} 
        className="px-4 py-2 font-bold text-white dark:bg-slate-700 hover:bg-slate-800 ">
            Back
        </button>
    </>
  )
}

export default Show