"use client";
import React from "react";
import Image from "next/image";
import infoIcon from "../img/back.png";
import Link from "next/link";

function InfoPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start bg-[#222831] flex-nowrap">
      {/*Header*/}
      <Link href="/">
        <Image
          src={infoIcon}
          className="w-[30px] mt-2 ml-2 cursor-pointer"
          alt="back"
        />
      </Link>
      <div className="w-full h-[200px] text-center justify-center gap-4 flex flex-col shadow-md">
        <h1 className="text-5xl font-bold w-full text-[#76ABAE]">
          Profspective USF
        </h1>
        <h1 className="text-lg font-bold w-full text-[#EEEEEE]">
          No More Second Guessing Your Class Choices
        </h1>
      </div>
      {/*Content*/}
      <div className="max-w-[800px] mx-auto">
        {/* About Section */}
        <div className="p-5">
          <h1 className="text-2xl font-bold w-[200px] text-[#76ABAE] border-b-[3px] border-[#76ABAE]">
            About
          </h1>
          <p className="text-base w-full text-[#EEEEEE]">
            Welcome to <b>Profspective!</b> This site serves as a tool for USF
            students to explore grade distributions for classes and professors
            from past semesters. This information should help students make
            informed choices about their upcoming courses.
          </p>
        </div>
        {/* Privacy Policy Section */}
        <div className="p-5">
          <h1 className="text-2xl font-bold w-[200px] text-[#76ABAE] border-b-[3px] border-[#76ABAE]">
            Privacy Policy
          </h1>
          <p className="text-base w-full text-[#EEEEEE]">
            Profspective does not collect personal information.
          </p>
        </div>
        {/* Terms of Service Section */}
        <div className="p-5">
          <h1 className="text-2xl font-bold w-[200px] text-[#76ABAE] border-b-[3px] border-[#76ABAE]">
            Terms of Service
          </h1>
          <p className="text-base w-full text-[#EEEEEE]">
            By using Profspective, you agree that the site is for informational
            purposes only. We are not responsible for any decisions made based
            on the data provided.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
