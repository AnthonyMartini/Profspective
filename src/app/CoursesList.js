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
            className="fade-in flex flex-row rounded-md cursor-pointer hover:bg-white bg-[#e1e1e1] transition duration-200 font-bold text-center"
          >
            <div className="p-2 w-[110px]border-r-2 border-black">
              {course.Semester} {course.Year}
            </div>
            <div className="p-2 flex-1 border-r-2 border-black">
              {course.INSTRUCTOR}
            </div>
            <div className="p-2 w-[100px] border-r-2 border-black">
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

export default CoursesList;
