import React from "react";

import { getPost, getPostDetails } from "../../services";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from "@/components";

const Details = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <PostWidget
            slug={posts.slug}
            categories={posts.categories.map((category) => category.slug)}
          />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Details;

export async function getStaticProps({ params }) {
  const posts = (await getPostDetails(params.slug)) || [];

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
