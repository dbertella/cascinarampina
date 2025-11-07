import { ReactNode, forwardRef } from "react";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, className, ...props }, ref) => {
    return (
      <NextLink href={href} ref={ref} className={className} {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
