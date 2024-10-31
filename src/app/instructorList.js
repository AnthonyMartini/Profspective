// InstructorSearch.js
"use client";

import loadingGif from "./img/loading.gif";
import Image from "next/image";

function InstructorList({
  instructors,
  onSelectInstructor,
  selected,
  loading,
}) {
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
  if (instructors.length == 0) {
    return (
      <div className="w-[50%] h-full items-center flex">
        <h1 className=" mt-16 text-xl font-normal w-full text-center text-[#76ABAE] ">
          Enter a professor's last name to see past data.
        </h1>
      </div>
    );
  }
  return (
    <div className="  w-[50%] max-w-[800px] ">
      <h1 className="text-2xl font-bold w-full text-center text-[#76ABAE] ">
        Professors:
      </h1>
      <div className="w-full flex flex-col gap-2 px-10 pt-2">
        {instructors.map((instructor) => (
          <div
            key={instructor.instructor}
            className={`fade-in p-2 rounded-md cursor-pointer ${
              selected == instructor.instructor
                ? "bg-blue-400"
                : " hover:bg-gray-50 bg-gray-300"
            } transition duration-200 font-bold text-center`}
            onClick={() => onSelectInstructor(instructor.instructor)}
          >
            {instructor.instructor}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorList;
