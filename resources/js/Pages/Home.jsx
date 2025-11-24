import { usePage } from '@inertiajs/react'
import React from 'react'
import Layout from '../Layouts/Layout';

function Home({message}) {
    let usepage = usePage();
    console.log(usepage , 
        message
    );
  return (
    <div>
    <p>{usepage.component}</p>
    <small>{message}</small>
    </div>
  )
}

Home.layout = page => <Layout children={page} title="Welcome" />
export default Home