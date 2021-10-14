import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title = (props: React.PropsWithChildren<TitleProps>) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
        {props.title}
      </h1>
      <h2 className="font-light text-sm text-gray-600 dark:text-gray-300">
        {props.subtitle}
      </h2>
    </div>
  );
};

export default Title;
