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
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const Details = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail posts={posts} />
          <Author author={posts?.author} />
          <CommentsForm slug={posts.slug} />
          <Comments slug={posts.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget
              slug={posts.slug}
              categories={posts.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
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
