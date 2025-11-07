import { ReactNode, forwardRef } from "react";
import { Box } from "./Box";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", children, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={className}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Heading.displayName = "Heading";

