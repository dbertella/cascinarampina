import { PostList, PostSingle } from "./types";

const API_URL = process.env.WORDPRESS_API_URL ?? "http://dummy.it";

export async function fetchAPI(query: string, options?: { variables: object }) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const { variables } = options ?? {};

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id: string, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
      query PreviewPost($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          databaseId
          slug
          status
        }
      }
    `,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

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

export async function getAllPostsForHome(preview?: boolean) {
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
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
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
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getPageByUri(slug: string) {
  const data = await fetchAPI(
    `
      fragment PageFields on Page {
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet
          }
        }
      }
      query PageBySlug($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          ...PageFields
          content
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
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
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  return data;
}

export async function getPageAndChildrensByUri(slug: string) {
  const data = await fetchAPI(
    `
      fragment PageFields on Page {
        title
        slug
        date
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet
          }
        }
      }
      query PageBySlug($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          ...PageFields
          content
          children {
            nodes {
              slug
              ... on Page {
                id
                title
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
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
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
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  return data;
}
