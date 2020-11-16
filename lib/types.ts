type Seo = {
  canonical: string;
  title: string;
  metaDesc: string;
};

export type PostListItem = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      srcSet: string;
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

export type PostSingle = PostListItem & {
  content: string;
  seo: Seo;
};

export type PageSingle = {
  title: string;
  slug: string;
  date: string;
  content: string;
  seo: Seo;
  featuredImage: {
    node: {
      sourceUrl: string;
      srcSet: string;
    };
  };
  pageElements?: {
    pageGallery: {
      image: {
        sourceUrl: string;
        thumb: string;
        srcSet: string;
        altText: string;
      };
    }[];
  };
  children?: {
    nodes: {
      slug: string;
      id: string;
      title: string;
      featuredImage: {
        node: {
          sourceUrl: string;
          srcSet: string;
        };
      };
    }[];
  };
};

export type ProductListItem = {
  id: string;
  name: string;
  slug: string;
  price: string;
  image: MediaImage;
};

export type ProductSingle = {
  id: string;
  name: string;
  productId: string;
  averageRating: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: MediaImage;
  price: string;
  onSale: boolean;
  type: string;
  seo: Seo;
  productCategories: {
    edges: CategoryListItem[];
  };
  related: {
    edges: {
      node: ProductListItem;
    }[];
  };
};

export type CategorySingle = {
  id: string;
  name: string;
  slug: string;
  description: string;
  canonical: string;
  image: {
    id: string;
    sourceUrl: string;
    srcSet: string;
  };
  products: {
    edges: {
      node: ProductListItem;
    }[];
  };
};

export type CategoryListItem = {
  node: {
    id: string;
    name: string;
    slug: string;
    image: {
      id: string;
      sourceUrl: string;
      srcSet: string;
    };
    products: {
      edges: {
        node: ProductListItem;
      }[];
    };
  };
};
