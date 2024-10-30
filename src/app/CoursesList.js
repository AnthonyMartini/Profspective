// CoursesList.js
'use client'
import React, { useEffect, useState } from 'react';

function CoursesList({ instructor, courses,tab }) {
    const [error, setError] = useState(null);

    return (
        <div className="w-1/2 h-full">
           <h1 className="text-2xl font-bold w-full text-center text-[#76ABAE] ">Courses:</h1>

            <div className="w-full flex flex-col gap-2 px-10 pt-2 h-full ">
                {courses.map((course, index) => (
                    <div 
                        key={index} 
                        className="flex flex-row rounded-md cursor-pointer hover:bg-gray-50 bg-gray-300 transition duration-200 font-bold text-center">
                        <div className='p-2 w-[120px] text-blue-800 border-r-2 border-black'>{course.Semester} {course.Year}</div>
                        <div className='p-2 flex-1 text-blue-800 border-r-2 border-black'>{tab == 'instructorSearch' ?course.TITLE : course.INSTRUCTOR}</div>
                        <div className='p-2 w-[100px] text-blue-800 border-r-2 border-black'>A%: {course.A}</div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesList;
