// InstructorSearch.js
"use client";
import React, { useState } from "react";

function InstructorSearch({ searchInstructors, searchTerm, setSearchTerm }) {
  return (
    <div className="w-full rounded-md flex flex-row gap-2 justify-center h-full px-4">
      <div className="max-w-[408px] flex-1 h-[60px]">
        <label
          htmlFor="department"
          className="block text-[18px] font-medium text-[#EEEEEE]"
        >
          Instructor
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full h-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an instructor"
        />
      </div>
      <button
        disabled={searchTerm == ""}
        className={`my-auto h-[40px] ${
          searchTerm == ""
            ? "bg-gray-500 cursor-default disabled"
            : "bg-blue-500 hover:bg-blue-600"
        } font-semibold text-[18px] px-4 text-white rounded-lg p-2  transition duration-300`}
        onClick={(e) => searchInstructors(searchTerm)}
      >
        Search
      </button>
    </div>
  );
}

export default InstructorSearch;
