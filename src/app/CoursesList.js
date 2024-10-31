// CoursesList.js
"use client";
import loadingGif from "./img/loading.gif";
import Image from "next/image";

function CoursesList({ courses, loading }) {
  if (loading) {
    return (
      <Image
        className="w-[50px]"
        unoptimized={true}
        src={loadingGif}
        alt="Loading..."
      />
    );
  }
  if (courses.length == 0) {
    return (
      <div className="w-full h-full items-center flex">
        <h1 className=" mt-16 text-xl font-normal w-full text-center text-[#76ABAE] ">
          Enter a valid department and course code to see past data.
        </h1>
      </div>
    );
  }
  return (
    <div className="w-full h-full max-w-[800px]">
      <h1 className="text-2xl font-bold w-full text-center text-[#76ABAE] ">
        Courses:
      </h1>

      <div className="w-full flex flex-col gap-2 px-10 pt-2 h-full ">
        {courses.map((course, index) => (
          <div
            key={index}
            className="fade-in flex flex-row rounded-md cursor-pointer hover:bg-gray-50 bg-gray-300 transition duration-200 font-bold text-center"
          >
            <div className="p-2 w-[110px] text-blue-800 border-r-2 border-black">
              {course.Semester} {course.Year}
            </div>
            <div className="p-2 flex-1 text-blue-800 border-r-2 border-black">
              {course.INSTRUCTOR}
            </div>
            <div className="p-2 w-[100px] text-blue-800 border-r-2 border-black">
              A%: {course.A}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
