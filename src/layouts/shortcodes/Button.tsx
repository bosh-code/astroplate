import React, { type FC } from "react";

type ButtonProps = Readonly<{
  label: string;
  link: string;
  style?: string;
  rel?: string;
}>;

const Button: FC<ButtonProps> = ({ label, link, style, rel }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn mb-4 me-4 hover:text-white dark:hover:text-black hover:no-underline ${
        style === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
    >
      {label}
    </a>
  );
};

export default Button;
