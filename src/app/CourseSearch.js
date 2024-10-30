'use client'
import React, { useState } from 'react';

const SearchComponent = ({handleSearch}) => {
    const [department, setDepartment] = useState('');
    const [courseCode, setCourseCode] = useState('');

    return (
        <div className="w-full rounded-md flex flex-row gap-2 justify-center ">
                <div className ='w-[200px] h-[60px]'>
                    <label htmlFor="department" className="block text-[18px] font-medium text-[#EEEEEE]">
                        Department
                    </label>
                    <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-[200px] h-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Search for Department"
                />
                </div>
                <div className='w-[200px]  h-[60px]'>
                    <label htmlFor="courseCode" className="block text-[18px] font-medium text-[#EEEEEE]">
                        Course Code
                    </label>
                    <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 w-[200px] h-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    placeholder="Search for Course Code"
                />
                </div>
                <button className={` my-auto h-[40px] bg-blue-500 font-semibold text-[18px] px-4 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-300`} 
                onClick={(e) => handleSearch(department,courseCode)}>
                    Search
                </button>

        </div>
    );
};

export default SearchComponent;
