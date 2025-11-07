import styles from "./post-body.module.css";

type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div
      className={styles.postBody}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
