import React from "react";
import Link from "next/link";

interface MenuItemProps {
  label: string;
  icon: JSX.Element;
  url?: string;
  onClick?: (event: any) => void;
  className?: string;
}

const MenuItem = (props: MenuItemProps) => {
  const renderButton = () => (
    <button
      type="button"
      className={`
        flex flex-col justify-center items-center
        w-20 h-20
        bg-none border-none
        text-gray-600 dark:text-gray-200
        ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
      <span className="text-xs font-light">{props.label}</span>
    </button>
  );

  const renderLink = () => (
    <Link href={props.url!}>
      <a
        className={`
        flex flex-col justify-center items-center
        w-20 h-20 
        text-gray-600 dark:text-gray-200
        ${props.className}`}
      >
        {props.icon}
        <span className="text-xs font-light">{props.label}</span>
      </a>
    </Link>
  );

  return (
    <li className="hover:bg-gray-100 dark:hover:bg-gray-800">
      {props.url ? renderLink() : renderButton()}
    </li>
  );
};

export default MenuItem;
