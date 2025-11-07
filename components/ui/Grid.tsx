import { ReactNode, forwardRef } from "react";
import { Box } from "./Box";
import gridStyles from "./Grid.module.css";

type GridProps = {
  columns?: string | string[];
  gap?: number | number[];
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns, gap, children, className, style: propStyle, ...props }, ref) => {
    // Build data attributes and inline styles for responsive columns
    const dataAttrs: Record<string, string> = {};
    const style: React.CSSProperties & {
      "--grid-mobile"?: string;
      "--grid-tablet"?: string;
      "--grid-desktop"?: string;
    } = {};
    
    if (Array.isArray(columns)) {
      if (columns[0]) {
        dataAttrs["data-columns-mobile"] = columns[0];
        style["--grid-mobile"] = columns[0];
      }
      if (columns[1]) {
        dataAttrs["data-columns-tablet"] = columns[1];
        style["--grid-tablet"] = columns[1];
      }
      if (columns[2]) {
        dataAttrs["data-columns-desktop"] = columns[2];
        style["--grid-desktop"] = columns[2];
      }
    } else if (columns) {
      dataAttrs["data-columns"] = columns;
      style.gridTemplateColumns = columns;
    }

    // Build gap - apply via inline style for reliability
    if (gap !== undefined) {
      const gapValue = Array.isArray(gap) ? gap[0] : gap;
      if (gapValue !== undefined) {
        // Use pixel values directly for better browser support
        const spaceMap: Record<number, string> = {
          0: "0",
          1: "4px",
          2: "8px",
          3: "16px",
          4: "32px",
          5: "64px",
        };
        style.gap = spaceMap[gapValue] || `${gapValue * 4}px`;
      }
    }

    // Merge with any style prop passed in
    const mergedStyle = { ...style, ...propStyle };

    const combinedClassName = [gridStyles.grid, className].filter(Boolean).join(" ");

    return (
      <Box
        ref={ref}
        as="div"
        className={combinedClassName}
        style={mergedStyle}
        {...dataAttrs}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Grid.displayName = "Grid";

