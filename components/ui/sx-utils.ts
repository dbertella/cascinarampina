import { CSSProperties } from "react";

// Map theme-ui color names to CSS variables
const colorMap: Record<string, string> = {
  text: "var(--color-text)",
  background: "var(--color-background)",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  muted: "var(--color-muted)",
  "text-transparent": "var(--color-text-transparent)",
  "background-transparent": "var(--color-background-transparent)",
  "primary-transparent": "var(--color-primary-transparent)",
  "secondary-transparent": "var(--color-secondary-transparent)",
  "muted-transparent": "var(--color-muted-transparent)",
  "dark-grey": "var(--color-dark-grey)",
  "light-grey": "var(--color-light-grey)",
  // CamelCase variants
  textTransparent: "var(--color-text-transparent)",
  backgroundTransparent: "var(--color-background-transparent)",
  primaryTransparent: "var(--color-primary-transparent)",
  secondaryTransparent: "var(--color-secondary-transparent)",
  mutedTransparent: "var(--color-muted-transparent)",
  darkGrey: "var(--color-dark-grey)",
  lightGrey: "var(--color-light-grey)",
};

// Map theme-ui spacing scale to CSS variables
const spacingMap: Record<number, string> = {
  0: "var(--space-0)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  7: "var(--space-7)",
  8: "var(--space-8)",
};

// Map theme-ui font sizes to CSS variables
const fontSizeMap: Record<number, string> = {
  0: "var(--font-size-0)",
  1: "var(--font-size-1)",
  2: "var(--font-size-2)",
  3: "var(--font-size-3)",
  4: "var(--font-size-4)",
  5: "var(--font-size-5)",
  6: "var(--font-size-6)",
  7: "var(--font-size-7)",
  8: "var(--font-size-8)",
};

// Convert theme-ui shorthand to CSS property
function convertShorthand(key: string): string {
  const shorthandMap: Record<string, string> = {
    m: "margin",
    mt: "marginTop",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
    mx: "marginLeft", // Will be handled separately
    my: "marginTop", // Will be handled separately
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    px: "paddingLeft", // Will be handled separately
    py: "paddingTop", // Will be handled separately
    bg: "backgroundColor",
  };

  return shorthandMap[key] || key;
}

// Convert theme-ui value to CSS value
function convertValue(key: string, value: any): any {
  // Handle color values
  if (key.includes("color") || key === "backgroundColor" || key === "bg" || key === "fill") {
    if (typeof value === "string" && colorMap[value]) {
      return colorMap[value];
    }
  }

  // Handle spacing values
  if (
    key.includes("margin") ||
    key.includes("padding") ||
    key.includes("gap") ||
    key === "m" ||
    key === "p" ||
    key === "mt" ||
    key === "mr" ||
    key === "mb" ||
    key === "ml" ||
    key === "mx" ||
    key === "my" ||
    key === "pt" ||
    key === "pr" ||
    key === "pb" ||
    key === "pl" ||
    key === "px" ||
    key === "py"
  ) {
    if (typeof value === "number" && spacingMap[value] !== undefined) {
      return spacingMap[value];
    }
  }

  // Handle font size
  if (key === "fontSize" || key === "font-size") {
    if (typeof value === "number" && fontSizeMap[value] !== undefined) {
      return fontSizeMap[value];
    }
  }

  // Handle z-index
  if (key === "zIndex" || key === "z-index" || key === "z") {
    return typeof value === "number" ? value : value;
  }

  // Handle flexDirection
  if (key === "flexDirection" || key === "flex-direction") {
    return value;
  }

  // Handle justifyContent
  if (key === "justifyContent" || key === "justify-content") {
    return value;
  }

  // Handle alignItems
  if (key === "alignItems" || key === "align-items") {
    return value;
  }

  // Handle objectFit
  if (key === "objectFit" || key === "object-fit") {
    return value;
  }

  // Handle textTransform
  if (key === "textTransform" || key === "text-transform") {
    return value;
  }

  // Handle whiteSpace
  if (key === "whiteSpace" || key === "white-space") {
    return value;
  }

  // Handle wordSpacing
  if (key === "wordSpacing" || key === "word-spacing") {
    return value;
  }

  // Handle fontFamily
  if (key === "fontFamily" || key === "font-family") {
    const fontMap: Record<string, string> = {
      body: "var(--font-body)",
      heading: "var(--font-heading)",
      monospace: "var(--font-monospace)",
      cascinarampina: "var(--font-cascinarampina)",
    };
    if (typeof value === "string" && fontMap[value]) {
      return fontMap[value];
    }
    return value;
  }

  // Return value as-is if it's already a valid CSS value
  return value;
}


// Convert sx prop to inline styles
// Note: Media queries can't be applied via inline styles, so we only return the base (mobile) value
export function sxToStyles(sx: Record<string, any>): CSSProperties {
  const baseStyles: CSSProperties = {};

  for (const [key, value] of Object.entries(sx)) {
    // Skip media queries and nested objects
    if (key.startsWith("@media") || (typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date))) {
      continue;
    }

    // For responsive arrays, use the first (mobile) value
    const actualValue = Array.isArray(value) ? value[0] : value;
    
    if (actualValue === null || actualValue === undefined) {
      continue;
    }

    const cssKey = convertShorthand(key);
    const cssValue = convertValue(key, actualValue);

    // Handle shorthand properties
    if (cssKey === "mx") {
      baseStyles.marginLeft = cssValue;
      baseStyles.marginRight = cssValue;
    } else if (cssKey === "my") {
      baseStyles.marginTop = cssValue;
      baseStyles.marginBottom = cssValue;
    } else if (cssKey === "px") {
      baseStyles.paddingLeft = cssValue;
      baseStyles.paddingRight = cssValue;
    } else if (cssKey === "py") {
      baseStyles.paddingTop = cssValue;
      baseStyles.paddingBottom = cssValue;
    } else if (cssKey === "bg") {
      baseStyles.backgroundColor = cssValue;
    } else if (cssKey === "z") {
      baseStyles.zIndex = cssValue;
    } else {
      // Convert kebab-case to camelCase for CSS properties
      const camelKey = cssKey.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      baseStyles[camelKey as keyof CSSProperties] = cssValue;
    }
  }

  return baseStyles;
}

