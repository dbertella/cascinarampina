import { ReactNode, forwardRef, AnchorHTMLAttributes } from "react";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  className?: string;
};

// Simple anchor component for styling anchor tags
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a ref={ref} className={className} {...props}>
        {children}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";

