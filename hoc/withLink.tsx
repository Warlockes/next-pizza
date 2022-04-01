import Link from "next/link";
import React from "react";

export const withLink =
  <T,>(WrappedComponent: React.ComponentType<T>, path: string) =>
  (props: T) => {
    return (
      <Link href={path} passHref>
        <WrappedComponent {...props} />
      </Link>
    );
  };
