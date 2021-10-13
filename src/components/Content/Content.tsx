import React, { PropsWithChildren } from "react";

const Content = (props: PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-col mt-7 dark:text-gray-100">
      {props.children}
    </div>
  );
};

export default Content;
