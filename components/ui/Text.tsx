import { ReactNode, forwardRef } from "react";
import { Box } from "./Box";

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
  [key: string]: any;
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = "p", children, className, dangerouslySetInnerHTML, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={className}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";

