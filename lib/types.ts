type PostListItem = {
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

type MediaImage = {
  id: string;
  uri: string;
  title: string;
  srcSet: string;
  sourceUrl: string;
};

export type PostList = {
  edges: {
    node: PostListItem;
  }[];
};

export type PostFields = PostListItem & {
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

export type ProductFields = {
  id: string;
  name: string;
  productId: string;
  averageRating: string;
  slug: string;
  description: string;
  image: MediaImage;
  price: string;
  onSale: boolean;
  type: string;
  productCategories: {
    edges: CateogryListItem[];
  };
};

export type CateogryListItem = {
  node: {
    name: string;
    slug: string;
    image: {
      sourceUrl: string;
    };
    products: {
      edges: {
        node: ProductFields;
      }[];
    };
  };
};
