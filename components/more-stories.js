import { Grid, Styled } from "theme-ui";
import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Styled.h2>Ultime News</Styled.h2>
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
    </section>
  );
}
