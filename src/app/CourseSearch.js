"use client";

const SearchComponent = ({
  handleSearch,
  department,
  setDepartment,
  courseCode,
  setCourseCode,
}) => {
  return (
    <div className="w-full rounded-md flex flex-row gap-2 justify-center h-full px-4 ">
      <div className="max-w-[200px] flex-1 h-[60px]">
        <label
          htmlFor="department"
          className="block text-[18px] font-medium text-[#EEEEEE]"
        >
          Department
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full h-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="ABC"
        />
      </div>
      <div className="max-w-[200px] flex-1  h-[60px]">
        <label
          htmlFor="courseCode"
          className="block text-[18px] font-medium text-[#EEEEEE]"
        >
          Course Code
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full h-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="1234"
        />
      </div>
      <button
        disabled={department == "" || courseCode == ""}
        className={` my-auto h-[40px] ${
          department == "" || courseCode == ""
            ? "bg-gray-500 cursor-default disabled hover:bg-gray-600"
            : "bg-blue-500 hover:bg-blue-600"
        } font-semibold text-[18px] px-4 text-white rounded-lg p-2 transition duration-300`}
        onClick={(e) => handleSearch(department, courseCode)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
