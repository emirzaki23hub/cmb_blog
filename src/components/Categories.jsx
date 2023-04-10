import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@/services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg  pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((item, index) => (
        <Link key={index} href={`category/${item.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3 hover:text-red-700 hover:font-semibold`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
