import { MediaImage } from "types";
import { PLACEHOLDER_IMAGE } from "lib";
import { Stroke } from "components/icons/Stroke";
import { ReactNode } from "react";
import styles from "./image-header.module.css";

type Props = {
  title?: string;
  coverImage?: MediaImage;
  children?: ReactNode;
  height?: string | number;
};

export function ImageHeader({
  title,
  coverImage,
  height = 300,
  children,
}: Props) {
  // Convert height to CSS custom property or use default
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  const containerStyle = height !== 300 ? { '--header-height': heightValue } as React.CSSProperties : undefined;
  
  return (
    <div className={styles.container} style={containerStyle}>
      <img
        className={styles.image}
        src={coverImage?.sourceUrl ?? PLACEHOLDER_IMAGE}
        srcSet={coverImage?.srcSet}
        alt={title || ""}
      />

      <h1 className={styles.heading}>
        <Stroke className={styles.stroke} />
        {children ?? title}
      </h1>
    </div>
  );
}
