import type { NextPage } from "next";
import Head from "next/head";

import Layout from "~components/Layout/Layout";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Template</title>
        <meta name="description" content="Admin template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Home" subtitle="Building a admin template">
        <h3>Content</h3>
      </Layout>
    </>
  );
};

export default HomePage;
