// RankRangersApp.js
"use client";
import React, { useState } from "react";
import InstructorSearch from "./InstructorSearch";
import CoursesList from "./CoursesList";
import InstructorCourseList from "./InstructorCourseList";
import InstructorList from "./instructorList";
import TabbedMenu from "./TabbedMenu";
import CourseSearch from "./CourseSearch.js";
import Image from "next/image";
import infoIcon from "./img/info.svg";
import Link from "next/link";

function RankRangersApp() {
  const [tab, setTab] = useState("instructorSearch");
  //instructor search
  const [instructorSearchTerm, setInstructorSearchTerm] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [instructorCourses, setInstructorCourses] = useState([]);

  //Course Search

  const [courses, setCourses] = useState([]);
  const [departmentSearchTerm, setDepartmentSearchTerm] = useState("");
  const [courseCodeSearchTerm, setCourseCodeSearchTerm] = useState("");

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const searchInstructors = async (name) => {
    setInstructorCourses([]);
    setLoading(true);
    try {
      const response = await fetch(
        `https://rankrangersrequests.azurewebsites.net/instructors?name=${encodeURIComponent(
          name
        )}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setInstructors(data);
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message);
      setInstructors([]); // Clear results on error
    } finally {
      setLoading(false);
    }
  };
  const fetchCourses = async (instructor) => {
    setSelectedInstructor(instructor);
    setLoading(true);
    try {
      const response = await fetch(
        `https://rankrangersrequests.azurewebsites.net/courses?name=${encodeURIComponent(
          instructor
        )}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setInstructorCourses(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setInstructorCourses([]);
    } finally {
      setLoading(false);
    }
  };
  const fetchCourses2 = async (department, code) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://rankrangersrequests.azurewebsites.net/coursesearch?department=${encodeURIComponent(
          department
        )}&courseCode=${encodeURIComponent(code)}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-[#222831]  flex-nowrap">
      {/*Header*/}
      <Link href="/Info">
        <Image
          src={infoIcon}
          className="w-[30px] mt-2 ml-2 cursor-pointer"
          alt="Info"
        />
      </Link>

      <div className="w-[full] h-[200px] text-center justify-center gap-4 flex flex-col items-center shadow-md">
        <div className="w-[400px]">
          <h1 className="typing-effect text-5xl font-bold h-[60px] text-[#76ABAE]  ">
            Profspective USF
          </h1>
        </div>
        <h1 className="text-1xl font-bold w-[screen] text-[#EEEEEE]  ">
          No More Second Guessing Your Class Choices
        </h1>
      </div>
      {/*tabbed Menu*/}
      <div className="w-full h-[60px] ">
        <TabbedMenu activeTab={tab} setActiveTab={setTab} />
      </div>
      {/*Search Bar*/}
      <div className="w-full h-[70px] shadow-md">
        {tab == "instructorSearch" ? (
          <InstructorSearch
            searchTerm={instructorSearchTerm}
            setSearchTerm={setInstructorSearchTerm}
            searchInstructors={searchInstructors}
          />
        ) : (
          <CourseSearch
            handleSearch={fetchCourses2}
            department={departmentSearchTerm}
            setDepartment={setDepartmentSearchTerm}
            courseCode={courseCodeSearchTerm}
            setCourseCode={setCourseCodeSearchTerm}
          />
        )}
      </div>
      <div>
        {error && <p className="text-red-500 w-full text-center">{error}</p>}
      </div>

      {/*Content Area*/}
      <div className="w-full flex flex-row flex-nowrap justify-center">
        {tab == "instructorSearch" ? (
          <>
            <InstructorList
              instructors={instructors}
              onSelectInstructor={fetchCourses}
              selected={selectedInstructor}
              loading={loading}
            />
            <InstructorCourseList
              instructor={selectedInstructor}
              courses={instructorCourses}
            />
          </>
        ) : (
          <CoursesList
            instructor={selectedInstructor}
            courses={courses}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default RankRangersApp;
