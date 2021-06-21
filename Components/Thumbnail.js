import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ id, value }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className=" group cursor-pointer tracking-widest p-3 transition-all duration-200 ease-in-out transform sm:hover:scale-105 sm:hover:z-index-100"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${value.backdrop_path || value.poster_path}` ||
          `${BASE_URL}${value.poster.path}`
        }
      ></Image>
      <div className="p-2">
        <p title={value.overview} className="truncate max-w-md">
          {value.overview}
        </p>

        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold  ">
          {value.title || value.original_name}{" "}
        </h2>

        <p className="flex opacity-0 group-hover:opacity-100 items-center">
          {value.release_date || `${value.first_air_date} `} .{""}
          <ThumbUpIcon className="h-5 mx-2" />
          {value.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
