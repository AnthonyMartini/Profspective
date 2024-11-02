// CoursesList.js
"use client";

import loadingGif from "./img/loading.gif";
import Image from "next/image";

function InstructorCourseList({ courses, loading }) {
  if (loading) {
    return (
      <div className="w-[50%] h-full max-w-[800px] flex justify-center">
        <Image
          className="w-[50px] h-[50px]"
          unoptimized={true}
          src={loadingGif}
          alt="Loading..."
        />
      </div>
    );
  }
  if (courses.length == 0) {
    return <div></div>;
  }
  return (
    <div className="w-[50%] h-full max-w-[800px]">
      <h1 className="text-2xl font-bold w-full text-center text-[#76ABAE] ">
        Courses:
      </h1>

      <div className="w-full flex flex-col gap-2 px-10 pt-2 h-full ">
        {courses.map((course, index) => (
          <div
            key={index}
            className="fade-in flex flex-col text-[#141414] md:flex-row rounded-md cursor-pointer hover:bg-white bg-[#e1e1e1] transition duration-200 font-bold text-center "
          >
            <div className="p-2 md:w-[120px]  border-b-2 md:border-r-2 border-black">
              {course.Semester} {course.Year}
            </div>
            <div className="p-2 flex-1  border-b-2 md:border-r-2 border-black">
              {course.Department}
              {course.Code} |{" "}
              {course.TITLE.length > 30
                ? course.TITLE.substring(0, 30) + "..."
                : course.TITLE}
            </div>
            <div className="p-2 md:w-[100px] border-b-2 md:border-r-2 border-black">
              A%:{" "}
              <div
                className={`inline grade-${
                  course.A > 66.67
                    ? "good"
                    : course.A > 33.33
                    ? "medium"
                    : "bad"
                }`}
              >
                {course.A}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorCourseList;
