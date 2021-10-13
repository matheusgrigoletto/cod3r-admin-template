import { PropsWithChildren } from "react";

import useAppData from "~data/hook/useAppData";
import Menu from "~components/Menu/Menu";
import Header from "~components/Header/Header";
import Content from "~components/Content/Content";

interface LayoutProps {
  title: string;
  subtitle: string;
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { theme } = useAppData();

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <Menu />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
