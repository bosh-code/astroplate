import React, { type FC, type SVGProps } from "react";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa6";
// import * as AiIcons from "react-icons/ai";
// import * as BsIcons from "react-icons/bs";
// import * as FiIcons from "react-icons/fi";
// import * as Io5Icons from "react-icons/io5";
// import * as RiIcons from "react-icons/ri";
// import * as TbIcons from "react-icons/tb";
// import * as TfiIcons from "react-icons/tfi";

type IconMap = Record<string, IconType>;

type DynamicIconProps = Readonly<{
  icon: string;
  className?: string;
}> &
  SVGProps<SVGSVGElement>;

const ICON_LIBRARIES: Record<string, IconMap> = {
  fa: FaIcons,
};

const DynamicIcon: FC<DynamicIconProps> = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : undefined;

  if (!Icon) {
    return <span className="text-sm">Icon not found</span>;
  }

  return <Icon {...props} />;
};

const getIconLibrary = (icon: string): IconMap | undefined => {
  const libraryKey = icon.substring(0, 2).toLowerCase();
  return ICON_LIBRARIES[libraryKey];
};

export default DynamicIcon;
