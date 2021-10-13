import { PropsWithChildren } from "react";
import ThemeSwitcher from "~components/ThemeSwitcher/ThemeSwitcher";

import Title from "~components/Title/Title";
import useAppData from "~data/hook/useAppData";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = (props: PropsWithChildren<HeaderProps>) => {
  const { theme, toggleTheme } = useAppData();

  return (
    <>
      <div className="flex">
        <Title title={props.title} subtitle={props.subtitle} />
        <div className="flex flex-grow justify-end">
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </>
  );
};

export default Header;
