// RankRangersApp.js
'use client'
import React, { useState } from 'react';
import InstructorSearch from './InstructorSearch';
import CoursesList from './CoursesList';
import InstructorList from './instructorList';
import TabbedMenu from './TabbedMenu';
import CourseSearch from "./CourseSearch.js"



function RankRangersApp() {
    const [selectedInstructor, setSelectedInstructor] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [courses, setCourses] = useState([]);
    const [tab, setTab] = useState('instructorSearch');
    const [error, setError] = useState(null);

    const searchInstructors = async (name) => {
        try {
            const response = await fetch(`https://rankrangersrequests.azurewebsites.net/instructors?name=${encodeURIComponent(name)}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setInstructors(data);
            setError(null); // Clear previous errors
        } catch (err) {
            setError(err.message);
            setInstructors([]); // Clear results on error
        }
    };
    const fetchCourses = async (instructor) => {
        setSelectedInstructor(instructor);
        try {
            const response = await fetch(`https://rankrangersrequests.azurewebsites.net/courses?name=${encodeURIComponent(instructor)}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setCourses(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setCourses([]);
        }
    };
    const fetchCourses2 = async (department,code) => {
        console.log(code);
        try {
            const response = await fetch(`https://rankrangersrequests.azurewebsites.net/coursesearch?department=${encodeURIComponent(department)}&courseCode=${encodeURIComponent(code)}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setCourses(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setCourses([]);
        }
    };

    return (
        <div className="w-screen min-h-screen flex flex-col justify-start bg-[#222831]  flex-nowrap">
            {/*Header*/}
            <div className = "w-full h-[200px] text-center justify-center gap-4 flex flex-col shadow-md">
                 <h1 className="text-5xl font-bold w-screen text-[#76ABAE] ">The Rank Rangers</h1>
                 <h1 className="text-1xl font-bold w-screen text-[#EEEEEE] ">No More Second Guessing Your Class Choices</h1>
            </div>
            {/*tabbed Menu*/}
            <div className='w-full h-[60px] '>
                <TabbedMenu activeTab = {tab} setActiveTab={setTab}/>
                

            </div>
            {/*Search Bar*/}
            <div className='w-full h-[70px]'>
                {tab =='instructorSearch' ? 
                <InstructorSearch searchInstructors={searchInstructors} error={error}/>
                :<CourseSearch handleSearch={fetchCourses2} />
                }
                

            </div>
            
            {/*Content Area*/}
            <div className='w-full flex flex-row flex-nowrap justify-center'>
            {tab =='instructorSearch' ?
                <InstructorList instructors={instructors} onSelectInstructor={fetchCourses} selected={selectedInstructor}/> : <div></div>
            }
                <CoursesList instructor={selectedInstructor} courses = {courses} tab ={tab} />
            </div>


            
            
           
        </div>
    );
}

export default RankRangersApp;
