import React from "react";

import useAppData from "~data/hook/useAppData";
import Menu from "~components/Menu/Menu";
import Header from "~components/Header/Header";
import Content from "~components/Content/Content";
import AuthGuard from "~components/Auth/AuthGuard/AuthGuard";
// import authGuard from "~functions/auth-guard";

interface LayoutProps {
  title: string;
  subtitle: string;
}

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const { theme } = useAppData();

  // podemos chamar authGuard como função:
  // return authGuard(<div ...></div>);

  return (
    <AuthGuard>
      <div className={`${theme} flex h-screen w-screen`}>
        <Menu />
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Layout;
