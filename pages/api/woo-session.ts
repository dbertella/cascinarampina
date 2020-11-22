import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`;
export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Cart {
          cart {
            total
          }
        }
      `,
      variables: {},
    }),
  });

  const session = `${response.headers.get("woocommerce-session")}`;
  res.statusCode = 200;
  res.json({ session });
};
