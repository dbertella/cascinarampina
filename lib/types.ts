export type PostList = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
};

export type PostFields = PostList & {
  content: string;
};

export type PageFields = {
  title: string;
  slug: string;
  date: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  children?: {
    edges: {
      node: {
        slug: string;
      };
    }[];
  };
};
