import { ReactNode, forwardRef } from "react";
import { Box } from "./Box";
import flexStyles from "./Flex.module.css";

type FlexProps = {
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, className, ...props }, ref) => {
    const combinedClassName = [flexStyles.flex, className].filter(Boolean).join(" ");

    return (
      <Box
        ref={ref}
        as="div"
        className={combinedClassName}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Flex.displayName = "Flex";

