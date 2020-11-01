export type PostList = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
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
    };
  };
  children?: {
    nodes: {
      slug: string;
      id: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    }[];
  };
};
