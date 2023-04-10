import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setData(res));
    } else {
      getRecentPosts().then((res) => setData(res));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg p-8 rounded-lg mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Post" : "Recent Post"}
      </h3>
      {data.map((item, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={item.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs ">
              {moment(item.CreatedAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${item.slug}`} key={item.title} className="">
              <p className="cursor-pointer text-md  hover:text-red-700 hover:font-semibold">
                {item.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
