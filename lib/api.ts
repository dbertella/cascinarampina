const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`;

export async function fetchAPI(query: string, options?: { variables: object }) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const session = process.browser ? localStorage.getItem("woo-session") : null;
  if (session) {
    console.log(session);
    headers["woocommerce-session"] = `Session ${session}`;
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
