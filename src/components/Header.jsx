import { getCategories } from "@/services";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-gray-700">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((item) => (
            <Link key={item.slug} href={`/category/${item.slug}`}>
              <span className="md:float-right mt-2 align-middle text-gray-700 ml-4 font-semibold cursor-pointer hover:text-red-700">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
