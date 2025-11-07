import { ReactNode, forwardRef } from "react";
import { Box } from "./Box";

type CardProps = {
  variant?: "primary" | "compact";
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    const variantClass = variant === "primary" ? "card-primary" : "card-compact";
    const combinedClassName = `${variantClass} ${className || ""}`.trim();

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

Card.displayName = "Card";

