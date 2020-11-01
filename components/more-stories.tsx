import { Grid, Box, Heading } from "theme-ui";
import dynamic from "next/dynamic";
import PostPreview from "./post-preview";
import { useRef } from "react";

const DynamicComponentWithNoSSR = dynamic(() => import("./pattern"), {
  ssr: false,
});

export default function MoreStories({ posts }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Box
      sx={{
        bg: "muted",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
      ref={ref}
    >
      <DynamicComponentWithNoSSR parentRef={ref} />

      <Box
        as="section"
        variant="styles.container"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Heading as="h2" sx={{ mb: 3 }}>
          Cosa sta succedendo
        </Heading>
        <Grid columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]} gap={2}>
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
