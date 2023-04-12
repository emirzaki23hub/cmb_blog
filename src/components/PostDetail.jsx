import moment from "moment";
import React from "react";

const PostDetail = ({ posts }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg mb-8 lg:p-8 pb-12 ">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={posts.featuredImage.url}
          alt={posts.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0 ">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              height="45px"
              width="45px"
              className="align-middle rounded-full"
              alt={posts.author?.name}
              src={posts.author?.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {posts.author?.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(posts.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <h1 className="text-3xl mb-8 font-semibold">{posts.title}</h1>
        {console.log(posts.content.raw)}
        {posts.content.raw.children.map((item, index) => {
          const children = item.children.map((itemChildren, itemIndex) =>
            getContentFragment(itemIndex, itemChildren.text, itemChildren)
          );
          return getContentFragment(index, children, item, item.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
