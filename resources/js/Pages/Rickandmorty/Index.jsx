import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

function Index({ characters }) {
    // 1. Initialize 'data' with the full list of characters
    const [data, setData] = useState(characters);
    const [searchTerm, setSearchTerm] = useState('');

    // 2. The searching function now *only* updates the state based on the input change.
    const searchingFunction = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Filter the *original* list (characters) based on the new search value
        const filteredData = characters.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        // Update the 'data' state with the filtered results
        setData(filteredData);
    };
    
    // Optional: Log search term, but removed the redundant useEffect.
    // console.log(searchTerm); 

    // Handle form submission (prevents page reload)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can add logic here if you want to perform a search only on submit
        // but since you are filtering on 'onChange', this is mostly for prevention.
    };

    // 3. Determine what content to display
    const showList = data.length > 0;
    const noResults = searchTerm.length > 0 && data.length === 0;

    return (
        <>
            <form onSubmit={handleFormSubmit}> 
                <input 
                    type="text" 
                    placeholder="search rick and morty" 
                    className='border p-2 rounded-md' 
                    // Set value to searchTerm to make it a controlled component
                    value={searchTerm}
                    onChange={searchingFunction}
                />
                {/* The submit button is now handled by handleFormSubmit */}
                <button type="submit" className='bg-blue-500 text-white p-2 rounded-md ml-2'>Search</button>
            </form>
            
            <h2 className='text-xl my-4 font-bold'>Rick and Morty Characters</h2>

            ---

            {/* Conditionally render content */}
            {noResults && (
                <div className='text-red-500 font-medium p-4 border border-red-300 rounded-md'>
                    🚫 No characters found matching "{searchTerm}".
                </div>
            )}

            {/* Display the list if showList is true (i.e., data.length > 0) */}
            {showList && (
                <ul className='mt-4 m-4'>
                    {/* 4. Use 'data' instead of 'characters' here */}
                    {data.map(post => (
                        <li key={post.id} className="mb-4 border pb-2">
                            <h3><Link 
                                href={`/rickandmorty/${post.id}`}
                                className='font-medium'
                            >{post.name}</Link></h3> 
                            <small>{post.status}</small>
                            <div className='text-green-600'>
                                <small className='text-green-500'>
                                    Origin: { post.origin?.name }
                                </small><br />
                                <small className='text-green-500'>
                                    Location: { post.location?.name }
                                </small>
                            </div>
                            <div className='text-green-600'>
                                <small className='text-cyan-500'>
                                    Created: {new Date(post.created).toLocaleTimeString()}
                                </small>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            
            {/* If you wanted to show a specific message when the search is empty but data isn't */}
            {searchTerm.length === 0 && data.length > 0 && (
                 <p className='text-gray-500 mt-2'>Showing all {data.length} characters.</p>
            )}

        </>
    );
}

export default Index;