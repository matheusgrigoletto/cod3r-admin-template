import React from "react";

const Content = (props: React.PropsWithChildren<{}>) => {
  return <div className="mt-7 dark:text-gray-100">{props.children}</div>;
};

export default Content;
