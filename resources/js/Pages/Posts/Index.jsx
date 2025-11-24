import { Link, useForm } from '@inertiajs/react'
import React from 'react'

function Index({myPosts , posts}) {
    console.log(useForm())
  return (
    <div>
        Post Index
        {console.log(posts)}
        <ul className='mt-4 m-4'>
            {myPosts.map(post => (
                <li key={post.id} className="mb-4 border pb-2">
                   <h3><Link 
                   href={`/posts/${post.id}`}
                   className='font-medium'
                   >Post {post.id}</Link></h3> 
                    <small>{post.body}</small>
                    <div className='text-green-600'>
                      <small className='text-green-500'>
                     created   {new Date(post.created_at).toLocaleTimeString()}
                    </small>
                    </div>
                </li>
            ))}
        </ul>

             <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
    </div>
  )
}

export default Index