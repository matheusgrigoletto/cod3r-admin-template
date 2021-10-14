import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import useAuth from "~data/hook/useAuth";
import { COOKIE_NAME } from "~data/context/AuthContext";

const authGuard = (jsx: JSX.Element) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const renderContent = () => {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (!document.cookie?.includes("${COOKIE_NAME}")) {
            window.location.href="/auth";
          }
        `,
            }}
          ></script>
        </Head>
        {jsx}
      </>
    );
  };

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <p>Loading...</p>
      </div>
    );
  };

  if (!loading && user?.email) {
    return renderContent();
  }

  if (loading) {
    return renderLoading();
  }

  router.push("/auth");

  return null;
};

export default authGuard;
