import { Grid, Box, Heading } from "./ui";
import dynamic from "next/dynamic";
import PostPreview from "./post-preview";
import { useRef } from "react";
import { Apple } from "./icons/Apple";
import styles from "./more-stories.module.css";

const DynamicComponentWithNoSSR = dynamic(() => import("./pattern"), {
  ssr: false,
});

export default function MoreStories({ posts, title }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const AnyComponent = DynamicComponentWithNoSSR as any;
  return (
    <Box
      className={styles.container}
      ref={ref}
    >
      <AnyComponent parentRef={ref}>
        {(index: number) => (
          <Apple className={index === 7 ? styles.iconActive : styles.icon} />
        )}
      </AnyComponent>

      <Box
        as="section"
        variant="styles.container"
        className={styles.section}
      >
        <Heading as="h2" className={styles.heading}>
          {title}
        </Heading>
        <Grid columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]} gap={3}>
          {posts.map(({ node }: any) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
