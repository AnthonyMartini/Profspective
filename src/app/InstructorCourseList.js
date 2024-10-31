// CoursesList.js
"use client";

function InstructorCourseList({ courses, loading }) {
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
            className="fade-in flex flex-col md:flex-row rounded-md cursor-pointer hover:bg-gray-50 bg-gray-300 transition duration-200 font-bold text-center "
          >
            <div className="p-2 md:w-[120px] text-blue-800 border-b-2 md:border-r-2 border-black">
              {course.Semester} {course.Year}
            </div>
            <div className="p-2 flex-1 text-blue-800 border-b-2 md:border-r-2 border-black">
              {course.Department}
              {course.Code} |{" "}
              {course.TITLE.length > 30
                ? course.TITLE.substring(0, 30) + "..."
                : course.TITLE}
            </div>
            <div className="p-2 md:w-[100px] text-blue-800 border-b-2 md:border-r-2 border-black">
              A%: {course.A}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorCourseList;
