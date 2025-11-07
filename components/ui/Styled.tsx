import { ReactNode, forwardRef } from "react";
import { Heading } from "./Heading";

type StyledHeadingProps = {
  sx?: Record<string, any>;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

// Create styled heading components
const createStyledHeading = (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  return forwardRef<HTMLHeadingElement, StyledHeadingProps>(
    (props, ref) => <Heading ref={ref} as={as} {...props} />
  );
};

export const Styled = {
  h1: createStyledHeading("h1"),
  h2: createStyledHeading("h2"),
  h3: createStyledHeading("h3"),
  h4: createStyledHeading("h4"),
  h5: createStyledHeading("h5"),
  h6: createStyledHeading("h6"),
};

// Set display names
Styled.h1.displayName = "Styled.h1";
Styled.h2.displayName = "Styled.h2";
Styled.h3.displayName = "Styled.h3";
Styled.h4.displayName = "Styled.h4";
Styled.h5.displayName = "Styled.h5";
Styled.h6.displayName = "Styled.h6";

