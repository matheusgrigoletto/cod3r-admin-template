import React from "react";

import useAppData from "~data/hook/useAppData";
import Avatar from "~components/Avatar/Avatar";
import ThemeSwitcher from "~components/ThemeSwitcher/ThemeSwitcher";
import Title from "~components/Title/Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = (props: React.PropsWithChildren<HeaderProps>) => {
  const { theme, toggleTheme } = useAppData();

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <Avatar className="ml-3" />
      </div>
    </div>
  );
};

export default Header;
