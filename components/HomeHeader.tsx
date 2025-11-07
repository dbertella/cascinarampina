import { MediaImage } from "types";
import { ImageHeader } from "./image-header";
import styles from "./home-header.module.css";

type Props = {
  coverImage?: MediaImage;
};

export function HomeHeader({ coverImage }: Props) {
  return (
    <ImageHeader coverImage={coverImage} height={400}>
      <span className={styles.title}>Cascina Rampina</span>
      <span className={styles.subtitle}>Azienda Agricola</span>
    </ImageHeader>
  );
}
