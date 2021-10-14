import type { NextPage } from "next";

import useAuth from "~data/hook/useAuth";
import Layout from "~components/Layout/Layout";

const HomePage: NextPage = () => {
  const { user } = useAuth();

  return (
    <Layout title="Home" subtitle="Building an admin template">
      <h3>Content</h3>
    </Layout>
  );
};

export default HomePage;
