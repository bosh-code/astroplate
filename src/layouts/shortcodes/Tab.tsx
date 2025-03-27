import React, { type FC, type ReactNode } from "react";

type TapProps = Readonly<{
  name: string;
  children: ReactNode;
}>;

const Tab: FC<TapProps> = ({ name, children }) => {
  return <div data-name={name}>{children}</div>;
};

export default Tab;
