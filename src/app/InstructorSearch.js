// InstructorSearch.js
'use client'
import React, { useState } from 'react';

function InstructorSearch({ searchInstructors, error }) {
    const [name, setName] = useState('');



    return (
        <div className="p-0 m-0 h-full shadow-md">
            <div className={`flex justify-center w-full h-[40px] gap-4`}>
                <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search for an instructor"
                />
                <button className={`bg-blue-500 font-semibold text-[18px] px-4 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300`} 
                onClick={(e) => searchInstructors(name)}>
                    Search
                </button>
            </div>

            {error && <p className="text-red-500 w-full text-center">{error}</p>}

        </div>
    );
}

export default InstructorSearch;
