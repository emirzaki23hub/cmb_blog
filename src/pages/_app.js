// import { Layout } from "@/components";
import { Layout } from "@/components";
import "@/styles/globals.scss";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
