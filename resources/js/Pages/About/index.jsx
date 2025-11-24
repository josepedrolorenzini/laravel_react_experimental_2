import React from 'react';
import { usePage , useForm} from '@inertiajs/react';
import Layout from '../../Layouts/Layout';

export default function About({infoSubmitted}) {
  
  const { flash } = usePage().props; // Get flash messages from Laravel

    // useForm = estado + manejo + post
    const { data, setData, post, processing, errors, reset } = useForm({
        info: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/about', {
            onSuccess: () => reset(),
        });
    };

  return (
  
        
    <>
     {console.log(infoSubmitted)}
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      {/* SUCCESS MESSAGE */}
      {flash?.success && (
        <div className="p-3 mb-4 text-green-700 bg-green-200 rounded-md">
          {flash.success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
      

        <input
          type="text"
          name="info"
          value={data.info}
          onChange={(e) => setData("info", e.target.value)}
          placeholder="Search info"
          className="border p-2 rounded-md w-full"
        />

        <button
          type="submit"
          className="bg-purple-600 text-purple px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </>
     
  );
}
