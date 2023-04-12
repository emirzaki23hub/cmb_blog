import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-12 p-12 rounded-lg bg-opacity-20 bg-blue-700 relative">
      <div className="-top-10 absolute left-0 mx-auto right-0  w-[100px]">
        <Image
          alt={author.name}
          unoptimized
          width={100}
          height={100}
          className="align-middle rounded-full h-auto"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white  mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
