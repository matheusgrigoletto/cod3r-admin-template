import React from "react";

import { MoonIcon, SunIcon } from "~components/icons/icons";

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const lightBtn = (
    <button
      type="button"
      onClick={props.toggleTheme}
      className={`
      hidden
      sm:flex items-center
      p-1 rounded-full
      w-14 lg:w-24 h-8
      bg-gradient-to-r from-yellow-300 to-yellow-600
      cursor-pointer
      focus:ring-0 focus:outline-none
    `}
    >
      <div
        className={`
        flex items-center justify-center
        h-6 w-6
        bg-white
        text-yellow-600
        rounded-full
      `}
      >
        {SunIcon(4)}
      </div>
      <div
        className={`
        hidden lg:flex items-center ml-3
        text-white font-light
      `}
      >
        <span className="text-sm">Light</span>
      </div>
    </button>
  );

  const darkBtn = (
    <button
      type="button"
      onClick={props.toggleTheme}
      className={`
      hidden
      sm:flex items-center justify-end
      p-1 rounded-full
      w-14 lg:w-24 h-8
      bg-gradient-to-r from-gray-500 to-gray-900
      cursor-pointer
      focus:ring-0 focus:outline-none
    `}
    >
      <div
        className={`
        hidden lg:flex items-center mr-3
        text-gray-400 font-light
      `}
      >
        <span className="text-sm">Dark</span>
      </div>
      <div
        className={`
        flex items-center justify-center
        h-6 w-6
        bg-black
        text-yellow-300
        rounded-full
      `}
      >
        {MoonIcon(4)}
      </div>
    </button>
  );

  return props.theme === "dark" ? lightBtn : darkBtn;
};

export default ThemeSwitcher;
