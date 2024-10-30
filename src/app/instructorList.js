// InstructorSearch.js
'use client'
import React, { useState } from 'react';

function InstructorList({ instructors,onSelectInstructor,selected }) {


    return (
        <div className="  w-[50%] h-full">
            <h1 className="text-2xl font-bold w-full text-center text-[#76ABAE] ">Professors:</h1>
            <div className="w-full flex flex-col gap-2 px-10 pt-2">
            
                {instructors.map((instructor) => (
                    <div 
                        key={instructor.instructor}
                        className={`p-2 rounded-md cursor-pointer ${selected == instructor.instructor ? 'bg-blue-400' : ' hover:bg-gray-50 bg-gray-300'} transition duration-200 font-bold text-center`}
                        onClick={() => onSelectInstructor(instructor.instructor)}
                    >
                        {instructor.instructor}
                    </div >
                ))}
            </div >
        </div>
    );
}

export default InstructorList;
