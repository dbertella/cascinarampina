import { fetchAPI } from "lib";
import { PostList, PostSingle } from "lib/types";

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                  srcSet
                }
              }
            }
          }
        }
      }
    `
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug: string) {
  const data: { post: PostSingle; posts: PostList } = await fetchAPI(
    `
      fragment AuthorFields on User {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        seo {
          canonical
          title
          metaDesc
        }
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet
          }
        }
        author {
          node {
            ...AuthorFields
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              ...PostFields
            }
          }
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(
    ({ node }: PostList["edges"][0]) => node.slug !== slug
  );
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 3) data.posts.edges.pop();

  data.post.seo.canonical =
    data.post.seo.canonical || `${process.env.SITE_URL}/news/${slug}`;

  return data;
}
