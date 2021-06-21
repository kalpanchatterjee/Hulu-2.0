import React from "react";
import request from "../Utils/Requests";
import { useRouter } from "next/router";

const Brigde = (props) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex cursor-pointer overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap px-10 sm:px-20 space-x-10 ">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h1
            key={key}
            className=" pr-5 sm:pr-10 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            onClick={() =>
              router.push(`/?genre=${key}`, null, { shallow: false })
            }
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Brigde;
