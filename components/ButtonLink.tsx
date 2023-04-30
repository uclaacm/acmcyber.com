import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getBlogPaths } from "./BlogUtils";
import { GetStaticPathsContext } from "next";

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(props.href);
  };
  return (
    <Link href={props.href}>
      <button onClick={handleClick} className={props.className}>
        {props.children}
      </button>
    </Link>
  );
}

ButtonLink.defaultProps = {
  href: "",
  className: "",
};
