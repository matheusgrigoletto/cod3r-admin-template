import type { NextPage } from "next";
import Head from "next/head";

import useAuth from "~data/hook/useAuth";
import Layout from "~components/Layout/Layout";

const HomePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Admin Template</title>
        <meta name="description" content="Admin template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Home" subtitle="Building a admin template">
        <h3>Content</h3>
        <pre>{JSON.stringify(user)}</pre>
      </Layout>
    </>
  );
};

export default HomePage;
