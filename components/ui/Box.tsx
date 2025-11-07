import { ReactNode, forwardRef } from "react";

type BoxProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: string;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", variant, children, className, ...props }, ref) => {
    const Component = as as any;
    
    // Handle variant prop - map to CSS classes
    let variantClass = "";
    if (variant) {
      if (variant === "styles.container") {
        variantClass = "container";
      } else {
        variantClass = `variant-${variant.replace(/\./g, "-")}`;
      }
    }

    const combinedClassName = [variantClass, className].filter(Boolean).join(" ");

    return (
      <Component
        ref={ref}
        className={combinedClassName || undefined}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
