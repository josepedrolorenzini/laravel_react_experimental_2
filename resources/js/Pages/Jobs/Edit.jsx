import { useForm, usePage } from '@inertiajs/react';
import React from 'react'

function Edit({jobs , job}) {

    const {data, setData, post, processing, errors} = useForm({
        id: job.id || '',
        location: job.location || '',
        salary: job.salary || '',
        title: job.title || '',
    });


    function submit(e) {
        e.preventDefault();
        console.log(data);
      //  alert(data.title);
        post(`/jobs/update/${job.id}`);
    }

  return (
    <>
    
    {console.log(jobs)}
    {console.log(usePage())}
     {console.log(data)}
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">{'edit post id :'.toLocaleUpperCase()} {job.id}</h1>

    <p className="mt-4 text-gray-500">
     Here we can edit our posts and update them with your new post!
    </p>
  </div>

  <form  
  //  action={`/jobs/update/${job.id}`} // is using Form activate this and remove onSubmit={submit}
  onSubmit={submit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
  <input
    type="hidden"
    value={data.id}
    onChange={e => {setData('id', e.target.value)}}
    autoComplete="on"
    />

  <div>
      <div className="relative">
        Title
        <input
          type="text"
          value={data.title}
          onChange={(e) => { setData('title', e.target.value)}}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Title"
          autoComplete="on"
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="sr-only">Email</label>

      <div className="relative">
      Location
        <input
          type="text"
          value={data.location}
          onChange={(e) => { setData('location', e.target.value)}}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Location"
          autoComplete="on"
        />
      </div>
    </div>
    <div>
      <div className="relative">
        Salary
        <input
          type="text"
          value={data.salary}
          onChange={(e) => { setData('salary', e.target.value)}}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="salary"
          autoComplete="on"
        />
      </div>
    </div>
    
 

    <div className="flex items-center justify-between">
     

      <button
        type="submit"
        disabled={processing}
        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Update
      </button>
    </div>
  </form>
</div>
    </>
  )
}

export default Edit