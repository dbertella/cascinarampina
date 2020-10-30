import { Grid, Box, Heading } from "theme-ui";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <Box sx={{ bg: "coffee", p: 4 }}>
      <Box as="section" variant="styles.container">
        <Heading as="h2" sx={{ mb: 3 }}>Ultime News</Heading>
        <Grid columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]} gap={2}>
          {posts.map(({ node }) => (
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
