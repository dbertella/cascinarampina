export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /**
   * Entry point to get all settings for the site
   * @deprecated 
   */
  allSettings?: Maybe<Settings>;
  /**
   * The cart object
   * @deprecated 
   */
  cart?: Maybe<Cart>;
  /**
   * The cart object
   * @deprecated 
   */
  cartFee?: Maybe<CartFee>;
  /**
   * The cart object
   * @deprecated 
   */
  cartItem?: Maybe<CartItem>;
  /**
   * Connection between the RootQuery type and the category type
   * @deprecated 
   */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  category?: Maybe<Category>;
  /**
   * Returns a Comment
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Connection between the RootQuery type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<RootQueryToCommentConnection>;
  /**
   * A node used to manage content
   * @deprecated 
   */
  contentNode?: Maybe<ContentNode>;
  /**
   * Connection between the RootQuery type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /**
   * Fetch a Content Type node by unique Identifier
   * @deprecated 
   */
  contentType?: Maybe<ContentType>;
  /**
   * Connection between the RootQuery type and the ContentType type
   * @deprecated 
   */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /**
   * A coupon object
   * @deprecated 
   */
  coupon?: Maybe<Coupon>;
  /**
   * Connection between the RootQuery type and the Coupon type
   * @deprecated 
   */
  coupons?: Maybe<RootQueryToCouponConnection>;
  /**
   * A customer object
   * @deprecated 
   */
  customer?: Maybe<Customer>;
  /**
   * Connection between the RootQuery type and the Customer type
   * @deprecated 
   */
  customers?: Maybe<RootQueryToCustomerConnection>;
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>;
  /**
   * A simple product object
   * @deprecated 
   */
  externalProduct?: Maybe<ExternalProduct>;
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>;
  /**
   * A simple product object
   * @deprecated 
   */
  groupProduct?: Maybe<GroupProduct>;
  /**
   * An object of the mediaItem Type. 
   * @deprecated 
   */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /**
   * Connection between the RootQuery type and the mediaItem type
   * @deprecated 
   */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /**
   * A WordPress navigation menu
   * @deprecated 
   */
  menu?: Maybe<Menu>;
  /**
   * A WordPress navigation menu item
   * @deprecated 
   */
  menuItem?: Maybe<MenuItem>;
  /**
   * Connection between the RootQuery type and the MenuItem type
   * @deprecated 
   */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /**
   * Connection between the RootQuery type and the Menu type
   * @deprecated 
   */
  menus?: Maybe<RootQueryToMenuConnection>;
  /**
   * Fetches an object given its ID
   * @deprecated 
   */
  node?: Maybe<Node>;
  /** @deprecated  */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /**
   * A order object
   * @deprecated 
   */
  order?: Maybe<Order>;
  /**
   * Connection between the RootQuery type and the Order type
   * @deprecated 
   */
  orders?: Maybe<RootQueryToOrderConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  paPeso?: Maybe<PaPeso>;
  /**
   * Connection between the RootQuery type and the paPeso type
   * @deprecated 
   */
  paPesos?: Maybe<RootQueryToPaPesoConnection>;
  /**
   * An object of the page Type. 
   * @deprecated 
   */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /**
   * Connection between the RootQuery type and the page type
   * @deprecated 
   */
  pages?: Maybe<RootQueryToPageConnection>;
  /**
   * Connection between the RootQuery type and the PaymentGateway type
   * @deprecated 
   */
  paymentGateways?: Maybe<RootQueryToPaymentGatewayConnection>;
  /**
   * A WordPress plugin
   * @deprecated 
   */
  plugin?: Maybe<Plugin>;
  /**
   * Connection between the RootQuery type and the Plugin type
   * @deprecated 
   */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /**
   * An object of the post Type. 
   * @deprecated 
   */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /**
   * A 0bject
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
  /**
   * Connection between the RootQuery type and the postFormat type
   * @deprecated 
   */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /**
   * Connection between the RootQuery type and the post type
   * @deprecated 
   */
  posts?: Maybe<RootQueryToPostConnection>;
  /**
   * A product object
   * @deprecated 
   */
  product?: Maybe<Product>;
  /**
   * Connection between the RootQuery type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<RootQueryToProductCategoryConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  productCategory?: Maybe<ProductCategory>;
  /**
   * A 0bject
   * @deprecated 
   */
  productTag?: Maybe<ProductTag>;
  /**
   * Connection between the RootQuery type and the productTag type
   * @deprecated 
   */
  productTags?: Maybe<RootQueryToProductTagConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  productType?: Maybe<ProductType>;
  /**
   * Connection between the RootQuery type and the productType type
   * @deprecated 
   */
  productTypes?: Maybe<RootQueryToProductTypeConnection>;
  /**
   * A product variation object
   * @deprecated 
   */
  productVariation?: Maybe<ProductVariation>;
  /**
   * Connection between the RootQuery type and the Product type
   * @deprecated 
   */
  products?: Maybe<RootQueryToProductConnection>;
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>;
  /**
   * A refund object
   * @deprecated 
   */
  refund?: Maybe<Refund>;
  /**
   * Connection between the RootQuery type and the Refund type
   * @deprecated 
   */
  refunds?: Maybe<RootQueryToRefundConnection>;
  /**
   * Connection between the RootQuery type and the EnqueuedScript type
   * @deprecated 
   */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /**
   * Connection between the RootQuery type and the EnqueuedStylesheet type
   * @deprecated 
   */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /**
   * Connection between the RootQuery type and the ContentRevisionUnion type
   * @deprecated 
   */
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
  /**
   * Returns seo site data
   * @deprecated 
   */
  seo?: Maybe<SeoConfig>;
  /**
   * A 0bject
   * @deprecated 
   */
  shippingClass?: Maybe<ShippingClass>;
  /**
   * Connection between the RootQuery type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<RootQueryToShippingClassConnection>;
  /**
   * A shipping method object
   * @deprecated 
   */
  shippingMethod?: Maybe<ShippingMethod>;
  /**
   * Connection between the RootQuery type and the ShippingMethod type
   * @deprecated 
   */
  shippingMethods?: Maybe<RootQueryToShippingMethodConnection>;
  /**
   * A simple product object
   * @deprecated 
   */
  simpleProduct?: Maybe<SimpleProduct>;
  /**
   * A 0bject
   * @deprecated 
   */
  tag?: Maybe<Tag>;
  /**
   * Connection between the RootQuery type and the tag type
   * @deprecated 
   */
  tags?: Maybe<RootQueryToTagConnection>;
  /**
   * A tax rate object
   * @deprecated 
   */
  taxRate?: Maybe<TaxRate>;
  /**
   * Connection between the RootQuery type and the TaxRate type
   * @deprecated 
   */
  taxRates?: Maybe<RootQueryToTaxRateConnection>;
  /**
   * Connection between the RootQuery type and the Taxonomy type
   * @deprecated 
   */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /**
   * Fetch a Taxonomy node by unique Identifier
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * A node in a taxonomy used to group and relate content nodes
   * @deprecated 
   */
  termNode?: Maybe<TermNode>;
  /**
   * Connection between the RootQuery type and the TermNode type
   * @deprecated 
   */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /**
   * A Theme object
   * @deprecated 
   */
  theme?: Maybe<Theme>;
  /**
   * Connection between the RootQuery type and the Theme type
   * @deprecated 
   */
  themes?: Maybe<RootQueryToThemeConnection>;
  /**
   * Returns a user
   * @deprecated 
   */
  user?: Maybe<User>;
  /**
   * Returns a user role
   * @deprecated 
   */
  userRole?: Maybe<UserRole>;
  /**
   * Connection between the RootQuery type and the UserRole type
   * @deprecated 
   */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /**
   * Connection between the RootQuery type and the User type
   * @deprecated 
   */
  users?: Maybe<RootQueryToUserConnection>;
  /**
   * A simple product object
   * @deprecated 
   */
  variableProduct?: Maybe<VariableProduct>;
  /**
   * Returns the current user
   * @deprecated 
   */
  viewer?: Maybe<User>;
  /**
   * A 0bject
   * @deprecated 
   */
  visibleProduct?: Maybe<VisibleProduct>;
  /**
   * Connection between the RootQuery type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<RootQueryToVisibleProductConnection>;
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCartFeeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCartItemArgs = {
  key: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentNodeIdTypeEnum>;
  contentType?: Maybe<ContentTypeEnum>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryCouponArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CouponIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCouponsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCouponConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCustomerArgs = {
  id?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCustomerConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryExternalProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryGroupProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MediaItemIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


/** The root entry point into the Graph */
export type RootQueryOrderArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<OrderIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToOrderConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPaPesoArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PaPesoIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaPesoConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PageIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPaymentGatewaysArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaymentGatewayConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryProductArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryProductCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductCategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryProductTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductTagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryProductTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductTypeIdType>;
};


/** The root entry point into the Graph */
export type RootQueryProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTypeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryProductVariationArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductVariationIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRefundArgs = {
  id: Scalars['ID'];
  idType?: Maybe<RefundIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToRefundConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryShippingClassArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ShippingClassIdType>;
};


/** The root entry point into the Graph */
export type RootQueryShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToShippingClassConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryShippingMethodArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ShippingMethodIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryShippingMethodsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQuerySimpleProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxRateArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<TaxRateIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTaxRatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTaxRateConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TermNodeIdTypeEnum>;
  taxonomy?: Maybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: Maybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryVariableProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryVisibleProductArgs = {
  id: Scalars['ID'];
  idType?: Maybe<VisibleProductIdType>;
};


/** The root entry point into the Graph */
export type RootQueryVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToVisibleProductConnectionWhereArgs>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated 
   */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated 
   */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /**
   * A date format for all date strings.
   * @deprecated 
   */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated 
   */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated 
   */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated 
   */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated 
   */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated 
   */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated 
   */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated 
   */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated 
   */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /**
   * Blog pages show at most.
   * @deprecated 
   */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /**
   * Default post category.
   * @deprecated 
   */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated 
   */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated 
   */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The cart object */
export type Cart = {
  __typename?: 'Cart';
  /**
   * Connection between the Cart type and the Coupon type
   * @deprecated 
   */
  appliedCoupons?: Maybe<CartToCouponConnection>;
  /**
   * Available shipping methods for this order.
   * @deprecated 
   */
  availableShippingMethods?: Maybe<Array<Maybe<ShippingPackage>>>;
  /**
   * Shipping method chosen for this order.
   * @deprecated 
   */
  chosenShippingMethod?: Maybe<Scalars['String']>;
  /**
   * Connection between the Cart type and the CartItem type
   * @deprecated 
   */
  contents?: Maybe<CartToCartItemConnection>;
  /**
   * Cart contents tax
   * @deprecated 
   */
  contentsTax?: Maybe<Scalars['String']>;
  /**
   * Cart contents total
   * @deprecated 
   */
  contentsTotal?: Maybe<Scalars['String']>;
  /**
   * Cart discount tax
   * @deprecated 
   */
  discountTax?: Maybe<Scalars['String']>;
  /**
   * Cart discount total
   * @deprecated 
   */
  discountTotal?: Maybe<Scalars['String']>;
  /**
   * Do display prices include taxes
   * @deprecated 
   */
  displayPricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /**
   * Cart fee tax
   * @deprecated 
   */
  feeTax?: Maybe<Scalars['String']>;
  /**
   * Cart fee total
   * @deprecated 
   */
  feeTotal?: Maybe<Scalars['String']>;
  /**
   * Additional fees on the cart.
   * @deprecated 
   */
  fees?: Maybe<Array<Maybe<CartFee>>>;
  /**
   * Is cart empty
   * @deprecated 
   */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /**
   * Is customer shipping address needed
   * @deprecated 
   */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /**
   * Cart shipping tax
   * @deprecated 
   */
  shippingTax?: Maybe<Scalars['String']>;
  /**
   * Cart shipping total
   * @deprecated 
   */
  shippingTotal?: Maybe<Scalars['String']>;
  /**
   * Cart subtotal
   * @deprecated 
   */
  subtotal?: Maybe<Scalars['String']>;
  /**
   * Cart subtotal tax
   * @deprecated 
   */
  subtotalTax?: Maybe<Scalars['String']>;
  /**
   * Cart total after calculation
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Cart total tax amount
   * @deprecated 
   */
  totalTax?: Maybe<Scalars['String']>;
};


/** The cart object */
export type CartAppliedCouponsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CartToCouponConnectionWhereArgs>;
};


/** The cart object */
export type CartContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CartToCartItemConnectionWhereArgs>;
};

/** Arguments for filtering the CartToCouponConnection connection */
export type CartToCouponConnectionWhereArgs = {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: Maybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: Maybe<DateInput>;
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

/** Options for ordering the connection */
export type PostTypeOrderbyInput = {
  field: PostTypeOrderByEnum;
  order?: Maybe<OrderEnum>;
};

/** Fields to order the PostType connection by */
export enum PostTypeOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG'
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Connection between the Cart type and the Coupon type */
export type CartToCouponConnection = {
  __typename?: 'CartToCouponConnection';
  /**
   * Edges for the CartToCouponConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CartToCouponConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Coupon>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CartToCouponConnectionEdge = {
  __typename?: 'CartToCouponConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Coupon>;
};

/** A coupon object */
export type Coupon = Node & {
  __typename?: 'Coupon';
  /**
   * Amount off provided by the coupon
   * @deprecated 
   */
  amount?: Maybe<Scalars['Float']>;
  /**
   * Coupon code
   * @deprecated 
   */
  code?: Maybe<Scalars['String']>;
  /**
   * Connection between the Coupon type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<CouponToContentTypeConnectionEdge>;
  /**
   * The ID of the coupon in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Date coupon created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date coupon expires
   * @deprecated 
   */
  dateExpiry?: Maybe<Scalars['String']>;
  /**
   * Explanation of what the coupon does
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Type of discount
   * @deprecated 
   */
  discountType?: Maybe<DiscountTypeEnum>;
  /**
   * Only customers with a matching email address can use the coupon
   * @deprecated 
   */
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Excluding sale items mean this coupon cannot be used on items that are on sale (or carts that contain on sale items)
   * @deprecated 
   */
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Coupon type and the productCategory type
   * @deprecated 
   */
  excludedProductCategories?: Maybe<CouponToExcludedProductCategoriesConnection>;
  /**
   * Connection between the Coupon type and the Product type
   * @deprecated 
   */
  excludedProducts?: Maybe<CouponToExcludedProductsConnection>;
  /**
   * Does this coupon grant free shipping?
   * @deprecated 
   */
  freeShipping?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the coupon
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Individual use means this coupon cannot be used in conjunction with other coupons
   * @deprecated 
   */
  individualUse?: Maybe<Scalars['Boolean']>;
  /**
   * The number of products in your cart this coupon can apply to (for product discounts)
   * @deprecated 
   */
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  /**
   * Maximum spend amount that must be met before this coupon can be used 
   * @deprecated 
   */
  maximumAmount?: Maybe<Scalars['Float']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Minimum spend amount that must be met before this coupon can be used
   * @deprecated 
   */
  minimumAmount?: Maybe<Scalars['Float']>;
  /**
   * Date coupon modified
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * Connection between the Coupon type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<CouponToProductCategoryConnection>;
  /**
   * Connection between the Coupon type and the Product type
   * @deprecated 
   */
  products?: Maybe<CouponToProductConnection>;
  /**
   * How many times the coupon has been used
   * @deprecated 
   */
  usageCount?: Maybe<Scalars['Int']>;
  /**
   * Amount of times this coupon can be used globally
   * @deprecated 
   */
  usageLimit?: Maybe<Scalars['Int']>;
  /**
   * Amount of times this coupon can be used by a customer
   * @deprecated 
   */
  usageLimitPerUser?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Coupon type and the Customer type
   * @deprecated 
   */
  usedBy?: Maybe<CouponToCustomerConnection>;
};


/** A coupon object */
export type CouponExcludedProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductCategoriesConnectionWhereArgs>;
};


/** A coupon object */
export type CouponExcludedProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductsConnectionWhereArgs>;
};


/** A coupon object */
export type CouponMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A coupon object */
export type CouponProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductCategoryConnectionWhereArgs>;
};


/** A coupon object */
export type CouponProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductConnectionWhereArgs>;
};


/** A coupon object */
export type CouponUsedByArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToCustomerConnectionWhereArgs>;
};

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

/** Connection between the Coupon type and the ContentType type */
export type CouponToContentTypeConnectionEdge = {
  __typename?: 'CouponToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /**
   * Whether this content type should can be exported.
   * @deprecated 
   */
  canExport?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the ContentType type and the Taxonomy type
   * @deprecated 
   */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /**
   * Connection between the ContentType type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /**
   * Whether content of this type should be deleted when the author of it is deleted from the system.
   * @deprecated 
   */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /**
   * Description of the content type.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether to exclude nodes of this content type from front end search results.
   * @deprecated 
   */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /**
   * The plural name of the content type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the content type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated 
   */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is hierarchical, for example pages.
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the post-type object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated 
   */
  isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated 
   */
  isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the content type.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Details about the content type labels.
   * @deprecated 
   */
  labels?: Maybe<PostTypeLabelDetails>;
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated 
   */
  menuIcon?: Maybe<Scalars['String']>;
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated 
   */
  menuPosition?: Maybe<Scalars['Int']>;
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Whether queries can be performed on the front end for the content type as part of parse_request().
   * @deprecated 
   */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to display in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Makes this content type available via the admin bar.
   * @deprecated 
   */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the content type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Makes this content type available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing this content type in the admin.
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /**
   * Edges for the ContentTypeToTaxonomyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /**
   * List of Content Types associated with the Taxonomy
   * @deprecated 
   */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier of the taxonomy object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated 
   */
  showCloud?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated 
   */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated 
   */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
  __typename?: 'TaxonomyToContentTypeConnection';
  /**
   * Edges for the TaxonomyToContentTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated 
   */
  endCursor?: Maybe<Scalars['String']>;
  /**
   * When paginating forwards, are there more items?
   * @deprecated 
   */
  hasNextPage: Scalars['Boolean'];
  /**
   * When paginating backwards, are there more items?
   * @deprecated 
   */
  hasPreviousPage: Scalars['Boolean'];
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated 
   */
  startCursor?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wc-cancelled status */
  WcCancelled = 'WC_CANCELLED',
  /** Objects with the wc-completed status */
  WcCompleted = 'WC_COMPLETED',
  /** Objects with the wc-failed status */
  WcFailed = 'WC_FAILED',
  /** Objects with the wc-on-hold status */
  WcOnHold = 'WC_ON_HOLD',
  /** Objects with the wc-pending status */
  WcPending = 'WC_PENDING',
  /** Objects with the wc-processing status */
  WcProcessing = 'WC_PROCESSING',
  /** Objects with the wc-refunded status */
  WcRefunded = 'WC_REFUNDED'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = {
  __typename?: 'ContentTypeToContentNodeConnection';
  /**
   * Edges for the ContentTypeToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Nodes used to manage content */
export type ContentNode = {
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /**
   * The timestamp for when the node was last edited
   * @deprecated 
   */
  lockTimestamp?: Maybe<Scalars['String']>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** A User object */
export type User = Node & UniformResourceIdentifiable & Commenter & DatabaseIdentifier & {
  __typename?: 'User';
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   * @deprecated 
   */
  avatar?: Maybe<Avatar>;
  /**
   * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
   * @deprecated 
   */
  capKey?: Maybe<Scalars['String']>;
  /**
   * A list of capabilities (permissions) granted to the user
   * @deprecated 
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the User type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<UserToCommentConnection>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Description of the user.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /**
   * Connection between the User type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /**
   * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
   * @deprecated 
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   * @deprecated 
   */
  locale?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the mediaItem type
   * @deprecated 
   */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  nicename?: Maybe<Scalars['String']>;
  /**
   * Nickname of the user.
   * @deprecated 
   */
  nickname?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the page type
   * @deprecated 
   */
  pages?: Maybe<UserToPageConnection>;
  /**
   * Connection between the User type and the post type
   * @deprecated 
   */
  posts?: Maybe<UserToPostConnection>;
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   * @deprecated 
   */
  registeredDate?: Maybe<Scalars['String']>;
  /**
   * Connection between the User and Revisions authored by the user
   * @deprecated 
   */
  revisions?: Maybe<UserToContentRevisionUnionConnection>;
  /**
   * Connection between the User type and the UserRole type
   * @deprecated 
   */
  roles?: Maybe<UserToUserRoleConnection>;
  /**
   * The Yoast SEO data of a user
   * @deprecated 
   */
  seo?: Maybe<SeoUser>;
  /**
   * A JWT token that can be used in future requests to for WooCommerce session identification
   * @deprecated 
   */
  sessionToken?: Maybe<Scalars['String']>;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
  /**
   * A website url that is associated with the user.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   * @deprecated 
   */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<AvatarRatingEnum>;
};


/** A User object */
export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};


/** A User object */
export type UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** The author of a comment */
export type Commenter = {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated 
   */
  default?: Maybe<Scalars['String']>;
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated 
   */
  extraAttr?: Maybe<Scalars['String']>;
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated 
   */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the avatar was successfully found.
   * @deprecated 
   */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /**
   * Height of the avatar image.
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated 
   */
  rating?: Maybe<Scalars['String']>;
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated 
   */
  scheme?: Maybe<Scalars['String']>;
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated 
   */
  size?: Maybe<Scalars['Int']>;
  /**
   * URL for the gravatar image source.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * Width of the avatar image.
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Product = 'PRODUCT'
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection';
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node & DatabaseIdentifier & {
  __typename?: 'Comment';
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated 
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated 
   */
  approved?: Maybe<Scalars['Boolean']>;
  /**
   * The author of the comment
   * @deprecated 
   */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated 
   */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the ContentNode type
   * @deprecated 
   */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated 
   */
  karma?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated 
   */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /**
   * The database id of the parent comment node or null if it is the root comment
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent comment node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated 
   */
  replies?: Maybe<CommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A Comment object */
export type CommentParentArgs = {
  where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentRepliesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
  __typename?: 'CommentToCommenterConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Commenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection';
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
  __typename?: 'UserToEnqueuedScriptConnection';
  /**
   * Edges for the UserToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedScript';
  /**
   * @todo
   * @deprecated 
   */
  args?: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated 
   */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated 
   */
  extra?: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated 
   */
  handle?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated 
   */
  src?: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /**
   * Edges for the UserToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedStylesheet';
  /**
   * @todo
   * @deprecated 
   */
  args?: Maybe<Scalars['Boolean']>;
  /**
   * Dependencies needed to use this asset
   * @deprecated 
   */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated 
   */
  extra?: Maybe<Scalars['String']>;
  /**
   * The handle of the enqueued asset
   * @deprecated 
   */
  handle?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The source of the asset
   * @deprecated 
   */
  src?: Maybe<Scalars['String']>;
  /**
   * The version of the enqueued asset
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection';
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** The mediaItem type */
export type MediaItem = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalContentNode & {
  __typename?: 'MediaItem';
  /**
   * Alternative text to display when resource is not displayed
   * @deprecated 
   */
  altText?: Maybe<Scalars['String']>;
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * The caption for the resource
   * @deprecated 
   */
  caption?: Maybe<Scalars['String']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the mediaItem type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<MediaItemToCommentConnection>;
  /**
   * Connection between the mediaItem type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<MediaItemToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Description of the image (stored as post_content)
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The filesize in bytes of the resource
   * @deprecated 
   */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the attachment object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Details about the mediaItem
   * @deprecated 
   */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /**
   * Url of the mediaItem
   * @deprecated 
   */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /**
   * Type of resource
   * @deprecated 
   */
  mediaType?: Maybe<Scalars['String']>;
  /**
   * The mime type of the mediaItem
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The Yoast SEO data of the mediaItem
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * The sizes attribute value for an image.
   * @deprecated 
   */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Url of the mediaItem
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
   * @deprecated 
   */
  srcSet?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};


/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /**
   * Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection';
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the mediaItem type and the ContentType type */
export type MediaItemToContentTypeConnectionEdge = {
  __typename?: 'MediaItemToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /**
   * Edges for the ContentNodeToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the ContentNodeToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the gallery-size size */
  GallerySize = 'GALLERY_SIZE',
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the shop_catalog size */
  ShopCatalog = 'SHOP_CATALOG',
  /** MediaItem with the shop_single size */
  ShopSingle = 'SHOP_SINGLE',
  /** MediaItem with the shop_thumbnail size */
  ShopThumbnail = 'SHOP_THUMBNAIL',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the woocommerce_gallery_thumbnail size */
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  /** MediaItem with the woocommerce_single size */
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  /** MediaItem with the woocommerce_thumbnail size */
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  meta?: Maybe<MediaItemMeta>;
  /**
   * The available sizes of the mediaItem
   * @deprecated 
   */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /**
   * The width of the mediaItem
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** @deprecated  */
  aperture?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  camera?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  copyright?: Maybe<Scalars['String']>;
  /** @deprecated  */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  credit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalLength?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  iso?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  orientation?: Maybe<Scalars['String']>;
  /** @deprecated  */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /**
   * The file of the for the referenced size
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The filesize of the resource
   * @deprecated 
   */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The height of the for the referenced size
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The mime type of the resource
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The referenced size name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url of the for the referenced size
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The width of the for the referenced size
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  /** @deprecated  */
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  /** @deprecated  */
  canonical?: Maybe<Scalars['String']>;
  /** @deprecated  */
  cornerstone?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  focuskw?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaKeywords?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphAuthor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphImage?: Maybe<MediaItem>;
  /** @deprecated  */
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schema?: Maybe<SeoPostTypeSchema>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterImage?: Maybe<MediaItem>;
  /** @deprecated  */
  twitterTitle?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** The Schema types */
export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  /** @deprecated  */
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = {
  __typename?: 'UserToPageConnection';
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** The page type */
export type Page = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & MenuItemLinkable & {
  __typename?: 'Page';
  /**
   * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the HierarchicalContentNode type and the ContentNode type
   * @deprecated 
   */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the page type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<PageToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the page type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<PageToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;FAQs&quot; was assigned to an individual post of the post_type: &quot;page&quot;. The group will be present in the Schema for the &quot;pages&quot; Type, but will only resolve if the entity has content saved.
   * @deprecated 
   */
  faqs?: Maybe<Page_Faqs>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Home&quot; was assigned to an individual post of the post_type: &quot;page&quot;. The group will be present in the Schema for the &quot;pages&quot; Type, but will only resolve if the entity has content saved.
   * @deprecated 
   */
  homeElements?: Maybe<Page_Homeelements>;
  /**
   * The globally unique identifier of the page object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether this page is set to the static front page.
   * @deprecated 
   */
  isFrontPage: Scalars['Boolean'];
  /**
   * Whether this page is set to the blog posts page.
   * @deprecated 
   */
  isPostsPage: Scalars['Boolean'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated 
   */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** @deprecated  */
  pageElements?: Maybe<Page_Pageelements>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated 
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  revisions?: Maybe<PageToRevisionConnection>;
  /**
   * The Yoast SEO data of the page
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The page type */
export type PageAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type PageChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};


/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection';
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the page type and the ContentType type */
export type PageToContentTypeConnectionEdge = {
  __typename?: 'PageToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Field Group */
export type Page_Faqs = {
  __typename?: 'Page_Faqs';
  /** @deprecated  */
  faq?: Maybe<Array<Maybe<Page_Faqs_Faq>>>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Faqs_Faq = {
  __typename?: 'Page_Faqs_faq';
  /** @deprecated  */
  answer?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  question?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Homeelements = {
  __typename?: 'Page_Homeelements';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  homeGallery?: Maybe<Array<Maybe<Page_Homeelements_HomeGallery>>>;
  /** @deprecated  */
  homeSlide?: Maybe<Array<Maybe<Page_Homeelements_HomeSlide>>>;
};

/** Field Group */
export type Page_Homeelements_HomeGallery = {
  __typename?: 'Page_Homeelements_homeGallery';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
};

/** Field Group */
export type Page_Homeelements_HomeSlide = {
  __typename?: 'Page_Homeelements_homeSlide';
  /**
   * Impostare questo field per far vedere un bottone sotto al testo del blocco in home page
   * @deprecated 
   */
  ctaText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
  /** @deprecated  */
  text?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** Field Group */
export type Page_Pageelements = {
  __typename?: 'Page_Pageelements';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  pageGallery?: Maybe<Array<Maybe<Page_Pageelements_PageGallery>>>;
};

/** Field Group */
export type Page_Pageelements_PageGallery = {
  __typename?: 'Page_Pageelements_pageGallery';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
  __typename?: 'PageToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection';
  /**
   * Edges for the pageToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = {
  __typename?: 'UserToPostConnection';
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The post type */
export type Post = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable & {
  __typename?: 'Post';
  /**
   * Connection between the NodeWithAuthor type and the User type
   * @deprecated 
   */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /**
   * The database identifier of the author of the node
   * @deprecated 
   */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the author of the node
   * @deprecated 
   */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the post type and the category type
   * @deprecated 
   */
  categories?: Maybe<PostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the Comment type
   * @deprecated 
   */
  comments?: Maybe<PostToCommentConnection>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<PostToContentTypeConnectionEdge>;
  /**
   * The ID of the node in the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the post object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * True if the node is a revision of another node
   * @deprecated 
   */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * Whether this page is sticky
   * @deprecated 
   */
  isSticky: Scalars['Boolean'];
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the post type and the postFormat type
   * @deprecated 
   */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
   * @deprecated 
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  revisions?: Maybe<PostToRevisionConnection>;
  /**
   * The Yoast SEO data of the post
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the tag type
   * @deprecated 
   */
  tags?: Maybe<PostToTagConnection>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Connection between the post type and the TermNode type
   * @deprecated 
   */
  terms?: Maybe<PostToTermNodeConnection>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The post type */
export type PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The post type */
export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};


/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO Primary category
   * @deprecated 
   */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** The category type */
export type Category = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'Category';
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  children?: Maybe<CategoryToCategoryConnection>;
  /**
   * Connection between the category type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the category type and the post type
   * @deprecated 
   */
  posts?: Maybe<CategoryToPostConnection>;
  /**
   * The Yoast SEO data of the Categories taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the category type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The category type */
export type CategoryAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The category type */
export type CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /**
   * Edges for the TermNodeToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /**
   * Edges for the TermNodeToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /**
   * Edges for the CategoryToAncestorsCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection';
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the ContentNode type */
export type CategoryToContentNodeConnection = {
  __typename?: 'CategoryToContentNodeConnection';
  /**
   * Edges for the CategoryToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  /** @deprecated  */
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  /** @deprecated  */
  canonical?: Maybe<Scalars['String']>;
  /** @deprecated  */
  cornerstone?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  focuskw?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaKeywords?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphAuthor?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphImage?: Maybe<MediaItem>;
  /** @deprecated  */
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphPublisher?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphSiteName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphTitle?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  opengraphUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterDescription?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitterImage?: Maybe<MediaItem>;
  /** @deprecated  */
  twitterTitle?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection';
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Connection between the post type and the ContentType type */
export type PostToContentTypeConnectionEdge = {
  __typename?: 'PostToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection';
  /**
   * Edges for the PostToPostFormatConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PostFormat>;
};

/** The postFormat type */
export type PostFormat = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  /**
   * Connection between the postFormat type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the postFormat type and the post type
   * @deprecated 
   */
  posts?: Maybe<PostFormatToPostConnection>;
  /**
   * The Yoast SEO data of the Formats taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the postFormat type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The postFormat type */
export type PostFormatContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The postFormat type */
export type PostFormatPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToPostConnectionWhereArgs>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = {
  __typename?: 'PostFormatToContentNodeConnection';
  /**
   * Edges for the PostFormatToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection';
  /**
   * Edges for the PostFormatToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
  __typename?: 'PostToPreviewConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection';
  /**
   * Edges for the postToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
  __typename?: 'PostToTagConnection';
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** The tag type */
export type Tag = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & MenuItemLinkable & {
  __typename?: 'Tag';
  /**
   * Connection between the tag type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the tag type and the post type
   * @deprecated 
   */
  posts?: Maybe<TagToPostConnection>;
  /**
   * The Yoast SEO data of the Tags taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the tag type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The tag type */
export type TagContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type TagEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The tag type */
export type TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPostConnectionWhereArgs>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the ContentNode type */
export type TagToContentNodeConnection = {
  __typename?: 'TagToContentNodeConnection';
  /**
   * Edges for the TagToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = {
  __typename?: 'TagToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
  __typename?: 'TagToPostConnection';
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Papeso = 'PAPESO',
  Postformat = 'POSTFORMAT',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Tag = 'TAG',
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** Connection between the post type and the TermNode type */
export type PostToTermNodeConnection = {
  __typename?: 'PostToTermNodeConnection';
  /**
   * Edges for the PostToTermNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = {
  __typename?: 'PostToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TermNode>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection';
  /**
   * Edges for the UserToContentRevisionUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentRevisionUnion>;
};

export type ContentRevisionUnion = Post | Page;

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection';
  /**
   * Edges for the UserToUserRoleConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<UserRole>;
};

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /**
   * The capabilities that belong to this role
   * @deprecated 
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The display name of the role
   * @deprecated 
   */
  displayName?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user role object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The registered name of the role
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  /** @deprecated  */
  social?: Maybe<SeoUserSocial>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  /** @deprecated  */
  facebook?: Maybe<Scalars['String']>;
  /** @deprecated  */
  instagram?: Maybe<Scalars['String']>;
  /** @deprecated  */
  linkedIn?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mySpace?: Maybe<Scalars['String']>;
  /** @deprecated  */
  pinterest?: Maybe<Scalars['String']>;
  /** @deprecated  */
  soundCloud?: Maybe<Scalars['String']>;
  /** @deprecated  */
  twitter?: Maybe<Scalars['String']>;
  /** @deprecated  */
  wikipedia?: Maybe<Scalars['String']>;
  /** @deprecated  */
  youTube?: Maybe<Scalars['String']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated 
   */
  addNew?: Maybe<Scalars['String']>;
  /**
   * Label for adding a new singular item.
   * @deprecated 
   */
  addNewItem?: Maybe<Scalars['String']>;
  /**
   * Label to signify all items in a submenu link.
   * @deprecated 
   */
  allItems?: Maybe<Scalars['String']>;
  /**
   * Label for archives in nav menus
   * @deprecated 
   */
  archives?: Maybe<Scalars['String']>;
  /**
   * Label for the attributes meta box.
   * @deprecated 
   */
  attributes?: Maybe<Scalars['String']>;
  /**
   * Label for editing a singular item.
   * @deprecated 
   */
  editItem?: Maybe<Scalars['String']>;
  /**
   * Label for the Featured Image meta box title.
   * @deprecated 
   */
  featuredImage?: Maybe<Scalars['String']>;
  /**
   * Label for the table views hidden heading.
   * @deprecated 
   */
  filterItemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame button.
   * @deprecated 
   */
  insertIntoItem?: Maybe<Scalars['String']>;
  /**
   * Label for the table hidden heading.
   * @deprecated 
   */
  itemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the table pagination hidden heading.
   * @deprecated 
   */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /**
   * Label for the menu name.
   * @deprecated 
   */
  menuName?: Maybe<Scalars['String']>;
  /**
   * General name for the post type, usually plural.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Label for the new item page title.
   * @deprecated 
   */
  newItem?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are found.
   * @deprecated 
   */
  notFound?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are in the trash.
   * @deprecated 
   */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated 
   */
  parentItemColon?: Maybe<Scalars['String']>;
  /**
   * Label for removing the featured image.
   * @deprecated 
   */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for searching plural items.
   * @deprecated 
   */
  searchItems?: Maybe<Scalars['String']>;
  /**
   * Label for setting the featured image.
   * @deprecated 
   */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Name for one object of this post type.
   * @deprecated 
   */
  singularName?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame filter.
   * @deprecated 
   */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /**
   * Label in the media frame for using a featured image.
   * @deprecated 
   */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for viewing a singular item.
   * @deprecated 
   */
  viewItem?: Maybe<Scalars['String']>;
  /**
   * Label for viewing post type archives.
   * @deprecated 
   */
  viewItems?: Maybe<Scalars['String']>;
};

/** Coupon discount type enumeration */
export enum DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT'
}

/** Arguments for filtering the CouponToExcludedProductCategoriesConnection connection */
export type CouponToExcludedProductCategoriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Coupon type and the productCategory type */
export type CouponToExcludedProductCategoriesConnection = {
  __typename?: 'CouponToExcludedProductCategoriesConnection';
  /**
   * Edges for the CouponToExcludedProductCategoriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CouponToExcludedProductCategoriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CouponToExcludedProductCategoriesConnectionEdge = {
  __typename?: 'CouponToExcludedProductCategoriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** The productCategory type */
export type ProductCategory = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'ProductCategory';
  /**
   * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
   * @deprecated 
   */
  ancestors?: Maybe<ProductCategoryToAncestorsProductCategoryConnection>;
  /**
   * Connection between the productCategory type and the productCategory type
   * @deprecated 
   */
  children?: Maybe<ProductCategoryToProductCategoryConnection>;
  /**
   * Connection between the productCategory type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ProductCategoryToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Product category display type
   * @deprecated 
   */
  display?: Maybe<ProductCategoryDisplay>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Product category image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Product category menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the productCategory type and the productCategory type
   * @deprecated 
   */
  parent?: Maybe<ProductCategoryToParentProductCategoryConnectionEdge>;
  /**
   * Database id of the parent node
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent node.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productCategoryId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the ProductCategory type and the Product type
   * @deprecated 
   */
  products?: Maybe<ProductCategoryToProductConnection>;
  /**
   * The Yoast SEO data of the Product categories taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the productCategory type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<ProductCategoryToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The productCategory type */
export type ProductCategoryAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productCategory type */
export type ProductCategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductCategoryConnectionWhereArgs>;
};


/** The productCategory type */
export type ProductCategoryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToContentNodeConnectionWhereArgs>;
};


/** The productCategory type */
export type ProductCategoryEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productCategory type */
export type ProductCategoryEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productCategory type */
export type ProductCategoryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductConnectionWhereArgs>;
};

/** Connection between the productCategory type and the productCategory type */
export type ProductCategoryToAncestorsProductCategoryConnection = {
  __typename?: 'ProductCategoryToAncestorsProductCategoryConnection';
  /**
   * Edges for the ProductCategoryToAncestorsProductCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductCategoryToAncestorsProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductCategoryToAncestorsProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToAncestorsProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** Arguments for filtering the ProductCategoryToProductCategoryConnection connection */
export type ProductCategoryToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the productCategory type and the productCategory type */
export type ProductCategoryToProductCategoryConnection = {
  __typename?: 'ProductCategoryToProductCategoryConnection';
  /**
   * Edges for the ProductCategoryToProductCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductCategoryToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductCategoryToProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** Arguments for filtering the ProductCategoryToContentNodeConnection connection */
export type ProductCategoryToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the productCategory type and the ContentNode type */
export type ProductCategoryToContentNodeConnection = {
  __typename?: 'ProductCategoryToContentNodeConnection';
  /**
   * Edges for the ProductCategoryToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductCategoryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductCategoryToContentNodeConnectionEdge = {
  __typename?: 'ProductCategoryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Product category display type enumeration */
export enum ProductCategoryDisplay {
  /** Display both products and subcategories of this category. */
  Both = 'BOTH',
  /** Display default content connected to this category. */
  Default = 'DEFAULT',
  /** Display products associated with this category. */
  Products = 'PRODUCTS',
  /** Display subcategories of this category. */
  Subcategories = 'SUBCATEGORIES'
}

/** Connection between the productCategory type and the productCategory type */
export type ProductCategoryToParentProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToParentProductCategoryConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** Arguments for filtering the ProductCategoryToProductConnection connection */
export type ProductCategoryToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Options for ordering the connection */
export type ProductsOrderbyInput = {
  field: ProductsOrderByEnum;
  order?: Maybe<OrderEnum>;
};

/** Fields to order the Products connection by */
export enum ProductsOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by date product sale starts */
  OnSaleFrom = 'ON_SALE_FROM',
  /** Order by date product sale ends */
  OnSaleTo = 'ON_SALE_TO',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by product's current price */
  Price = 'PRICE',
  /** Order by product average rating */
  Rating = 'RATING',
  /** Order by product's regular price */
  RegularPrice = 'REGULAR_PRICE',
  /** Order by number of reviews on product */
  ReviewCount = 'REVIEW_COUNT',
  /** Order by product's sale price */
  SalePrice = 'SALE_PRICE',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by total sales of products sold */
  TotalSales = 'TOTAL_SALES'
}

/** Product stock status enumeration */
export enum StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK'
}

/** Product taxonomy filter type */
export type ProductTaxonomyFilterRelationInput = {
  and?: Maybe<Array<Maybe<ProductTaxonomyFilterInput>>>;
  or?: Maybe<Array<Maybe<ProductTaxonomyFilterInput>>>;
};

/** Product filter */
export type ProductTaxonomyFilterInput = {
  /** A list of term ids */
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter operation type */
  operator?: Maybe<TaxonomyOperatorEnum>;
  /** Which field to select taxonomy term by. */
  taxonomy: ProductTaxonomyEnum;
  /** A list of term slugs */
  terms?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Taxonomy query operators */
export enum TaxonomyOperatorEnum {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Product taxonomies */
export enum ProductTaxonomyEnum {
  Papeso = 'PAPESO',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** Product type enumeration */
export enum ProductTypesEnum {
  /** An external product */
  External = 'EXTERNAL',
  /** A product group */
  Grouped = 'GROUPED',
  /** A simple product */
  Simple = 'SIMPLE',
  /** A variable product */
  Variable = 'VARIABLE',
  /** A product variation */
  Variation = 'VARIATION'
}

/** Product catalog visibility enumeration */
export enum CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE'
}

/** Connection between the ProductCategory type and the Product type */
export type ProductCategoryToProductConnection = {
  __typename?: 'ProductCategoryToProductConnection';
  /**
   * Edges for the ProductCategoryToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductCategoryToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductCategoryToProductConnectionEdge = {
  __typename?: 'ProductCategoryToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Product object */
export type Product = {
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /** Connection between the Product type and the ContentType type */
  contentType?: Maybe<ProductToContentTypeConnectionEdge>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the paPeso type */
  paPesos?: Maybe<ProductToPaPesoConnection>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productElements?: Maybe<Product_Productelements>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** The Yoast SEO data of the Product */
  seo?: Maybe<PostTypeSeo>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


/** Product object */
export type ProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


/** Product object */
export type ProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** Product object */
export type ProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


/** Product object */
export type ProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


/** Product object */
export type ProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


/** Product object */
export type ProductPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaPesoConnectionWhereArgs>;
};


/** Product object */
export type ProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


/** Product object */
export type ProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


/** Product object */
export type ProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


/** Product object */
export type ProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


/** Product object */
export type ProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


/** Product object */
export type ProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


/** Product object */
export type ProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** Product object */
export type ProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


/** Product object */
export type ProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

/** Arguments for filtering the ProductToProductAttributeConnection connection */
export type ProductToProductAttributeConnectionWhereArgs = {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
};

/** Product attribute type enumeration */
export enum ProductAttributeTypesEnum {
  /** A global product attribute */
  Global = 'GLOBAL',
  /** A local product attribute */
  Local = 'LOCAL'
}

/** Connection between the Product type and the ProductAttribute type */
export type ProductToProductAttributeConnection = {
  __typename?: 'ProductToProductAttributeConnection';
  /**
   * Edges for the ProductToProductAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToProductAttributeConnectionEdge = {
  __typename?: 'ProductToProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductAttribute>;
};

/** Product attribute object */
export type ProductAttribute = {
  /** Attribute ID */
  attributeId: Scalars['Int'];
  /** Attribute Global ID */
  id: Scalars['ID'];
  /** Attribute label */
  label: Scalars['String'];
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Attribute position */
  position: Scalars['Int'];
  /** Product attribute scope. */
  scope: ProductAttributeTypesEnum;
  /** Is attribute on product variation */
  variation: Scalars['Boolean'];
  /** Is attribute visible */
  visible: Scalars['Boolean'];
};

/** Connection between the Product type and the ContentType type */
export type ProductToContentTypeConnectionEdge = {
  __typename?: 'ProductToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Arguments for filtering the ProductToMediaItemConnection connection */
export type ProductToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the Product type and the MediaItem type */
export type ProductToMediaItemConnection = {
  __typename?: 'ProductToMediaItemConnection';
  /**
   * Edges for the ProductToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToMediaItemConnectionEdge = {
  __typename?: 'ProductToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** Arguments for filtering the ProductToGlobalProductAttributeConnection connection */
export type ProductToGlobalProductAttributeConnectionWhereArgs = {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
};

/** Connection between the Product type and the GlobalProductAttribute type */
export type ProductToGlobalProductAttributeConnection = {
  __typename?: 'ProductToGlobalProductAttributeConnection';
  /**
   * Edges for the ProductToGlobalProductAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToGlobalProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<GlobalProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToGlobalProductAttributeConnectionEdge = {
  __typename?: 'ProductToGlobalProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<GlobalProductAttribute>;
};

/** A product attribute object */
export type GlobalProductAttribute = ProductAttribute & {
  __typename?: 'GlobalProductAttribute';
  /**
   * Attribute ID
   * @deprecated 
   */
  attributeId: Scalars['Int'];
  /**
   * Attribute Global ID
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Attribute label
   * @deprecated 
   */
  label: Scalars['String'];
  /**
   * Product attribute name
   * @deprecated 
   */
  name: Scalars['String'];
  /**
   * Attribute options
   * @deprecated 
   */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Attribute position
   * @deprecated 
   */
  position: Scalars['Int'];
  /**
   * Product attribute scope.
   * @deprecated 
   */
  scope: ProductAttributeTypesEnum;
  /**
   * Product attribute slug
   * @deprecated 
   */
  slug: Scalars['String'];
  /**
   * Connection between the GlobalProductAttribute type and the TermNode type
   * @deprecated 
   */
  terms?: Maybe<GlobalProductAttributeToTermNodeConnection>;
  /**
   * Is attribute on product variation
   * @deprecated 
   */
  variation: Scalars['Boolean'];
  /**
   * Is attribute visible
   * @deprecated 
   */
  visible: Scalars['Boolean'];
};


/** A product attribute object */
export type GlobalProductAttributeTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GlobalProductAttributeToTermNodeConnectionWhereArgs>;
};

/** Arguments for filtering the GlobalProductAttributeToTermNodeConnection connection */
export type GlobalProductAttributeToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the GlobalProductAttribute type and the TermNode type */
export type GlobalProductAttributeToTermNodeConnection = {
  __typename?: 'GlobalProductAttributeToTermNodeConnection';
  /**
   * Edges for the GlobalProductAttributeToTermNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<GlobalProductAttributeToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type GlobalProductAttributeToTermNodeConnectionEdge = {
  __typename?: 'GlobalProductAttributeToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TermNode>;
};

/** Arguments for filtering the ProductToLocalProductAttributeConnection connection */
export type ProductToLocalProductAttributeConnectionWhereArgs = {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
};

/** Connection between the Product type and the LocalProductAttribute type */
export type ProductToLocalProductAttributeConnection = {
  __typename?: 'ProductToLocalProductAttributeConnection';
  /**
   * Edges for the ProductToLocalProductAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToLocalProductAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<LocalProductAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToLocalProductAttributeConnectionEdge = {
  __typename?: 'ProductToLocalProductAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<LocalProductAttribute>;
};

/** A product attribute object */
export type LocalProductAttribute = ProductAttribute & {
  __typename?: 'LocalProductAttribute';
  /**
   * Attribute ID
   * @deprecated 
   */
  attributeId: Scalars['Int'];
  /**
   * Attribute Global ID
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Attribute label
   * @deprecated 
   */
  label: Scalars['String'];
  /**
   * Attribute name
   * @deprecated 
   */
  name: Scalars['String'];
  /**
   * Attribute options
   * @deprecated 
   */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Attribute position
   * @deprecated 
   */
  position: Scalars['Int'];
  /**
   * Product attribute scope.
   * @deprecated 
   */
  scope: ProductAttributeTypesEnum;
  /**
   * Is attribute on product variation
   * @deprecated 
   */
  variation: Scalars['Boolean'];
  /**
   * Is attribute visible
   * @deprecated 
   */
  visible: Scalars['Boolean'];
};

/** Arguments for filtering the ProductToPaPesoConnection connection */
export type ProductToPaPesoConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the paPeso type */
export type ProductToPaPesoConnection = {
  __typename?: 'ProductToPaPesoConnection';
  /**
   * Edges for the ProductToPaPesoConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToPaPesoConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PaPeso>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToPaPesoConnectionEdge = {
  __typename?: 'ProductToPaPesoConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PaPeso>;
};

/** The paPeso type */
export type PaPeso = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & {
  __typename?: 'PaPeso';
  /**
   * Connection between the paPeso type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<PaPesoToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  paPesoId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the PaPeso type and the Product type
   * @deprecated 
   */
  products?: Maybe<PaPesoToProductConnection>;
  /**
   * The Yoast SEO data of the Product Peso taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the paPeso type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<PaPesoToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Connection between the PaPeso type and the ProductVariation type
   * @deprecated 
   */
  variations?: Maybe<PaPesoToProductVariationConnection>;
};


/** The paPeso type */
export type PaPesoContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaPesoToContentNodeConnectionWhereArgs>;
};


/** The paPeso type */
export type PaPesoEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The paPeso type */
export type PaPesoEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The paPeso type */
export type PaPesoProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaPesoToProductConnectionWhereArgs>;
};


/** The paPeso type */
export type PaPesoVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaPesoToProductVariationConnectionWhereArgs>;
};

/** Arguments for filtering the PaPesoToContentNodeConnection connection */
export type PaPesoToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the paPeso type and the ContentNode type */
export type PaPesoToContentNodeConnection = {
  __typename?: 'PaPesoToContentNodeConnection';
  /**
   * Edges for the PaPesoToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PaPesoToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PaPesoToContentNodeConnectionEdge = {
  __typename?: 'PaPesoToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the PaPesoToProductConnection connection */
export type PaPesoToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the PaPeso type and the Product type */
export type PaPesoToProductConnection = {
  __typename?: 'PaPesoToProductConnection';
  /**
   * Edges for the PaPesoToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PaPesoToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PaPesoToProductConnectionEdge = {
  __typename?: 'PaPesoToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Connection between the paPeso type and the Taxonomy type */
export type PaPesoToTaxonomyConnectionEdge = {
  __typename?: 'PaPesoToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the PaPesoToProductVariationConnection connection */
export type PaPesoToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the PaPeso type and the ProductVariation type */
export type PaPesoToProductVariationConnection = {
  __typename?: 'PaPesoToProductVariationConnection';
  /**
   * Edges for the PaPesoToProductVariationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PaPesoToProductVariationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PaPesoToProductVariationConnectionEdge = {
  __typename?: 'PaPesoToProductVariationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductVariation>;
};

/** A product variation object */
export type ProductVariation = Node & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & {
  __typename?: 'ProductVariation';
  /**
   * Connection between the ProductVariation type and the VariationAttribute type
   * @deprecated 
   */
  attributes?: Maybe<ProductVariationToVariationAttributeConnection>;
  /**
   * Product variation backorders
   * @deprecated 
   */
  backorders?: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated 
   */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Product variation catalog visibility
   * @deprecated 
   */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * Connection between the ProductVariation type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ProductVariationToContentTypeConnectionEdge>;
  /**
   * The ID of the refund in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date variation created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated 
   */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated 
   */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /**
   * Product description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Download expiry
   * @deprecated 
   */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /**
   * Download limit
   * @deprecated 
   */
  downloadLimit?: Maybe<Scalars['Int']>;
  /**
   * Is downloadable?
   * @deprecated 
   */
  downloadable?: Maybe<Scalars['Boolean']>;
  /**
   * Product downloads
   * @deprecated 
   */
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * Does product variation have any visible attributes
   * @deprecated 
   */
  hasAttributes?: Maybe<Scalars['Boolean']>;
  /**
   * Product variation height
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product variation
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Product variation main image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product variation length
   * @deprecated 
   */
  length?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * if/how product variation stock is managed
   * @deprecated 
   */
  manageStock?: Maybe<ManageStockEnum>;
  /**
   * Menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date variation last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Is variation on sale?
   * @deprecated 
   */
  onSale?: Maybe<Scalars['Boolean']>;
  /**
   * The parent of the node. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<ProductVariationToVariableProductConnectionEdge>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * Product variation&#039;s active price
   * @deprecated 
   */
  price?: Maybe<Scalars['String']>;
  /**
   * If product variation can be bought
   * @deprecated 
   */
  purchasable?: Maybe<Scalars['Boolean']>;
  /**
   * Product variation purchase_note
   * @deprecated 
   */
  purchaseNote?: Maybe<Scalars['String']>;
  /**
   * Product variation&#039;s regular price
   * @deprecated 
   */
  regularPrice?: Maybe<Scalars['String']>;
  /**
   * Product variation&#039;s sale price
   * @deprecated 
   */
  salePrice?: Maybe<Scalars['String']>;
  /**
   * Product variation shipping class
   * @deprecated 
   */
  shippingClass?: Maybe<Scalars['String']>;
  /**
   * Connection between the ProductVariation type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<ProductVariationToShippingClassConnection>;
  /**
   * Product variation SKU (Stock-keeping unit)
   * @deprecated 
   */
  sku?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Variation status
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Product variation stock quantity
   * @deprecated 
   */
  stockQuantity?: Maybe<Scalars['Int']>;
  /**
   * Product stock status
   * @deprecated 
   */
  stockStatus?: Maybe<StockStatusEnum>;
  /**
   * Product variation tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Product type
   * @deprecated 
   */
  type?: Maybe<ProductTypesEnum>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Is product virtual?
   * @deprecated 
   */
  virtual?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the ProductVariation type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<ProductVariationToVisibleProductConnection>;
  /**
   * Product variation weight
   * @deprecated 
   */
  weight?: Maybe<Scalars['String']>;
  /**
   * Product variation width
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};


/** A product variation object */
export type ProductVariationAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product variation object */
export type ProductVariationEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product variation object */
export type ProductVariationEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product variation object */
export type ProductVariationMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A product variation object */
export type ProductVariationPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product variation object */
export type ProductVariationRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product variation object */
export type ProductVariationSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product variation object */
export type ProductVariationShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToShippingClassConnectionWhereArgs>;
};


/** A product variation object */
export type ProductVariationVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToVisibleProductConnectionWhereArgs>;
};

/** Connection between the ProductVariation type and the VariationAttribute type */
export type ProductVariationToVariationAttributeConnection = {
  __typename?: 'ProductVariationToVariationAttributeConnection';
  /**
   * Edges for the ProductVariationToVariationAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductVariationToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductVariationToVariationAttributeConnectionEdge = {
  __typename?: 'ProductVariationToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VariationAttribute>;
};

/** A product variation attribute object */
export type VariationAttribute = {
  __typename?: 'VariationAttribute';
  /**
   * The Id of the order. Equivalent to WP_Post-&gt;ID
   * @deprecated 
   */
  attributeId?: Maybe<Scalars['Int']>;
  /**
   * The Id of the order. Equivalent to WP_Post-&gt;ID
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Label of attribute
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Name of attribute
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Selected value of attribute
   * @deprecated 
   */
  value?: Maybe<Scalars['String']>;
};

/** Product backorder enumeration */
export enum BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES'
}

/** Connection between the ProductVariation type and the ContentType type */
export type ProductVariationToContentTypeConnectionEdge = {
  __typename?: 'ProductVariationToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** A product object */
export type ProductDownload = {
  __typename?: 'ProductDownload';
  /**
   * Is file allowed
   * @deprecated 
   */
  allowedFileType?: Maybe<Scalars['Boolean']>;
  /**
   * Product download ID
   * @deprecated 
   */
  downloadId: Scalars['String'];
  /**
   * Download file
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * Validate file exists
   * @deprecated 
   */
  fileExists?: Maybe<Scalars['Boolean']>;
  /**
   * File extension
   * @deprecated 
   */
  fileExt?: Maybe<Scalars['String']>;
  /**
   * Type of file path set
   * @deprecated 
   */
  filePathType?: Maybe<Scalars['String']>;
  /**
   * File type
   * @deprecated 
   */
  fileType?: Maybe<Scalars['String']>;
  /**
   * Product download name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
};

/** Product manage stock enumeration */
export enum ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE'
}

/** Extra data defined on the WC object */
export type MetaData = {
  __typename?: 'MetaData';
  /**
   * Meta ID.
   * @deprecated 
   */
  id: Scalars['String'];
  /**
   * Meta key.
   * @deprecated 
   */
  key: Scalars['String'];
  /**
   * Meta value.
   * @deprecated 
   */
  value?: Maybe<Scalars['String']>;
};

/** Connection between the ProductVariation type and the VariableProduct type */
export type ProductVariationToVariableProductConnectionEdge = {
  __typename?: 'ProductVariationToVariableProductConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<VariableProduct>;
};

/** A variable product object */
export type VariableProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & {
  __typename?: 'VariableProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated 
   */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated 
   */
  averageRating?: Maybe<Scalars['Float']>;
  /**
   * Product backorders status
   * @deprecated 
   */
  backorders?: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated 
   */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Catalog visibility
   * @deprecated 
   */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * Connection between the VariableProduct type and the Product type
   * @deprecated 
   */
  crossSell?: Maybe<VariableProductToProductConnection>;
  /**
   * The ID of the product in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated 
   */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated 
   */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /**
   * Connection between the VariableProduct type and the VariationAttribute type
   * @deprecated 
   */
  defaultAttributes?: Maybe<VariableProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated 
   */
  featured?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated 
   */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated 
   */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s height
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Main image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product&#039;s length
   * @deprecated 
   */
  length?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated 
   */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * If product manage stock
   * @deprecated 
   */
  manageStock?: Maybe<Scalars['Boolean']>;
  /**
   * Menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated 
   */
  onSale?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the paPeso type
   * @deprecated 
   */
  paPesos?: Maybe<ProductToPaPesoConnection>;
  /**
   * Parent product
   * @deprecated 
   */
  parent?: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated 
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** @deprecated  */
  productElements?: Maybe<Product_Productelements>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated 
   */
  productTags?: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated 
   */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated 
   */
  purchasable?: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated 
   */
  purchaseNote?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated 
   */
  regularPrice?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  related?: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated 
   */
  reviewCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated 
   */
  reviews?: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated 
   */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated 
   */
  salePrice?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO data of the Product
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * shipping class ID
   * @deprecated 
   */
  shippingClassId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /**
   * Does product need to be shipped?
   * @deprecated 
   */
  shippingRequired?: Maybe<Scalars['Boolean']>;
  /**
   * Is product shipping taxable?
   * @deprecated 
   */
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  /**
   * Product short description
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated 
   */
  sku?: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * If should be sold individually
   * @deprecated 
   */
  soldIndividually?: Maybe<Scalars['Boolean']>;
  /**
   * Product status
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Number of items available for sale
   * @deprecated 
   */
  stockQuantity?: Maybe<Scalars['Int']>;
  /**
   * Tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Number total of sales
   * @deprecated 
   */
  totalSales?: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated 
   */
  type?: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  upsell?: Maybe<ProductToUpsellConnection>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Connection between the VariableProduct type and the ProductVariation type
   * @deprecated 
   */
  variations?: Maybe<VariableProductToProductVariationConnection>;
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  /**
   * Product&#039;s weight
   * @deprecated 
   */
  weight?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s width
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};


/** A variable product object */
export type VariableProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A variable product object */
export type VariableProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A variable product object */
export type VariableProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A variable product object */
export type VariableProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A variable product object */
export type VariableProductPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaPesoConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A variable product object */
export type VariableProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductVariationConnectionWhereArgs>;
};


/** A variable product object */
export type VariableProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

/** Arguments for filtering the VariableProductToProductConnection connection */
export type VariableProductToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the VariableProduct type and the Product type */
export type VariableProductToProductConnection = {
  __typename?: 'VariableProductToProductConnection';
  /**
   * Edges for the VariableProductToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<VariableProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type VariableProductToProductConnectionEdge = {
  __typename?: 'VariableProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Connection between the VariableProduct type and the VariationAttribute type */
export type VariableProductToVariationAttributeConnection = {
  __typename?: 'VariableProductToVariationAttributeConnection';
  /**
   * Edges for the VariableProductToVariationAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<VariableProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type VariableProductToVariationAttributeConnectionEdge = {
  __typename?: 'VariableProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VariationAttribute>;
};

/** Pricing field format enumeration */
export enum PricingFieldFormatEnum {
  Formatted = 'FORMATTED',
  Raw = 'RAW'
}

/** Arguments for filtering the ProductToProductCategoryConnection connection */
export type ProductToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the productCategory type */
export type ProductToProductCategoryConnection = {
  __typename?: 'ProductToProductCategoryConnection';
  /**
   * Edges for the ProductToProductCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToProductCategoryConnectionEdge = {
  __typename?: 'ProductToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO Primary product_cat
   * @deprecated 
   */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** Field Group */
export type Product_Productelements = {
  __typename?: 'Product_Productelements';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  productGallery?: Maybe<Array<Maybe<Product_Productelements_ProductGallery>>>;
};

/** Field Group */
export type Product_Productelements_ProductGallery = {
  __typename?: 'Product_Productelements_productGallery';
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
};

/** Arguments for filtering the ProductToProductTagConnection connection */
export type ProductToProductTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the productTag type */
export type ProductToProductTagConnection = {
  __typename?: 'ProductToProductTagConnection';
  /**
   * Edges for the ProductToProductTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToProductTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToProductTagConnectionEdge = {
  __typename?: 'ProductToProductTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductTag>;
};

/** The productTag type */
export type ProductTag = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & MenuItemLinkable & {
  __typename?: 'ProductTag';
  /**
   * Connection between the productTag type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ProductTagToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productTagId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the ProductTag type and the Product type
   * @deprecated 
   */
  products?: Maybe<ProductTagToProductConnection>;
  /**
   * The Yoast SEO data of the Product tags taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the productTag type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<ProductTagToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The productTag type */
export type ProductTagContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToContentNodeConnectionWhereArgs>;
};


/** The productTag type */
export type ProductTagEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productTag type */
export type ProductTagEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productTag type */
export type ProductTagProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToProductConnectionWhereArgs>;
};

/** Arguments for filtering the ProductTagToContentNodeConnection connection */
export type ProductTagToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the productTag type and the ContentNode type */
export type ProductTagToContentNodeConnection = {
  __typename?: 'ProductTagToContentNodeConnection';
  /**
   * Edges for the ProductTagToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductTagToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductTagToContentNodeConnectionEdge = {
  __typename?: 'ProductTagToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Arguments for filtering the ProductTagToProductConnection connection */
export type ProductTagToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the ProductTag type and the Product type */
export type ProductTagToProductConnection = {
  __typename?: 'ProductTagToProductConnection';
  /**
   * Edges for the ProductTagToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductTagToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductTagToProductConnectionEdge = {
  __typename?: 'ProductTagToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Connection between the productTag type and the Taxonomy type */
export type ProductTagToTaxonomyConnectionEdge = {
  __typename?: 'ProductTagToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the ProductToProductTypeConnection connection */
export type ProductToProductTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the productType type */
export type ProductToProductTypeConnection = {
  __typename?: 'ProductToProductTypeConnection';
  /**
   * Edges for the ProductToProductTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToProductTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToProductTypeConnectionEdge = {
  __typename?: 'ProductToProductTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductType>;
};

/** The productType type */
export type ProductType = Node & TermNode & DatabaseIdentifier & {
  __typename?: 'ProductType';
  /**
   * Connection between the productType type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ProductTypeToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productTypeId?: Maybe<Scalars['Int']>;
  /**
   * The Yoast SEO data of the Product type taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the productType type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<ProductTypeToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The productType type */
export type ProductTypeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTypeToContentNodeConnectionWhereArgs>;
};


/** The productType type */
export type ProductTypeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The productType type */
export type ProductTypeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ProductTypeToContentNodeConnection connection */
export type ProductTypeToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the productType type and the ContentNode type */
export type ProductTypeToContentNodeConnection = {
  __typename?: 'ProductTypeToContentNodeConnection';
  /**
   * Edges for the ProductTypeToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductTypeToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductTypeToContentNodeConnectionEdge = {
  __typename?: 'ProductTypeToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the productType type and the Taxonomy type */
export type ProductTypeToTaxonomyConnectionEdge = {
  __typename?: 'ProductTypeToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the ProductToProductConnection connection */
export type ProductToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Shuffle results? (Pagination currently not support by this argument) */
  shuffle?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the Product type and the Product type */
export type ProductToProductConnection = {
  __typename?: 'ProductToProductConnection';
  /**
   * Edges for the ProductToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToProductConnectionEdge = {
  __typename?: 'ProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Arguments for filtering the ProductToCommentConnection connection */
export type ProductToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Product type and the Comment type */
export type ProductToCommentConnection = {
  __typename?: 'ProductToCommentConnection';
  /**
   * Average review rating for this product.
   * @deprecated 
   */
  averageRating?: Maybe<Scalars['Float']>;
  /**
   * Edges for the ProductToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToCommentConnectionEdge = {
  __typename?: 'ProductToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
  /**
   * Review rating
   * @deprecated 
   */
  rating?: Maybe<Scalars['Float']>;
};

/** Arguments for filtering the ProductToShippingClassConnection connection */
export type ProductToShippingClassConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the shippingClass type */
export type ProductToShippingClassConnection = {
  __typename?: 'ProductToShippingClassConnection';
  /**
   * Edges for the ProductToShippingClassConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToShippingClassConnectionEdge = {
  __typename?: 'ProductToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ShippingClass>;
};

/** The shippingClass type */
export type ShippingClass = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & {
  __typename?: 'ShippingClass';
  /**
   * Connection between the shippingClass type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<ShippingClassToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO data of the Product shipping classes taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  shippingClassId?: Maybe<Scalars['Int']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the shippingClass type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<ShippingClassToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
};


/** The shippingClass type */
export type ShippingClassContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShippingClassToContentNodeConnectionWhereArgs>;
};


/** The shippingClass type */
export type ShippingClassEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The shippingClass type */
export type ShippingClassEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ShippingClassToContentNodeConnection connection */
export type ShippingClassToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the shippingClass type and the ContentNode type */
export type ShippingClassToContentNodeConnection = {
  __typename?: 'ShippingClassToContentNodeConnection';
  /**
   * Edges for the ShippingClassToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ShippingClassToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ShippingClassToContentNodeConnectionEdge = {
  __typename?: 'ShippingClassToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the shippingClass type and the Taxonomy type */
export type ShippingClassToTaxonomyConnectionEdge = {
  __typename?: 'ShippingClassToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Tax class enumeration */
export enum TaxClassEnum {
  /** Inherits Tax class from cart */
  InheritCart = 'INHERIT_CART',
  NessunaTariffa = 'NESSUNA_TARIFFA',
  ReducedRate = 'REDUCED_RATE',
  /** Standard Tax rate */
  Standard = 'STANDARD',
  TariffaRidotta = 'TARIFFA_RIDOTTA',
  ZeroRate = 'ZERO_RATE'
}

/** Product tax status enumeration */
export enum TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE'
}

/** Arguments for filtering the ProductToUpsellConnection connection */
export type ProductToUpsellConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the Product type and the Product type */
export type ProductToUpsellConnection = {
  __typename?: 'ProductToUpsellConnection';
  /**
   * Edges for the ProductToUpsellConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToUpsellConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToUpsellConnectionEdge = {
  __typename?: 'ProductToUpsellConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Arguments for filtering the VariableProductToProductVariationConnection connection */
export type VariableProductToProductVariationConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the VariableProduct type and the ProductVariation type */
export type VariableProductToProductVariationConnection = {
  __typename?: 'VariableProductToProductVariationConnection';
  /**
   * Edges for the VariableProductToProductVariationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<VariableProductToProductVariationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type VariableProductToProductVariationConnectionEdge = {
  __typename?: 'VariableProductToProductVariationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductVariation>;
};

/** Arguments for filtering the ProductToVisibleProductConnection connection */
export type ProductToVisibleProductConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Product type and the visibleProduct type */
export type ProductToVisibleProductConnection = {
  __typename?: 'ProductToVisibleProductConnection';
  /**
   * Edges for the ProductToVisibleProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductToVisibleProductConnectionEdge = {
  __typename?: 'ProductToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VisibleProduct>;
};

/** The visibleProduct type */
export type VisibleProduct = Node & TermNode & DatabaseIdentifier & {
  __typename?: 'VisibleProduct';
  /**
   * Connection between the visibleProduct type and the ContentNode type
   * @deprecated 
   */
  contentNodes?: Maybe<VisibleProductToContentNodeConnection>;
  /**
   * The number of objects connected to the object
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Connection between the TermNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the TermNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO data of the Product visibility taxonomy.
   * @deprecated 
   */
  seo?: Maybe<TaxonomySeo>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the visibleProduct type and the Taxonomy type
   * @deprecated 
   */
  taxonomy?: Maybe<VisibleProductToTaxonomyConnectionEdge>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The unique resource identifier path
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  visibleProductId?: Maybe<Scalars['Int']>;
};


/** The visibleProduct type */
export type VisibleProductContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VisibleProductToContentNodeConnectionWhereArgs>;
};


/** The visibleProduct type */
export type VisibleProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The visibleProduct type */
export type VisibleProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the VisibleProductToContentNodeConnection connection */
export type VisibleProductToContentNodeConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the visibleProduct type and the ContentNode type */
export type VisibleProductToContentNodeConnection = {
  __typename?: 'VisibleProductToContentNodeConnection';
  /**
   * Edges for the VisibleProductToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<VisibleProductToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type VisibleProductToContentNodeConnectionEdge = {
  __typename?: 'VisibleProductToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** Connection between the visibleProduct type and the Taxonomy type */
export type VisibleProductToTaxonomyConnectionEdge = {
  __typename?: 'VisibleProductToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the ProductVariationToShippingClassConnection connection */
export type ProductVariationToShippingClassConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the ProductVariation type and the shippingClass type */
export type ProductVariationToShippingClassConnection = {
  __typename?: 'ProductVariationToShippingClassConnection';
  /**
   * Edges for the ProductVariationToShippingClassConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductVariationToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductVariationToShippingClassConnectionEdge = {
  __typename?: 'ProductVariationToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ShippingClass>;
};

/** Arguments for filtering the ProductVariationToVisibleProductConnection connection */
export type ProductVariationToVisibleProductConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the ProductVariation type and the visibleProduct type */
export type ProductVariationToVisibleProductConnection = {
  __typename?: 'ProductVariationToVisibleProductConnection';
  /**
   * Edges for the ProductVariationToVisibleProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProductVariationToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ProductVariationToVisibleProductConnectionEdge = {
  __typename?: 'ProductVariationToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VisibleProduct>;
};

/** Connection between the productCategory type and the Taxonomy type */
export type ProductCategoryToTaxonomyConnectionEdge = {
  __typename?: 'ProductCategoryToTaxonomyConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** Arguments for filtering the CouponToExcludedProductsConnection connection */
export type CouponToExcludedProductsConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the Coupon type and the Product type */
export type CouponToExcludedProductsConnection = {
  __typename?: 'CouponToExcludedProductsConnection';
  /**
   * Edges for the CouponToExcludedProductsConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CouponToExcludedProductsConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CouponToExcludedProductsConnectionEdge = {
  __typename?: 'CouponToExcludedProductsConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Arguments for filtering the CouponToProductCategoryConnection connection */
export type CouponToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Coupon type and the productCategory type */
export type CouponToProductCategoryConnection = {
  __typename?: 'CouponToProductCategoryConnection';
  /**
   * Edges for the CouponToProductCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CouponToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CouponToProductCategoryConnectionEdge = {
  __typename?: 'CouponToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** Arguments for filtering the CouponToProductConnection connection */
export type CouponToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the Coupon type and the Product type */
export type CouponToProductConnection = {
  __typename?: 'CouponToProductConnection';
  /**
   * Edges for the CouponToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CouponToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CouponToProductConnectionEdge = {
  __typename?: 'CouponToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Arguments for filtering the CouponToCustomerConnection connection */
export type CouponToCustomerConnectionWhereArgs = {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Field to order the connection by */
export enum CustomerConnectionOrderbyEnum {
  /** Order by customer email */
  Email = 'EMAIL',
  /** Order by customer ID */
  Id = 'ID',
  /** Order by include field */
  Include = 'INCLUDE',
  /** Order by customer display name */
  Name = 'NAME',
  /** Order by customer registration date */
  RegisteredDate = 'REGISTERED_DATE',
  /** Order by customer username */
  Username = 'USERNAME'
}

/** Names of available user roles */
export enum UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the Coupon type and the Customer type */
export type CouponToCustomerConnection = {
  __typename?: 'CouponToCustomerConnection';
  /**
   * Edges for the CouponToCustomerConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CouponToCustomerConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Customer>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CouponToCustomerConnectionEdge = {
  __typename?: 'CouponToCustomerConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Customer>;
};

/** A customer object */
export type Customer = Node & {
  __typename?: 'Customer';
  /**
   * Return the date customer billing address properties
   * @deprecated 
   */
  billing?: Maybe<CustomerAddress>;
  /**
   * Has customer calculated shipping?
   * @deprecated 
   */
  calculatedShipping?: Maybe<Scalars['Boolean']>;
  /**
   * The ID of the customer in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Return the date customer was created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Return the customer&#039;s display name.
   * @deprecated 
   */
  displayName?: Maybe<Scalars['String']>;
  /**
   * Connection between the Customer type and the DownloadableItem type
   * @deprecated 
   */
  downloadableItems?: Maybe<CustomerToDownloadableItemConnection>;
  /**
   * Return the customer&#039;s email.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Return the customer&#039;s first name.
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * Has calculated shipping?
   * @deprecated 
   */
  hasCalculatedShipping?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the customer
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Return the date customer was last updated
   * @deprecated 
   */
  isPayingCustomer?: Maybe<Scalars['Boolean']>;
  /**
   * Is customer VAT exempt?
   * @deprecated 
   */
  isVatExempt?: Maybe<Scalars['Boolean']>;
  /**
   * Return the customer&#039;s last name.
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * Gets the customers last order.
   * @deprecated 
   */
  lastOrder?: Maybe<Order>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Return the date customer was last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * Return the number of orders this customer has.
   * @deprecated 
   */
  orderCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Customer type and the Order type
   * @deprecated 
   */
  orders?: Maybe<CustomerToOrderConnection>;
  /**
   * Connection between the Customer type and the Refund type
   * @deprecated 
   */
  refunds?: Maybe<CustomerToRefundConnection>;
  /**
   * Return the customer&#039;s user role.
   * @deprecated 
   */
  role?: Maybe<Scalars['String']>;
  /**
   * A JWT token that can be used in future requests to for WooCommerce session identification
   * @deprecated 
   */
  sessionToken?: Maybe<Scalars['String']>;
  /**
   * Return the date customer shipping address properties
   * @deprecated 
   */
  shipping?: Maybe<CustomerAddress>;
  /**
   * Return how much money this customer has spent.
   * @deprecated 
   */
  totalSpent?: Maybe<Scalars['Float']>;
  /**
   * Return the customer&#039;s username.
   * @deprecated 
   */
  username?: Maybe<Scalars['String']>;
};


/** A customer object */
export type CustomerDownloadableItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToDownloadableItemConnectionWhereArgs>;
};


/** A customer object */
export type CustomerMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A customer object */
export type CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToOrderConnectionWhereArgs>;
};


/** A customer object */
export type CustomerRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToRefundConnectionWhereArgs>;
};

/** A customer address object */
export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /**
   * Address 1
   * @deprecated 
   */
  address1?: Maybe<Scalars['String']>;
  /**
   * Address 2
   * @deprecated 
   */
  address2?: Maybe<Scalars['String']>;
  /**
   * City
   * @deprecated 
   */
  city?: Maybe<Scalars['String']>;
  /**
   * Company
   * @deprecated 
   */
  company?: Maybe<Scalars['String']>;
  /**
   * Country
   * @deprecated 
   */
  country?: Maybe<CountriesEnum>;
  /**
   * E-mail
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * First name
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * Last name
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * Phone
   * @deprecated 
   */
  phone?: Maybe<Scalars['String']>;
  /**
   * Zip Postal Code
   * @deprecated 
   */
  postcode?: Maybe<Scalars['String']>;
  /**
   * State
   * @deprecated 
   */
  state?: Maybe<Scalars['String']>;
};

/** Countries enumeration */
export enum CountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

/** Arguments for filtering the CustomerToDownloadableItemConnection connection */
export type CustomerToDownloadableItemConnectionWhereArgs = {
  /** Limit results to downloadable items that can be downloaded now. */
  active?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Customer type and the DownloadableItem type */
export type CustomerToDownloadableItemConnection = {
  __typename?: 'CustomerToDownloadableItemConnection';
  /**
   * Edges for the CustomerToDownloadableItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CustomerToDownloadableItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CustomerToDownloadableItemConnectionEdge = {
  __typename?: 'CustomerToDownloadableItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<DownloadableItem>;
};

/** A downloadable item */
export type DownloadableItem = {
  __typename?: 'DownloadableItem';
  /**
   * The date the downloadable item expires
   * @deprecated 
   */
  accessExpires?: Maybe<Scalars['String']>;
  /**
   * ProductDownload of the downloadable item
   * @deprecated 
   */
  download?: Maybe<ProductDownload>;
  /**
   * Downloadable item unique identifier
   * @deprecated 
   */
  downloadId: Scalars['String'];
  /**
   * Number of times the item can be downloaded.
   * @deprecated 
   */
  downloadsRemaining?: Maybe<Scalars['Int']>;
  /**
   * Name of the downloadable item.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Product of downloadable item.
   * @deprecated 
   */
  product?: Maybe<Product>;
  /**
   * Download URL of the downloadable item.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** A order object */
export type Order = Node & NodeWithComments & {
  __typename?: 'Order';
  /**
   * Order billing properties
   * @deprecated 
   */
  billing?: Maybe<CustomerAddress>;
  /**
   * Cart hash
   * @deprecated 
   */
  cartHash?: Maybe<Scalars['String']>;
  /**
   * Cart tax amount
   * @deprecated 
   */
  cartTax?: Maybe<Scalars['String']>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<OrderToContentTypeConnectionEdge>;
  /**
   * Connection between the Order type and the CouponLine type
   * @deprecated 
   */
  couponLines?: Maybe<OrderToCouponLineConnection>;
  /**
   * How order was created
   * @deprecated 
   */
  createdVia?: Maybe<Scalars['String']>;
  /**
   * Order currency
   * @deprecated 
   */
  currency?: Maybe<Scalars['String']>;
  /**
   * Order customer
   * @deprecated 
   */
  customer?: Maybe<Customer>;
  /**
   * Customer IP Address
   * @deprecated 
   */
  customerIpAddress?: Maybe<Scalars['String']>;
  /**
   * Customer note
   * @deprecated 
   */
  customerNote?: Maybe<Scalars['String']>;
  /**
   * Customer User Agent
   * @deprecated 
   */
  customerUserAgent?: Maybe<Scalars['String']>;
  /**
   * The ID of the order in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Date order was created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date order was completed
   * @deprecated 
   */
  dateCompleted?: Maybe<Scalars['String']>;
  /**
   * Date order was paid
   * @deprecated 
   */
  datePaid?: Maybe<Scalars['String']>;
  /**
   * Discount tax amount
   * @deprecated 
   */
  discountTax?: Maybe<Scalars['String']>;
  /**
   * Discount total amount
   * @deprecated 
   */
  discountTotal?: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the DownloadableItem type
   * @deprecated 
   */
  downloadableItems?: Maybe<OrderToDownloadableItemConnection>;
  /**
   * Connection between the Order type and the FeeLine type
   * @deprecated 
   */
  feeLines?: Maybe<OrderToFeeLineConnection>;
  /**
   * Order has a billing address?
   * @deprecated 
   */
  hasBillingAddress?: Maybe<Scalars['Boolean']>;
  /**
   * If order contains a downloadable product
   * @deprecated 
   */
  hasDownloadableItem?: Maybe<Scalars['Boolean']>;
  /**
   * Order has a shipping address?
   * @deprecated 
   */
  hasShippingAddress?: Maybe<Scalars['Boolean']>;
  /**
   * The globally unique identifier for the order
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Is product download is permitted
   * @deprecated 
   */
  isDownloadPermitted?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Order type and the LineItem type
   * @deprecated 
   */
  lineItems?: Maybe<OrderToLineItemConnection>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date order was last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * If order needs payment
   * @deprecated 
   */
  needsPayment?: Maybe<Scalars['Boolean']>;
  /**
   * If order needs processing before it can be completed
   * @deprecated 
   */
  needsProcessing?: Maybe<Scalars['Boolean']>;
  /**
   * If order needs shipping address
   * @deprecated 
   */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /**
   * Order key
   * @deprecated 
   */
  orderKey?: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the Comment type
   * @deprecated 
   */
  orderNotes?: Maybe<OrderToCommentConnection>;
  /**
   * Order number
   * @deprecated 
   */
  orderNumber?: Maybe<Scalars['String']>;
  /**
   * Order version
   * @deprecated 
   */
  orderVersion?: Maybe<Scalars['String']>;
  /**
   * Parent order
   * @deprecated 
   */
  parent?: Maybe<Order>;
  /**
   * Payment method
   * @deprecated 
   */
  paymentMethod?: Maybe<Scalars['String']>;
  /**
   * Payment method title
   * @deprecated 
   */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /**
   * Prices include taxes?
   * @deprecated 
   */
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Order type and the Refund type
   * @deprecated 
   */
  refunds?: Maybe<OrderToRefundConnection>;
  /**
   * Order shipping properties
   * @deprecated 
   */
  shipping?: Maybe<CustomerAddress>;
  /**
   * Order customer
   * @deprecated 
   */
  shippingAddressMapUrl?: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the ShippingLine type
   * @deprecated 
   */
  shippingLines?: Maybe<OrderToShippingLineConnection>;
  /**
   * Shipping tax amount
   * @deprecated 
   */
  shippingTax?: Maybe<Scalars['String']>;
  /**
   * Shipping total amount
   * @deprecated 
   */
  shippingTotal?: Maybe<Scalars['String']>;
  /**
   * Order status
   * @deprecated 
   */
  status?: Maybe<OrderStatusEnum>;
  /**
   * Order subtotal
   * @deprecated 
   */
  subtotal?: Maybe<Scalars['String']>;
  /**
   * Connection between the Order type and the TaxLine type
   * @deprecated 
   */
  taxLines?: Maybe<OrderToTaxLineConnection>;
  /**
   * Order grand total
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Order taxes
   * @deprecated 
   */
  totalTax?: Maybe<Scalars['String']>;
  /**
   * Transaction ID
   * @deprecated 
   */
  transactionId?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderCartTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderCouponLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderDiscountTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderDiscountTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderDownloadableItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToDownloadableItemConnectionWhereArgs>;
};


/** A order object */
export type OrderFeeLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A order object */
export type OrderOrderNotesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToCommentConnectionWhereArgs>;
};


/** A order object */
export type OrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToRefundConnectionWhereArgs>;
};


/** A order object */
export type OrderShippingLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderShippingTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderShippingTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderSubtotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A order object */
export type OrderTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A order object */
export type OrderTotalTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};

/** Connection between the Order type and the ContentType type */
export type OrderToContentTypeConnectionEdge = {
  __typename?: 'OrderToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Connection between the Order type and the CouponLine type */
export type OrderToCouponLineConnection = {
  __typename?: 'OrderToCouponLineConnection';
  /**
   * Edges for the OrderToCouponLineConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToCouponLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CouponLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToCouponLineConnectionEdge = {
  __typename?: 'OrderToCouponLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CouponLine>;
};

/** a coupon line object */
export type CouponLine = {
  __typename?: 'CouponLine';
  /**
   * Line&#039;s Coupon code
   * @deprecated 
   */
  code?: Maybe<Scalars['String']>;
  /**
   * Line&#039;s Coupon
   * @deprecated 
   */
  coupon?: Maybe<Coupon>;
  /**
   * The ID of the order item in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Line&#039;s Discount total
   * @deprecated 
   */
  discount?: Maybe<Scalars['String']>;
  /**
   * Line&#039;s Discount total tax
   * @deprecated 
   */
  discountTax?: Maybe<Scalars['String']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated 
   */
  orderId?: Maybe<Scalars['Int']>;
};


/** a coupon line object */
export type CouponLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the OrderToDownloadableItemConnection connection */
export type OrderToDownloadableItemConnectionWhereArgs = {
  /** Limit results to downloadable items that can be downloaded now. */
  active?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Order type and the DownloadableItem type */
export type OrderToDownloadableItemConnection = {
  __typename?: 'OrderToDownloadableItemConnection';
  /**
   * Edges for the OrderToDownloadableItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToDownloadableItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToDownloadableItemConnectionEdge = {
  __typename?: 'OrderToDownloadableItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<DownloadableItem>;
};

/** Connection between the Order type and the FeeLine type */
export type OrderToFeeLineConnection = {
  __typename?: 'OrderToFeeLineConnection';
  /**
   * Edges for the OrderToFeeLineConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToFeeLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<FeeLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToFeeLineConnectionEdge = {
  __typename?: 'OrderToFeeLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<FeeLine>;
};

/** a fee line object */
export type FeeLine = {
  __typename?: 'FeeLine';
  /**
   * Fee amount
   * @deprecated 
   */
  amount?: Maybe<Scalars['String']>;
  /**
   * The ID of the order item in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Fee name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated 
   */
  orderId?: Maybe<Scalars['Int']>;
  /**
   * Line tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Tax status of fee
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * Line taxes
   * @deprecated 
   */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /**
   * Line total (after discounts)
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Line total tax (after discounts)
   * @deprecated 
   */
  totalTax?: Maybe<Scalars['String']>;
};


/** a fee line object */
export type FeeLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** Order item tax statement */
export type OrderItemTax = {
  __typename?: 'OrderItemTax';
  /**
   * Amount taxed
   * @deprecated 
   */
  amount?: Maybe<Scalars['Float']>;
  /**
   * Subtotal
   * @deprecated 
   */
  subtotal?: Maybe<Scalars['Float']>;
  /**
   * Tax line connected to this statement
   * @deprecated 
   */
  taxLine?: Maybe<TaxLine>;
  /**
   * Order item ID for tax line connected to this statement
   * @deprecated 
   */
  taxLineId: Scalars['Int'];
  /**
   * Total
   * @deprecated 
   */
  total?: Maybe<Scalars['Float']>;
};

/** a tax line object */
export type TaxLine = {
  __typename?: 'TaxLine';
  /**
   * The ID of the order item in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Is this a compound tax rate?
   * @deprecated 
   */
  isCompound?: Maybe<Scalars['Boolean']>;
  /**
   * Tax rate label
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated 
   */
  orderId?: Maybe<Scalars['Int']>;
  /**
   * Tax rate code/name
   * @deprecated 
   */
  rateCode?: Maybe<Scalars['String']>;
  /**
   * Tax line&#039;s shipping tax total
   * @deprecated 
   */
  shippingTaxTotal?: Maybe<Scalars['String']>;
  /**
   * Tax line&#039;s tax rate
   * @deprecated 
   */
  taxRate?: Maybe<TaxRate>;
  /**
   * Tax total (not including shipping taxes)
   * @deprecated 
   */
  taxTotal?: Maybe<Scalars['String']>;
};


/** a tax line object */
export type TaxLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** A Tax rate object */
export type TaxRate = Node & {
  __typename?: 'TaxRate';
  /**
   * City name.
   * @deprecated 
   */
  city?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Tax class. Default is standard.
   * @deprecated 
   */
  class?: Maybe<TaxClassEnum>;
  /**
   * Whether or not this is a compound rate.
   * @deprecated 
   */
  compound?: Maybe<Scalars['Boolean']>;
  /**
   * Country ISO 3166 code.
   * @deprecated 
   */
  country?: Maybe<Scalars['String']>;
  /**
   * The ID of the customer in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier for the tax rate.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Tax rate name.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Indicates the order that will appear in queries.
   * @deprecated 
   */
  order?: Maybe<Scalars['Int']>;
  /**
   * Postcode/ZIP.
   * @deprecated 
   */
  postcode?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Tax priority.
   * @deprecated 
   */
  priority?: Maybe<Scalars['Int']>;
  /**
   * Tax rate.
   * @deprecated 
   */
  rate?: Maybe<Scalars['String']>;
  /**
   * Whether or not this tax rate also gets applied to shipping.
   * @deprecated 
   */
  shipping?: Maybe<Scalars['Boolean']>;
  /**
   * State code.
   * @deprecated 
   */
  state?: Maybe<Scalars['String']>;
};

/** Connection between the Order type and the LineItem type */
export type OrderToLineItemConnection = {
  __typename?: 'OrderToLineItemConnection';
  /**
   * Edges for the OrderToLineItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToLineItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<LineItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToLineItemConnectionEdge = {
  __typename?: 'OrderToLineItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<LineItem>;
};

/** a line item object */
export type LineItem = {
  __typename?: 'LineItem';
  /**
   * The ID of the order item in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s taxes
   * @deprecated 
   */
  itemDownloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated 
   */
  orderId?: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s product object
   * @deprecated 
   */
  product?: Maybe<Product>;
  /**
   * Line item&#039;s product ID
   * @deprecated 
   */
  productId?: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s product quantity
   * @deprecated 
   */
  quantity?: Maybe<Scalars['Int']>;
  /**
   * Line item&#039;s subtotal
   * @deprecated 
   */
  subtotal?: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s subtotal tax
   * @deprecated 
   */
  subtotalTax?: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Line item&#039;s taxes
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * Line item&#039;s taxes
   * @deprecated 
   */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /**
   * Line item&#039;s total
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s total tax
   * @deprecated 
   */
  totalTax?: Maybe<Scalars['String']>;
  /**
   * Line item&#039;s product variation object
   * @deprecated 
   */
  variation?: Maybe<ProductVariation>;
  /**
   * Line item&#039;s product variation ID
   * @deprecated 
   */
  variationId?: Maybe<Scalars['Int']>;
};


/** a line item object */
export type LineItemMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the OrderToCommentConnection connection */
export type OrderToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Order type and the Comment type */
export type OrderToCommentConnection = {
  __typename?: 'OrderToCommentConnection';
  /**
   * Edges for the OrderToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToCommentConnectionEdge = {
  __typename?: 'OrderToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * Is this a customer note?
   * @deprecated 
   */
  isCustomerNote?: Maybe<Scalars['Boolean']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the OrderToRefundConnection connection */
export type OrderToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the Order type and the Refund type */
export type OrderToRefundConnection = {
  __typename?: 'OrderToRefundConnection';
  /**
   * Edges for the OrderToRefundConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToRefundConnectionEdge = {
  __typename?: 'OrderToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Refund>;
};

/** A refund object */
export type Refund = Node & {
  __typename?: 'Refund';
  /**
   * Refunded amount
   * @deprecated 
   */
  amount?: Maybe<Scalars['Float']>;
  /**
   * Connection between the Refund type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<RefundToContentTypeConnectionEdge>;
  /**
   * The ID of the refund in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier for the refund
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Connection between the Refund type and the LineItem type
   * @deprecated 
   */
  lineItems?: Maybe<RefundToLineItemConnection>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Reason for refund
   * @deprecated 
   */
  reason?: Maybe<Scalars['String']>;
  /**
   * User who completed the refund
   * @deprecated 
   */
  refundedBy?: Maybe<User>;
  /**
   * A title for the new post type
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
};


/** A refund object */
export type RefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A refund object */
export type RefundMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Refund type and the ContentType type */
export type RefundToContentTypeConnectionEdge = {
  __typename?: 'RefundToContentTypeConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** Connection between the Refund type and the LineItem type */
export type RefundToLineItemConnection = {
  __typename?: 'RefundToLineItemConnection';
  /**
   * Edges for the RefundToLineItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RefundToLineItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<LineItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RefundToLineItemConnectionEdge = {
  __typename?: 'RefundToLineItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<LineItem>;
};

/** Connection between the Order type and the ShippingLine type */
export type OrderToShippingLineConnection = {
  __typename?: 'OrderToShippingLineConnection';
  /**
   * Edges for the OrderToShippingLineConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToShippingLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ShippingLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToShippingLineConnectionEdge = {
  __typename?: 'OrderToShippingLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ShippingLine>;
};

/** a shipping line object */
export type ShippingLine = {
  __typename?: 'ShippingLine';
  /**
   * The ID of the order item in the database
   * @deprecated 
   */
  databaseId?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Shipping Line&#039;s shipping method name
   * @deprecated 
   */
  methodTitle?: Maybe<Scalars['String']>;
  /**
   * The Id of the order the order item belongs to.
   * @deprecated 
   */
  orderId?: Maybe<Scalars['Int']>;
  /**
   * Shipping Line&#039;s shipping method
   * @deprecated 
   */
  shippingMethod?: Maybe<ShippingMethod>;
  /**
   * Line tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Line taxes
   * @deprecated 
   */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /**
   * Line total (after discounts)
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Line total tax (after discounts)
   * @deprecated 
   */
  totalTax?: Maybe<Scalars['String']>;
};


/** a shipping line object */
export type ShippingLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

/** A shipping method object */
export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  /**
   * The ID of the shipping method in the database
   * @deprecated 
   */
  databaseId: Scalars['ID'];
  /**
   * Shipping method description.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the tax rate.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Shipping method title.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
};

/** Order status enumeration */
export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

/** Connection between the Order type and the TaxLine type */
export type OrderToTaxLineConnection = {
  __typename?: 'OrderToTaxLineConnection';
  /**
   * Edges for the OrderToTaxLineConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<OrderToTaxLineConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TaxLine>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type OrderToTaxLineConnectionEdge = {
  __typename?: 'OrderToTaxLineConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TaxLine>;
};

/** Arguments for filtering the CustomerToOrderConnection connection */
export type CustomerToOrderConnectionWhereArgs = {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
};

/** Options for ordering the connection */
export type OrdersOrderbyInput = {
  field: OrdersOrderByEnum;
  order?: Maybe<OrderEnum>;
};

/** Fields to order the Orders connection by */
export enum OrdersOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Order by date the order was completed */
  DateCompleted = 'DATE_COMPLETED',
  /** Order by date the order was paid */
  DatePaid = 'DATE_PAID',
  /** Order by order discount amount */
  Discount = 'DISCOUNT',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by order key */
  OrderKey = 'ORDER_KEY',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by order total */
  Tax = 'TAX',
  /** Order by order total */
  Total = 'TOTAL'
}

/** Connection between the Customer type and the Order type */
export type CustomerToOrderConnection = {
  __typename?: 'CustomerToOrderConnection';
  /**
   * Edges for the CustomerToOrderConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CustomerToOrderConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Order>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CustomerToOrderConnectionEdge = {
  __typename?: 'CustomerToOrderConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Order>;
};

/** Arguments for filtering the CustomerToRefundConnection connection */
export type CustomerToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the Customer type and the Refund type */
export type CustomerToRefundConnection = {
  __typename?: 'CustomerToRefundConnection';
  /**
   * Edges for the CustomerToRefundConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CustomerToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CustomerToRefundConnectionEdge = {
  __typename?: 'CustomerToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Refund>;
};

/** Shipping package object */
export type ShippingPackage = {
  __typename?: 'ShippingPackage';
  /**
   * Shipping package details
   * @deprecated 
   */
  packageDetails?: Maybe<Scalars['String']>;
  /**
   * Shipping package rates
   * @deprecated 
   */
  rates?: Maybe<Array<Maybe<ShippingRate>>>;
  /**
   * This shipping package supports the shipping calculator.
   * @deprecated 
   */
  supportsShippingCalculator?: Maybe<Scalars['Boolean']>;
};

/** Shipping rate object */
export type ShippingRate = {
  __typename?: 'ShippingRate';
  /**
   * Shipping rate cost
   * @deprecated 
   */
  cost?: Maybe<Scalars['String']>;
  /**
   * Shipping rate ID
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Shipping instance ID
   * @deprecated 
   */
  instanceId?: Maybe<Scalars['Int']>;
  /**
   * Shipping rate label
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Shipping method ID
   * @deprecated 
   */
  methodId: Scalars['ID'];
};

/** Arguments for filtering the CartToCartItemConnection connection */
export type CartToCartItemConnectionWhereArgs = {
  /** Limit results to cart items that require shipping */
  needsShipping?: Maybe<Scalars['Boolean']>;
};

/** Connection between the Cart type and the CartItem type */
export type CartToCartItemConnection = {
  __typename?: 'CartToCartItemConnection';
  /**
   * Edges for the CartToCartItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CartToCartItemConnectionEdge>>>;
  /**
   * Total number of items in the cart.
   * @deprecated 
   */
  itemCount?: Maybe<Scalars['Int']>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CartItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Total number of different products in the cart
   * @deprecated 
   */
  productCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection */
export type CartToCartItemConnectionEdge = {
  __typename?: 'CartToCartItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CartItem>;
};

/** A item in the cart */
export type CartItem = {
  __typename?: 'CartItem';
  /**
   * Object meta data
   * @deprecated 
   */
  extraData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * CartItem ID
   * @deprecated 
   */
  key: Scalars['ID'];
  /**
   * A product in the cart
   * @deprecated 
   */
  product?: Maybe<Product>;
  /**
   * Quantity of the product
   * @deprecated 
   */
  quantity?: Maybe<Scalars['Int']>;
  /**
   * Item&#039;s subtotal
   * @deprecated 
   */
  subtotal?: Maybe<Scalars['String']>;
  /**
   * Item&#039;s subtotal tax
   * @deprecated 
   */
  subtotalTax?: Maybe<Scalars['String']>;
  /**
   * Item&#039;s tax
   * @deprecated 
   */
  tax?: Maybe<Scalars['String']>;
  /**
   * Item&#039;s total
   * @deprecated 
   */
  total?: Maybe<Scalars['String']>;
  /**
   * Selected variation of the product
   * @deprecated 
   */
  variation?: Maybe<ProductVariation>;
};


/** A item in the cart */
export type CartItemExtraDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** An additional fee */
export type CartFee = {
  __typename?: 'CartFee';
  /**
   * Fee amount
   * @deprecated 
   */
  amount?: Maybe<Scalars['Float']>;
  /**
   * Fee ID
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Fee name
   * @deprecated 
   */
  name: Scalars['String'];
  /**
   * Fee tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Is fee taxable?
   * @deprecated 
   */
  taxable?: Maybe<Scalars['Boolean']>;
  /**
   * Fee total
   * @deprecated 
   */
  total?: Maybe<Scalars['Float']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection';
  /**
   * Edges for the RootQueryToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection';
  /**
   * Edges for the RootQueryToContentNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentNode>;
};

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection';
  /**
   * Edges for the RootQueryToContentTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentType>;
};

/** The Type of Identifier used to fetch a single Coupon. Default is ID. */
export enum CouponIdTypeEnum {
  /** Coupon code. */
  Code = 'CODE',
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToCouponConnection connection */
export type RootQueryToCouponConnectionWhereArgs = {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Coupon type */
export type RootQueryToCouponConnection = {
  __typename?: 'RootQueryToCouponConnection';
  /**
   * Edges for the RootQueryToCouponConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCouponConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Coupon>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCouponConnectionEdge = {
  __typename?: 'RootQueryToCouponConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Coupon>;
};

/** Arguments for filtering the RootQueryToCustomerConnection connection */
export type RootQueryToCustomerConnectionWhereArgs = {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Customer type */
export type RootQueryToCustomerConnection = {
  __typename?: 'RootQueryToCustomerConnection';
  /**
   * Edges for the RootQueryToCustomerConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCustomerConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Customer>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCustomerConnectionEdge = {
  __typename?: 'RootQueryToCustomerConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Customer>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /**
   * Allow people to submit comments on new posts.
   * @deprecated 
   */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated 
   */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single Product. Default is ID. */
export enum ProductIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Unique store identifier for product. */
  Sku = 'SKU',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** A external product object */
export type ExternalProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & {
  __typename?: 'ExternalProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated 
   */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated 
   */
  averageRating?: Maybe<Scalars['Float']>;
  /**
   * External product Buy button text
   * @deprecated 
   */
  buttonText?: Maybe<Scalars['String']>;
  /**
   * Catalog visibility
   * @deprecated 
   */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * The ID of the product in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated 
   */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated 
   */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /**
   * Connection between the ExternalProduct type and the VariationAttribute type
   * @deprecated 
   */
  defaultAttributes?: Maybe<ExternalProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * External product url
   * @deprecated 
   */
  externalUrl?: Maybe<Scalars['String']>;
  /**
   * If the product is featured
   * @deprecated 
   */
  featured?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated 
   */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated 
   */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Main image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated 
   */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * Menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated 
   */
  onSale?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the paPeso type
   * @deprecated 
   */
  paPesos?: Maybe<ProductToPaPesoConnection>;
  /**
   * Parent product
   * @deprecated 
   */
  parent?: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated 
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** @deprecated  */
  productElements?: Maybe<Product_Productelements>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated 
   */
  productTags?: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated 
   */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated 
   */
  purchasable?: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated 
   */
  purchaseNote?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated 
   */
  regularPrice?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  related?: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated 
   */
  reviewCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated 
   */
  reviews?: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated 
   */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated 
   */
  salePrice?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO data of the Product
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /**
   * Product short description
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated 
   */
  sku?: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Product status
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Number total of sales
   * @deprecated 
   */
  totalSales?: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated 
   */
  type?: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  upsell?: Maybe<ProductToUpsellConnection>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


/** A external product object */
export type ExternalProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A external product object */
export type ExternalProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A external product object */
export type ExternalProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A external product object */
export type ExternalProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A external product object */
export type ExternalProductPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaPesoConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A external product object */
export type ExternalProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


/** A external product object */
export type ExternalProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

/** Connection between the ExternalProduct type and the VariationAttribute type */
export type ExternalProductToVariationAttributeConnection = {
  __typename?: 'ExternalProductToVariationAttributeConnection';
  /**
   * Edges for the ExternalProductToVariationAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ExternalProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ExternalProductToVariationAttributeConnectionEdge = {
  __typename?: 'ExternalProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VariationAttribute>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /**
   * A date format for all date strings.
   * @deprecated 
   */
  dateFormat?: Maybe<Scalars['String']>;
  /**
   * Site tagline.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * WordPress locale code.
   * @deprecated 
   */
  language?: Maybe<Scalars['String']>;
  /**
   * A day number of the week that the week should start on.
   * @deprecated 
   */
  startOfWeek?: Maybe<Scalars['Int']>;
  /**
   * A time format for all time strings.
   * @deprecated 
   */
  timeFormat?: Maybe<Scalars['String']>;
  /**
   * A city in the same timezone as you.
   * @deprecated 
   */
  timezone?: Maybe<Scalars['String']>;
  /**
   * Site title.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Site URL.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** A group product object */
export type GroupProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & {
  __typename?: 'GroupProduct';
  /**
   * Product&#039;s add to cart button text description
   * @deprecated 
   */
  addToCartDescription?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s add to cart button text description
   * @deprecated 
   */
  addToCartText?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated 
   */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated 
   */
  averageRating?: Maybe<Scalars['Float']>;
  /**
   * Catalog visibility
   * @deprecated 
   */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * The ID of the product in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated 
   */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated 
   */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /**
   * Connection between the GroupProduct type and the VariationAttribute type
   * @deprecated 
   */
  defaultAttributes?: Maybe<GroupProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated 
   */
  featured?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated 
   */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated 
   */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Main image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated 
   */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * Menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated 
   */
  onSale?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the paPeso type
   * @deprecated 
   */
  paPesos?: Maybe<ProductToPaPesoConnection>;
  /**
   * Parent product
   * @deprecated 
   */
  parent?: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * Products&#039; price range
   * @deprecated 
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** @deprecated  */
  productElements?: Maybe<Product_Productelements>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated 
   */
  productTags?: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated 
   */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /**
   * Connection between the GroupProduct type and the Product type
   * @deprecated 
   */
  products?: Maybe<GroupProductToProductConnection>;
  /**
   * Can product be purchased?
   * @deprecated 
   */
  purchasable?: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated 
   */
  purchaseNote?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  related?: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated 
   */
  reviewCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated 
   */
  reviews?: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated 
   */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * The Yoast SEO data of the Product
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /**
   * Product short description
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated 
   */
  sku?: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Product status
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Number total of sales
   * @deprecated 
   */
  totalSales?: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated 
   */
  type?: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  upsell?: Maybe<ProductToUpsellConnection>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


/** A group product object */
export type GroupProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A group product object */
export type GroupProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A group product object */
export type GroupProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A group product object */
export type GroupProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A group product object */
export type GroupProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A group product object */
export type GroupProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A group product object */
export type GroupProductPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaPesoConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GroupProductToProductConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A group product object */
export type GroupProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


/** A group product object */
export type GroupProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

/** Connection between the GroupProduct type and the VariationAttribute type */
export type GroupProductToVariationAttributeConnection = {
  __typename?: 'GroupProductToVariationAttributeConnection';
  /**
   * Edges for the GroupProductToVariationAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<GroupProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type GroupProductToVariationAttributeConnectionEdge = {
  __typename?: 'GroupProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VariationAttribute>;
};

/** Arguments for filtering the GroupProductToProductConnection connection */
export type GroupProductToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the GroupProduct type and the Product type */
export type GroupProductToProductConnection = {
  __typename?: 'GroupProductToProductConnection';
  /**
   * Edges for the GroupProductToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<GroupProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type GroupProductToProductConnectionEdge = {
  __typename?: 'GroupProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL'
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection';
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME'
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node & DatabaseIdentifier & {
  __typename?: 'Menu';
  /**
   * The number of items in the menu
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The globally unique identifier of the nav menu object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Menu type and the MenuItem type
   * @deprecated 
   */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  Handheld = 'HANDHELD',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node & DatabaseIdentifier & {
  __typename?: 'MenuItem';
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated 
   */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /**
   * Connection from MenuItem to it&#039;s connected node
   * @deprecated 
   */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /**
   * Class attribute for the menu item link
   * @deprecated 
   */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The unique identifier stored in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Description of the menu item.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the nav menu item object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Label or title of the menu item.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated 
   */
  linkRelationship?: Maybe<Scalars['String']>;
  /** @deprecated  */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * The Menu a MenuItem is part of
   * @deprecated 
   */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /**
   * Menu item order
   * @deprecated 
   */
  order?: Maybe<Scalars['Int']>;
  /**
   * The database id of the parent menu item or null if it is the root
   * @deprecated 
   */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * The globally unique identifier of the parent nav menu item object.
   * @deprecated 
   */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * Path for the resource. Relative path for internal resources. Absolute path for external resources.
   * @deprecated 
   */
  path: Scalars['String'];
  /**
   * Target attribute for the menu item link.
   * @deprecated 
   */
  target?: Maybe<Scalars['String']>;
  /**
   * Title attribute for the menu item link
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URL or destination of the menu item.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection';
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<MenuItemLinkable>;
};

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Post | Page | Category | Tag | ProductCategory | ProductTag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection';
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection';
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Menu>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single Order. Default is ID. */
export enum OrderIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Order number. */
  OrderNumber = 'ORDER_NUMBER'
}

/** Arguments for filtering the RootQueryToOrderConnection connection */
export type RootQueryToOrderConnectionWhereArgs = {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<Scalars['Int']>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
};

/** Connection between the RootQuery type and the Order type */
export type RootQueryToOrderConnection = {
  __typename?: 'RootQueryToOrderConnection';
  /**
   * Edges for the RootQueryToOrderConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToOrderConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Order>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToOrderConnectionEdge = {
  __typename?: 'RootQueryToOrderConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Order>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PaPesoIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPaPesoConnection connection */
export type RootQueryToPaPesoConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the paPeso type */
export type RootQueryToPaPesoConnection = {
  __typename?: 'RootQueryToPaPesoConnection';
  /**
   * Edges for the RootQueryToPaPesoConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPaPesoConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PaPeso>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPaPesoConnectionEdge = {
  __typename?: 'RootQueryToPaPesoConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PaPeso>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection';
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the RootQueryToPaymentGatewayConnection connection */
export type RootQueryToPaymentGatewayConnectionWhereArgs = {
  /** Include disabled payment gateways? */
  all?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the PaymentGateway type */
export type RootQueryToPaymentGatewayConnection = {
  __typename?: 'RootQueryToPaymentGatewayConnection';
  /**
   * Edges for the RootQueryToPaymentGatewayConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPaymentGatewayConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PaymentGateway>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPaymentGatewayConnectionEdge = {
  __typename?: 'RootQueryToPaymentGatewayConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PaymentGateway>;
};

/** A payment gateway object */
export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  /**
   * gateway&#039;s description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * gateway&#039;s icon
   * @deprecated 
   */
  icon?: Maybe<Scalars['String']>;
  /**
   * gateway&#039;s title
   * @deprecated 
   */
  id: Scalars['String'];
  /**
   * gateway&#039;s title
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /**
   * Name of the plugin author(s), may also be a company name.
   * @deprecated 
   */
  author?: Maybe<Scalars['String']>;
  /**
   * URI for the related author(s)/company website.
   * @deprecated 
   */
  authorUri?: Maybe<Scalars['String']>;
  /**
   * Description of the plugin.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the plugin object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the plugin.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Plugin path.
   * @deprecated 
   */
  path?: Maybe<Scalars['String']>;
  /**
   * URI for the plugin website. This is useful for directing users for support requests etc.
   * @deprecated 
   */
  pluginUri?: Maybe<Scalars['String']>;
  /**
   * Current version of the plugin.
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection';
  /**
   * Edges for the RootQueryToPluginConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Plugin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Plugin>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection';
  /**
   * Edges for the RootQueryToPostFormatConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<PostFormat>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the RootQueryToProductCategoryConnection connection */
export type RootQueryToProductCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the productCategory type */
export type RootQueryToProductCategoryConnection = {
  __typename?: 'RootQueryToProductCategoryConnection';
  /**
   * Edges for the RootQueryToProductCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToProductCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToProductCategoryConnectionEdge = {
  __typename?: 'RootQueryToProductCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductCategory>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToProductTagConnection connection */
export type RootQueryToProductTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the productTag type */
export type RootQueryToProductTagConnection = {
  __typename?: 'RootQueryToProductTagConnection';
  /**
   * Edges for the RootQueryToProductTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToProductTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToProductTagConnectionEdge = {
  __typename?: 'RootQueryToProductTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductTag>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTypeIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToProductTypeConnection connection */
export type RootQueryToProductTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the productType type */
export type RootQueryToProductTypeConnection = {
  __typename?: 'RootQueryToProductTypeConnection';
  /**
   * Edges for the RootQueryToProductTypeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToProductTypeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToProductTypeConnectionEdge = {
  __typename?: 'RootQueryToProductTypeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ProductType>;
};

/** The Type of Identifier used to fetch a single ProductVariation. Default is ID. */
export enum ProductVariationIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToProductConnection connection */
export type RootQueryToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the RootQuery type and the Product type */
export type RootQueryToProductConnection = {
  __typename?: 'RootQueryToProductConnection';
  /**
   * Edges for the RootQueryToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToProductConnectionEdge = {
  __typename?: 'RootQueryToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /**
   * Blog pages show at most.
   * @deprecated 
   */
  postsPerPage?: Maybe<Scalars['Int']>;
};

/** The Type of Identifier used to fetch a single Refund. Default is ID. */
export enum RefundIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToRefundConnection connection */
export type RootQueryToRefundConnectionWhereArgs = {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Connection between the RootQuery type and the Refund type */
export type RootQueryToRefundConnection = {
  __typename?: 'RootQueryToRefundConnection';
  /**
   * Edges for the RootQueryToRefundConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToRefundConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToRefundConnectionEdge = {
  __typename?: 'RootQueryToRefundConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Refund>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /**
   * Edges for the RootQueryToEnqueuedScriptConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /**
   * Edges for the RootQueryToEnqueuedStylesheetConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection';
  /**
   * Edges for the RootQueryToContentRevisionUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentRevisionUnion>;
};

/** The Yoast SEO site level configuration data */
export type SeoConfig = {
  __typename?: 'SEOConfig';
  /** @deprecated  */
  breadcrumbs?: Maybe<SeoBreadcrumbs>;
  /** @deprecated  */
  contentTypes?: Maybe<SeoContentTypes>;
  /** @deprecated  */
  openGraph?: Maybe<SeoOpenGraph>;
  /** @deprecated  */
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
  /** @deprecated  */
  schema?: Maybe<SeoSchema>;
  /** @deprecated  */
  social?: Maybe<SeoSocial>;
  /** @deprecated  */
  webmaster?: Maybe<SeoWebmaster>;
};

/** The Yoast SEO breadcrumb config */
export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  /** @deprecated  */
  archivePrefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  boldLast?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  homeText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  notFoundText?: Maybe<Scalars['String']>;
  /** @deprecated  */
  prefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  searchPrefix?: Maybe<Scalars['String']>;
  /** @deprecated  */
  separator?: Maybe<Scalars['String']>;
  /** @deprecated  */
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

/** The Yoast SEO search appearance content types */
export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  /** @deprecated  */
  mediaItem?: Maybe<SeoContentType>;
  /** @deprecated  */
  page?: Maybe<SeoContentType>;
  /** @deprecated  */
  post?: Maybe<SeoContentType>;
  /** @deprecated  */
  product?: Maybe<SeoContentType>;
};

/** he Yoast SEO search appearance content types fields */
export type SeoContentType = {
  __typename?: 'SEOContentType';
  /** @deprecated  */
  metaDesc?: Maybe<Scalars['String']>;
  /** @deprecated  */
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  schemaType?: Maybe<Scalars['String']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** The Open Graph data */
export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  /** @deprecated  */
  defaultImage?: Maybe<MediaItem>;
  /** @deprecated  */
  frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

/** The Open Graph Front page data */
export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  /** @deprecated  */
  description?: Maybe<Scalars['String']>;
  /** @deprecated  */
  image?: Maybe<MediaItem>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** The Yoast redirect data  (Yoast Premium only) */
export type SeoRedirect = {
  __typename?: 'SEORedirect';
  /** @deprecated  */
  format?: Maybe<Scalars['String']>;
  /** @deprecated  */
  origin?: Maybe<Scalars['String']>;
  /** @deprecated  */
  target?: Maybe<Scalars['String']>;
  /** @deprecated  */
  type?: Maybe<Scalars['Int']>;
};

/** The Yoast SEO schema data */
export type SeoSchema = {
  __typename?: 'SEOSchema';
  /** @deprecated  */
  companyLogo?: Maybe<MediaItem>;
  /** @deprecated  */
  companyName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  companyOrPerson?: Maybe<Scalars['String']>;
  /** @deprecated  */
  inLanguage?: Maybe<Scalars['String']>;
  /** @deprecated  */
  logo?: Maybe<MediaItem>;
  /** @deprecated  */
  personLogo?: Maybe<MediaItem>;
  /** @deprecated  */
  personName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  siteName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  siteUrl?: Maybe<Scalars['String']>;
  /** @deprecated  */
  wordpressSiteName?: Maybe<Scalars['String']>;
};

/** The Yoast SEO Social media links */
export type SeoSocial = {
  __typename?: 'SEOSocial';
  /** @deprecated  */
  facebook?: Maybe<SeoSocialFacebook>;
  /** @deprecated  */
  instagram?: Maybe<SeoSocialInstagram>;
  /** @deprecated  */
  linkedIn?: Maybe<SeoSocialLinkedIn>;
  /** @deprecated  */
  mySpace?: Maybe<SeoSocialMySpace>;
  /** @deprecated  */
  pinterest?: Maybe<SeoSocialPinterest>;
  /** @deprecated  */
  twitter?: Maybe<SeoSocialTwitter>;
  /** @deprecated  */
  wikipedia?: Maybe<SeoSocialWikipedia>;
  /** @deprecated  */
  youTube?: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  /** @deprecated  */
  defaultImage?: Maybe<MediaItem>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  /** @deprecated  */
  metaTag?: Maybe<Scalars['String']>;
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  /** @deprecated  */
  cardType?: Maybe<SeoCardType>;
  /** @deprecated  */
  username?: Maybe<Scalars['String']>;
};

/** Types of cards */
export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  /** @deprecated  */
  url?: Maybe<Scalars['String']>;
};

/** The Yoast SEO  webmaster fields */
export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  /** @deprecated  */
  baiduVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  googleVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  msVerify?: Maybe<Scalars['String']>;
  /** @deprecated  */
  yandexVerify?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ShippingClassIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToShippingClassConnection connection */
export type RootQueryToShippingClassConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the shippingClass type */
export type RootQueryToShippingClassConnection = {
  __typename?: 'RootQueryToShippingClassConnection';
  /**
   * Edges for the RootQueryToShippingClassConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToShippingClassConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToShippingClassConnectionEdge = {
  __typename?: 'RootQueryToShippingClassConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ShippingClass>;
};

/** The Type of Identifier used to fetch a single Shipping Method. Default is ID. */
export enum ShippingMethodIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Connection between the RootQuery type and the ShippingMethod type */
export type RootQueryToShippingMethodConnection = {
  __typename?: 'RootQueryToShippingMethodConnection';
  /**
   * Edges for the RootQueryToShippingMethodConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToShippingMethodConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ShippingMethod>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToShippingMethodConnectionEdge = {
  __typename?: 'RootQueryToShippingMethodConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ShippingMethod>;
};

/** A product object */
export type SimpleProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & {
  __typename?: 'SimpleProduct';
  /**
   * Connection between the Product type and the ProductAttribute type
   * @deprecated 
   */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /**
   * Product average count
   * @deprecated 
   */
  averageRating?: Maybe<Scalars['Float']>;
  /**
   * Product backorders status
   * @deprecated 
   */
  backorders?: Maybe<BackordersEnum>;
  /**
   * Can product be backordered?
   * @deprecated 
   */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Catalog visibility
   * @deprecated 
   */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the ContentType type
   * @deprecated 
   */
  contentType?: Maybe<ProductToContentTypeConnectionEdge>;
  /**
   * Connection between the SimpleProduct type and the Product type
   * @deprecated 
   */
  crossSell?: Maybe<SimpleProductToProductConnection>;
  /**
   * The ID of the product in the database
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * Date product created
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Date on sale from
   * @deprecated 
   */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /**
   * Date on sale to
   * @deprecated 
   */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /**
   * Connection between the SimpleProduct type and the VariationAttribute type
   * @deprecated 
   */
  defaultAttributes?: Maybe<SimpleProductToVariationAttributeConnection>;
  /**
   * Product description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Download expiry
   * @deprecated 
   */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /**
   * Download limit
   * @deprecated 
   */
  downloadLimit?: Maybe<Scalars['Int']>;
  /**
   * Is downloadable?
   * @deprecated 
   */
  downloadable?: Maybe<Scalars['Boolean']>;
  /**
   * Product downloads
   * @deprecated 
   */
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * Connection between the ContentNode type and the EnqueuedScript type
   * @deprecated 
   */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /**
   * Connection between the ContentNode type and the EnqueuedStylesheet type
   * @deprecated 
   */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * If the product is featured
   * @deprecated 
   */
  featured?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   * @deprecated 
   */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /**
   * The database identifier for the featured image node assigned to the content node
   * @deprecated 
   */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Globally unique ID of the featured image assigned to the node
   * @deprecated 
   */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * Connection between the Product type and the MediaItem type
   * @deprecated 
   */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /**
   * Connection between the Product type and the GlobalProductAttribute type
   * @deprecated 
   */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s height
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the product
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Main image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  isPreview?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the node
   * @deprecated 
   */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /**
   * Product&#039;s length
   * @deprecated 
   */
  length?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the LocalProductAttribute type
   * @deprecated 
   */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /**
   * If product manage stock
   * @deprecated 
   */
  manageStock?: Maybe<Scalars['Boolean']>;
  /**
   * Menu order
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * Object meta data
   * @deprecated 
   */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /**
   * Date product last updated
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Product name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Is product on sale?
   * @deprecated 
   */
  onSale?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the paPeso type
   * @deprecated 
   */
  paPesos?: Maybe<ProductToPaPesoConnection>;
  /**
   * Parent product
   * @deprecated 
   */
  parent?: Maybe<Product>;
  /**
   * The database id of the preview node
   * @deprecated 
   */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /**
   * Whether the object is a node in the preview state
   * @deprecated 
   */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * Product&#039;s active price
   * @deprecated 
   */
  price?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the productCategory type
   * @deprecated 
   */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** @deprecated  */
  productElements?: Maybe<Product_Productelements>;
  /**
   * Connection between the Product type and the productTag type
   * @deprecated 
   */
  productTags?: Maybe<ProductToProductTagConnection>;
  /**
   * Connection between the Product type and the productType type
   * @deprecated 
   */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /**
   * Can product be purchased?
   * @deprecated 
   */
  purchasable?: Maybe<Scalars['Boolean']>;
  /**
   * Purchase note
   * @deprecated 
   */
  purchaseNote?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s regular price
   * @deprecated 
   */
  regularPrice?: Maybe<Scalars['String']>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  related?: Maybe<ProductToProductConnection>;
  /**
   * Product review count
   * @deprecated 
   */
  reviewCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the Comment type
   * @deprecated 
   */
  reviews?: Maybe<ProductToCommentConnection>;
  /**
   * If reviews are allowed
   * @deprecated 
   */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /**
   * Product&#039;s sale price
   * @deprecated 
   */
  salePrice?: Maybe<Scalars['String']>;
  /**
   * The Yoast SEO data of the Product
   * @deprecated 
   */
  seo?: Maybe<PostTypeSeo>;
  /**
   * shipping class ID
   * @deprecated 
   */
  shippingClassId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the Product type and the shippingClass type
   * @deprecated 
   */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /**
   * Does product need to be shipped?
   * @deprecated 
   */
  shippingRequired?: Maybe<Scalars['Boolean']>;
  /**
   * Is product shipping taxable?
   * @deprecated 
   */
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  /**
   * Product short description
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * Product SKU
   * @deprecated 
   */
  sku?: Maybe<Scalars['String']>;
  /**
   * Product slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * If should be sold individually
   * @deprecated 
   */
  soldIndividually?: Maybe<Scalars['Boolean']>;
  /**
   * Product status
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Number of items available for sale
   * @deprecated 
   */
  stockQuantity?: Maybe<Scalars['Int']>;
  /**
   * Product stock status
   * @deprecated 
   */
  stockStatus?: Maybe<StockStatusEnum>;
  /**
   * Tax class
   * @deprecated 
   */
  taxClass?: Maybe<TaxClassEnum>;
  /**
   * Tax status
   * @deprecated 
   */
  taxStatus?: Maybe<TaxStatusEnum>;
  /**
   * The template assigned to a node of content
   * @deprecated 
   */
  template?: Maybe<ContentTemplate>;
  /**
   * Number total of sales
   * @deprecated 
   */
  totalSales?: Maybe<Scalars['Int']>;
  /**
   * Product type
   * @deprecated 
   */
  type?: Maybe<ProductTypesEnum>;
  /**
   * Connection between the Product type and the Product type
   * @deprecated 
   */
  upsell?: Maybe<ProductToUpsellConnection>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri: Scalars['String'];
  /**
   * Is product virtual?
   * @deprecated 
   */
  virtual?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the Product type and the visibleProduct type
   * @deprecated 
   */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  /**
   * Product&#039;s weight
   * @deprecated 
   */
  weight?: Maybe<Scalars['String']>;
  /**
   * Product&#039;s width
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};


/** A product object */
export type SimpleProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A product object */
export type SimpleProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SimpleProductToProductConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product object */
export type SimpleProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A product object */
export type SimpleProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product object */
export type SimpleProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** A product object */
export type SimpleProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


/** A product object */
export type SimpleProductPaPesosArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaPesoConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product object */
export type SimpleProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product object */
export type SimpleProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


/** A product object */
export type SimpleProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** A product object */
export type SimpleProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


/** A product object */
export type SimpleProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

/** Arguments for filtering the SimpleProductToProductConnection connection */
export type SimpleProductToProductConnectionWhereArgs = {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
};

/** Connection between the SimpleProduct type and the Product type */
export type SimpleProductToProductConnection = {
  __typename?: 'SimpleProductToProductConnection';
  /**
   * Edges for the SimpleProductToProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SimpleProductToProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SimpleProductToProductConnectionEdge = {
  __typename?: 'SimpleProductToProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Product>;
};

/** Connection between the SimpleProduct type and the VariationAttribute type */
export type SimpleProductToVariationAttributeConnection = {
  __typename?: 'SimpleProductToVariationAttributeConnection';
  /**
   * Edges for the SimpleProductToVariationAttributeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SimpleProductToVariationAttributeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type SimpleProductToVariationAttributeConnectionEdge = {
  __typename?: 'SimpleProductToVariationAttributeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VariationAttribute>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection';
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** The Type of Identifier used to fetch a single Tax rate. Default is ID. */
export enum TaxRateIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Arguments for filtering the RootQueryToTaxRateConnection connection */
export type RootQueryToTaxRateConnectionWhereArgs = {
  /** Sort by tax class. */
  class?: Maybe<TaxClassEnum>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<TaxRateConnectionOrderbyInput>>>;
  /** Filter results by a post code. */
  postCode?: Maybe<Scalars['String']>;
  /** Filter results by a group of post codes. */
  postCodeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Options for ordering the connection */
export type TaxRateConnectionOrderbyInput = {
  field: TaxRateConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER'
}

/** Connection between the RootQuery type and the TaxRate type */
export type RootQueryToTaxRateConnection = {
  __typename?: 'RootQueryToTaxRateConnection';
  /**
   * Edges for the RootQueryToTaxRateConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTaxRateConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TaxRate>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxRateConnectionEdge = {
  __typename?: 'RootQueryToTaxRateConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TaxRate>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection';
  /**
   * Edges for the RootQueryToTaxonomyConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Taxonomy>;
};

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection';
  /**
   * Edges for the RootQueryToTermNodeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<TermNode>;
};

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /**
   * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   * @deprecated 
   */
  author?: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
   * @deprecated 
   */
  authorUri?: Maybe<Scalars['String']>;
  /**
   * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier of the theme object.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
   * @deprecated 
   */
  screenshot?: Maybe<Scalars['String']>;
  /**
   * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
   * @deprecated 
   */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   * @deprecated 
   */
  themeUri?: Maybe<Scalars['String']>;
  /**
   * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
   * @deprecated 
   */
  version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection';
  /**
   * Edges for the RootQueryToThemeConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Theme>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Theme>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection';
  /**
   * Edges for the RootQueryToUserRoleConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<UserRole>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Names of available user roles */
export enum UsersConnectionSearchColumnEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection';
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<User>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<User>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum VisibleProductIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export type RootQueryToVisibleProductConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the visibleProduct type */
export type RootQueryToVisibleProductConnection = {
  __typename?: 'RootQueryToVisibleProductConnection';
  /**
   * Edges for the RootQueryToVisibleProductConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToVisibleProductConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToVisibleProductConnectionEdge = {
  __typename?: 'RootQueryToVisibleProductConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<VisibleProduct>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /**
   * Default post category.
   * @deprecated 
   */
  defaultCategory?: Maybe<Scalars['Int']>;
  /**
   * Default post format.
   * @deprecated 
   */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated 
   */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /**
   * The payload for the UpdateCategory mutation
   * @deprecated 
   */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /**
   * The payload for the UpdatePaPeso mutation
   * @deprecated 
   */
  updatePaPeso?: Maybe<UpdatePaPesoPayload>;
  /**
   * The payload for the UpdatePostFormat mutation
   * @deprecated 
   */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /**
   * The payload for the UpdateProductCategory mutation
   * @deprecated 
   */
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
  /**
   * The payload for the UpdateProductTag mutation
   * @deprecated 
   */
  updateProductTag?: Maybe<UpdateProductTagPayload>;
  /**
   * The payload for the UpdateProductType mutation
   * @deprecated 
   */
  updateProductType?: Maybe<UpdateProductTypePayload>;
  /**
   * The payload for the UpdateShippingClass mutation
   * @deprecated 
   */
  updateShippingClass?: Maybe<UpdateShippingClassPayload>;
  /**
   * The payload for the UpdateTag mutation
   * @deprecated 
   */
  updateTag?: Maybe<UpdateTagPayload>;
  /**
   * The payload for the UpdateVisibleProduct mutation
   * @deprecated 
   */
  updateVisibleProduct?: Maybe<UpdateVisibleProductPayload>;
  /**
   * The payload for the addFee mutation
   * @deprecated 
   */
  addFee?: Maybe<AddFeePayload>;
  /**
   * The payload for the addToCart mutation
   * @deprecated 
   */
  addToCart?: Maybe<AddToCartPayload>;
  /**
   * The payload for the applyCoupon mutation
   * @deprecated 
   */
  applyCoupon?: Maybe<ApplyCouponPayload>;
  /**
   * The payload for the checkout mutation
   * @deprecated 
   */
  checkout?: Maybe<CheckoutPayload>;
  /**
   * The payload for the createCategory mutation
   * @deprecated 
   */
  createCategory?: Maybe<CreateCategoryPayload>;
  /**
   * The payload for the createComment mutation
   * @deprecated 
   */
  createComment?: Maybe<CreateCommentPayload>;
  /**
   * The payload for the createMediaItem mutation
   * @deprecated 
   */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /**
   * The payload for the createOrder mutation
   * @deprecated 
   */
  createOrder?: Maybe<CreateOrderPayload>;
  /**
   * The payload for the createPaPeso mutation
   * @deprecated 
   */
  createPaPeso?: Maybe<CreatePaPesoPayload>;
  /**
   * The payload for the createPage mutation
   * @deprecated 
   */
  createPage?: Maybe<CreatePagePayload>;
  /**
   * The payload for the createPost mutation
   * @deprecated 
   */
  createPost?: Maybe<CreatePostPayload>;
  /**
   * The payload for the createPostFormat mutation
   * @deprecated 
   */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /**
   * The payload for the createProductCategory mutation
   * @deprecated 
   */
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  /**
   * The payload for the createProductTag mutation
   * @deprecated 
   */
  createProductTag?: Maybe<CreateProductTagPayload>;
  /**
   * The payload for the createProductType mutation
   * @deprecated 
   */
  createProductType?: Maybe<CreateProductTypePayload>;
  /**
   * The payload for the createShippingClass mutation
   * @deprecated 
   */
  createShippingClass?: Maybe<CreateShippingClassPayload>;
  /**
   * The payload for the createTag mutation
   * @deprecated 
   */
  createTag?: Maybe<CreateTagPayload>;
  /**
   * The payload for the createUser mutation
   * @deprecated 
   */
  createUser?: Maybe<CreateUserPayload>;
  /**
   * The payload for the createVisibleProduct mutation
   * @deprecated 
   */
  createVisibleProduct?: Maybe<CreateVisibleProductPayload>;
  /**
   * The payload for the deleteCategory mutation
   * @deprecated 
   */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /**
   * The payload for the deleteComment mutation
   * @deprecated 
   */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /**
   * The payload for the deleteMediaItem mutation
   * @deprecated 
   */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /**
   * The payload for the deleteOrder mutation
   * @deprecated 
   */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /**
   * The payload for the deleteOrderItems mutation
   * @deprecated 
   */
  deleteOrderItems?: Maybe<DeleteOrderItemsPayload>;
  /**
   * The payload for the deletePaPeso mutation
   * @deprecated 
   */
  deletePaPeso?: Maybe<DeletePaPesoPayload>;
  /**
   * The payload for the deletePage mutation
   * @deprecated 
   */
  deletePage?: Maybe<DeletePagePayload>;
  /**
   * The payload for the deletePost mutation
   * @deprecated 
   */
  deletePost?: Maybe<DeletePostPayload>;
  /**
   * The payload for the deletePostFormat mutation
   * @deprecated 
   */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /**
   * The payload for the deleteProductCategory mutation
   * @deprecated 
   */
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
  /**
   * The payload for the deleteProductTag mutation
   * @deprecated 
   */
  deleteProductTag?: Maybe<DeleteProductTagPayload>;
  /**
   * The payload for the deleteProductType mutation
   * @deprecated 
   */
  deleteProductType?: Maybe<DeleteProductTypePayload>;
  /**
   * The payload for the deleteReview mutation
   * @deprecated 
   */
  deleteReview?: Maybe<DeleteReviewPayload>;
  /**
   * The payload for the deleteShippingClass mutation
   * @deprecated 
   */
  deleteShippingClass?: Maybe<DeleteShippingClassPayload>;
  /**
   * The payload for the deleteTag mutation
   * @deprecated 
   */
  deleteTag?: Maybe<DeleteTagPayload>;
  /**
   * The payload for the deleteUser mutation
   * @deprecated 
   */
  deleteUser?: Maybe<DeleteUserPayload>;
  /**
   * The payload for the deleteVisibleProduct mutation
   * @deprecated 
   */
  deleteVisibleProduct?: Maybe<DeleteVisibleProductPayload>;
  /**
   * The payload for the emptyCart mutation
   * @deprecated 
   */
  emptyCart?: Maybe<EmptyCartPayload>;
  /** @deprecated  */
  increaseCount?: Maybe<Scalars['Int']>;
  /**
   * The payload for the registerCustomer mutation
   * @deprecated 
   */
  registerCustomer?: Maybe<RegisterCustomerPayload>;
  /**
   * The payload for the registerUser mutation
   * @deprecated 
   */
  registerUser?: Maybe<RegisterUserPayload>;
  /**
   * The payload for the removeCoupons mutation
   * @deprecated 
   */
  removeCoupons?: Maybe<RemoveCouponsPayload>;
  /**
   * The payload for the removeItemsFromCart mutation
   * @deprecated 
   */
  removeItemsFromCart?: Maybe<RemoveItemsFromCartPayload>;
  /**
   * The payload for the resetUserPassword mutation
   * @deprecated 
   */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /**
   * The payload for the restoreCartItems mutation
   * @deprecated 
   */
  restoreCartItems?: Maybe<RestoreCartItemsPayload>;
  /**
   * The payload for the restoreComment mutation
   * @deprecated 
   */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /**
   * The payload for the restoreReview mutation
   * @deprecated 
   */
  restoreReview?: Maybe<RestoreReviewPayload>;
  /**
   * The payload for the sendPasswordResetEmail mutation
   * @deprecated 
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /**
   * The payload for the updateComment mutation
   * @deprecated 
   */
  updateComment?: Maybe<UpdateCommentPayload>;
  /**
   * The payload for the updateCustomer mutation
   * @deprecated 
   */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /**
   * The payload for the updateItemQuantities mutation
   * @deprecated 
   */
  updateItemQuantities?: Maybe<UpdateItemQuantitiesPayload>;
  /**
   * The payload for the updateMediaItem mutation
   * @deprecated 
   */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /**
   * The payload for the updateOrder mutation
   * @deprecated 
   */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /**
   * The payload for the updatePage mutation
   * @deprecated 
   */
  updatePage?: Maybe<UpdatePagePayload>;
  /**
   * The payload for the updatePost mutation
   * @deprecated 
   */
  updatePost?: Maybe<UpdatePostPayload>;
  /**
   * The payload for the updateReview mutation
   * @deprecated 
   */
  updateReview?: Maybe<UpdateReviewPayload>;
  /**
   * The payload for the updateSettings mutation
   * @deprecated 
   */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /**
   * The payload for the updateShippingMethod mutation
   * @deprecated 
   */
  updateShippingMethod?: Maybe<UpdateShippingMethodPayload>;
  /**
   * The payload for the updateUser mutation
   * @deprecated 
   */
  updateUser?: Maybe<UpdateUserPayload>;
  /**
   * The payload for the writeReview mutation
   * @deprecated 
   */
  writeReview?: Maybe<WriteReviewPayload>;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdatePaPesoArgs = {
  input: UpdatePaPesoInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateProductCategoryArgs = {
  input: UpdateProductCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateProductTagArgs = {
  input: UpdateProductTagInput;
};


/** The root mutation */
export type RootMutationUpdateProductTypeArgs = {
  input: UpdateProductTypeInput;
};


/** The root mutation */
export type RootMutationUpdateShippingClassArgs = {
  input: UpdateShippingClassInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateVisibleProductArgs = {
  input: UpdateVisibleProductInput;
};


/** The root mutation */
export type RootMutationAddFeeArgs = {
  input: AddFeeInput;
};


/** The root mutation */
export type RootMutationAddToCartArgs = {
  input: AddToCartInput;
};


/** The root mutation */
export type RootMutationApplyCouponArgs = {
  input: ApplyCouponInput;
};


/** The root mutation */
export type RootMutationCheckoutArgs = {
  input: CheckoutInput;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreateOrderArgs = {
  input: CreateOrderInput;
};


/** The root mutation */
export type RootMutationCreatePaPesoArgs = {
  input: CreatePaPesoInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateProductCategoryArgs = {
  input: CreateProductCategoryInput;
};


/** The root mutation */
export type RootMutationCreateProductTagArgs = {
  input: CreateProductTagInput;
};


/** The root mutation */
export type RootMutationCreateProductTypeArgs = {
  input: CreateProductTypeInput;
};


/** The root mutation */
export type RootMutationCreateShippingClassArgs = {
  input: CreateShippingClassInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationCreateVisibleProductArgs = {
  input: CreateVisibleProductInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


/** The root mutation */
export type RootMutationDeleteOrderItemsArgs = {
  input: DeleteOrderItemsInput;
};


/** The root mutation */
export type RootMutationDeletePaPesoArgs = {
  input: DeletePaPesoInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteProductCategoryArgs = {
  input: DeleteProductCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteProductTagArgs = {
  input: DeleteProductTagInput;
};


/** The root mutation */
export type RootMutationDeleteProductTypeArgs = {
  input: DeleteProductTypeInput;
};


/** The root mutation */
export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


/** The root mutation */
export type RootMutationDeleteShippingClassArgs = {
  input: DeleteShippingClassInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationDeleteVisibleProductArgs = {
  input: DeleteVisibleProductInput;
};


/** The root mutation */
export type RootMutationEmptyCartArgs = {
  input: EmptyCartInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: Maybe<Scalars['Int']>;
};


/** The root mutation */
export type RootMutationRegisterCustomerArgs = {
  input: RegisterCustomerInput;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationRemoveCouponsArgs = {
  input: RemoveCouponsInput;
};


/** The root mutation */
export type RootMutationRemoveItemsFromCartArgs = {
  input: RemoveItemsFromCartInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCartItemsArgs = {
  input: RestoreCartItemsInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationRestoreReviewArgs = {
  input: RestoreReviewInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


/** The root mutation */
export type RootMutationUpdateItemQuantitiesArgs = {
  input: UpdateItemQuantitiesInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation */
export type RootMutationWriteReviewArgs = {
  input: WriteReviewInput;
};

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /**
   * The created category
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the UpdatePaPeso mutation */
export type UpdatePaPesoInput = {
  /** The slug that the pa_peso will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the pa_peso object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the paPeso object to update */
  id: Scalars['ID'];
  /** The name of the pa_peso object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePaPeso mutation */
export type UpdatePaPesoPayload = {
  __typename?: 'UpdatePaPesoPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created pa_peso
   * @deprecated 
   */
  paPeso?: Maybe<PaPeso>;
};

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_format
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the UpdateProductCategory mutation */
export type UpdateProductCategoryInput = {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productCategory object to update */
  id: Scalars['ID'];
  /** The name of the product_cat object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductCategory mutation */
export type UpdateProductCategoryPayload = {
  __typename?: 'UpdateProductCategoryPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_cat
   * @deprecated 
   */
  productCategory?: Maybe<ProductCategory>;
};

/** Input for the UpdateProductTag mutation */
export type UpdateProductTagInput = {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productTag object to update */
  id: Scalars['ID'];
  /** The name of the product_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductTag mutation */
export type UpdateProductTagPayload = {
  __typename?: 'UpdateProductTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_tag
   * @deprecated 
   */
  productTag?: Maybe<ProductTag>;
};

/** Input for the UpdateProductType mutation */
export type UpdateProductTypeInput = {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productType object to update */
  id: Scalars['ID'];
  /** The name of the product_type object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateProductType mutation */
export type UpdateProductTypePayload = {
  __typename?: 'UpdateProductTypePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_type
   * @deprecated 
   */
  productType?: Maybe<ProductType>;
};

/** Input for the UpdateShippingClass mutation */
export type UpdateShippingClassInput = {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the shippingClass object to update */
  id: Scalars['ID'];
  /** The name of the product_shipping_class object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateShippingClass mutation */
export type UpdateShippingClassPayload = {
  __typename?: 'UpdateShippingClassPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_shipping_class
   * @deprecated 
   */
  shippingClass?: Maybe<ShippingClass>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_tag
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the UpdateVisibleProduct mutation */
export type UpdateVisibleProductInput = {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct object to update */
  id: Scalars['ID'];
  /** The name of the product_visibility object to mutate */
  name?: Maybe<Scalars['String']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateVisibleProduct mutation */
export type UpdateVisibleProductPayload = {
  __typename?: 'UpdateVisibleProductPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_visibility
   * @deprecated 
   */
  visibleProduct?: Maybe<VisibleProduct>;
};

/** Input for the addFee mutation */
export type AddFeeInput = {
  /** Fee amount */
  amount?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** Unique name for the fee. */
  name: Scalars['String'];
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Is the fee taxable? */
  taxable?: Maybe<Scalars['Boolean']>;
};

/** The payload for the addFee mutation */
export type AddFeePayload = {
  __typename?: 'AddFeePayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  cartFee?: Maybe<CartFee>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the addToCart mutation */
export type AddToCartInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']>;
};

/** Options for ordering the connection */
export type ProductAttributeInput = {
  attributeName: Scalars['String'];
  attributeValue?: Maybe<Scalars['String']>;
};

/** The payload for the addToCart mutation */
export type AddToCartPayload = {
  __typename?: 'AddToCartPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  cartItem?: Maybe<CartItem>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the applyCoupon mutation */
export type ApplyCouponInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Code of coupon being applied */
  code: Scalars['String'];
};

/** The payload for the applyCoupon mutation */
export type ApplyCouponPayload = {
  __typename?: 'ApplyCouponPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the checkout mutation */
export type CheckoutInput = {
  /** Create new customer account */
  account?: Maybe<CreateAccountInput>;
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** Order customer note */
  customerNote?: Maybe<Scalars['String']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Ship to a separate address */
  shipToDifferentAddress?: Maybe<Scalars['Boolean']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping method */
  shippingMethod?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
};

/** Customer account credentials */
export type CreateAccountInput = {
  /** Customer password */
  password: Scalars['String'];
  /** Customer username */
  username: Scalars['String'];
};

/** Customer address information */
export type CustomerAddressInput = {
  /** Address 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address 2 */
  address2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<CountriesEnum>;
  /** E-mail */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Clear old address data */
  overwrite?: Maybe<Scalars['Boolean']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
};

/** Meta data. */
export type MetaDataInput = {
  /** Meta key. */
  key: Scalars['String'];
  /** Meta value. */
  value: Scalars['String'];
};

/** The payload for the checkout mutation */
export type CheckoutPayload = {
  __typename?: 'CheckoutPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customer?: Maybe<Customer>;
  /** @deprecated  */
  order?: Maybe<Order>;
  /** @deprecated  */
  redirect?: Maybe<Scalars['String']>;
  /** @deprecated  */
  result?: Maybe<Scalars['String']>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /**
   * The created category
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The comment that was created
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated 
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the createOrder mutation */
export type CreateOrderInput = {
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** Coupons codes to be applied to order */
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  currency?: Maybe<Scalars['String']>;
  /** Order customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  customerNote?: Maybe<Scalars['String']>;
  /** Order shipping lines */
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order line items */
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Parent order ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title. */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
};

/** Fee line data. */
export type FeeLineInput = {
  /** Fee amount. */
  amount?: Maybe<Scalars['String']>;
  /** Fee Line ID */
  id?: Maybe<Scalars['ID']>;
  /** Fee name. */
  name?: Maybe<Scalars['String']>;
  /** Tax class of fee. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status of fee. */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line total (after discounts). */
  total?: Maybe<Scalars['String']>;
};

/** Meta data. */
export type LineItemInput = {
  /** Line Item ID */
  id?: Maybe<Scalars['ID']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Line name */
  name?: Maybe<Scalars['String']>;
  /** Product ID. */
  productId?: Maybe<Scalars['Int']>;
  /** Quantity ordered. */
  quantity?: Maybe<Scalars['Int']>;
  /** Product SKU. */
  sku?: Maybe<Scalars['String']>;
  /** Line subtotal (before discounts). */
  subtotal?: Maybe<Scalars['String']>;
  /** Tax class of product. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line total (after discounts). */
  total?: Maybe<Scalars['String']>;
  /** Variation ID, if applicable. */
  variationId?: Maybe<Scalars['Int']>;
};

/** Shipping lines data. */
export type ShippingLineInput = {
  /** Shipping Line ID */
  id?: Maybe<Scalars['ID']>;
  /** Shipping instance ID. */
  instanceId?: Maybe<Scalars['String']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Shipping method ID. */
  methodId: Scalars['String'];
  /** Shipping method name. */
  methodTitle: Scalars['String'];
  /** Line total (after discounts). */
  total: Scalars['String'];
};

/** The payload for the createOrder mutation */
export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  order?: Maybe<Order>;
  /** @deprecated  */
  orderId?: Maybe<Scalars['Int']>;
};

/** Input for the createPaPeso mutation */
export type CreatePaPesoInput = {
  /** The slug that the pa_peso will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the pa_peso object */
  description?: Maybe<Scalars['String']>;
  /** The name of the pa_peso object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPaPeso mutation */
export type CreatePaPesoPayload = {
  __typename?: 'CreatePaPesoPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created pa_peso
   * @deprecated 
   */
  paPeso?: Maybe<PaPeso>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  page?: Maybe<Page>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  post?: Maybe<Post>;
};

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_format
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the createProductCategory mutation */
export type CreateProductCategoryInput = {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_cat object to mutate */
  name: Scalars['String'];
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductCategory mutation */
export type CreateProductCategoryPayload = {
  __typename?: 'CreateProductCategoryPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_cat
   * @deprecated 
   */
  productCategory?: Maybe<ProductCategory>;
};

/** Input for the createProductTag mutation */
export type CreateProductTagInput = {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductTag mutation */
export type CreateProductTagPayload = {
  __typename?: 'CreateProductTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_tag
   * @deprecated 
   */
  productTag?: Maybe<ProductTag>;
};

/** Input for the createProductType mutation */
export type CreateProductTypeInput = {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_type object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createProductType mutation */
export type CreateProductTypePayload = {
  __typename?: 'CreateProductTypePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_type
   * @deprecated 
   */
  productType?: Maybe<ProductType>;
};

/** Input for the createShippingClass mutation */
export type CreateShippingClassInput = {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_shipping_class object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createShippingClass mutation */
export type CreateShippingClassPayload = {
  __typename?: 'CreateShippingClassPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_shipping_class
   * @deprecated 
   */
  shippingClass?: Maybe<ShippingClass>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created post_tag
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the createVisibleProduct mutation */
export type CreateVisibleProductInput = {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_visibility object to mutate */
  name: Scalars['String'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>;
};

/** The payload for the createVisibleProduct mutation */
export type CreateVisibleProductPayload = {
  __typename?: 'CreateVisibleProductPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The created product_visibility
   * @deprecated 
   */
  visibleProduct?: Maybe<VisibleProduct>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /**
   * The deteted term object
   * @deprecated 
   */
  category?: Maybe<Category>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The deleted comment object
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * The deleted comment ID
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted mediaItem
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The mediaItem before it was deleted
   * @deprecated 
   */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the deleteOrder mutation */
export type DeleteOrderInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Delete or simply place in trash. */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
};

/** The payload for the deleteOrder mutation */
export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  order?: Maybe<Order>;
};

/** Input for the deleteOrderItems mutation */
export type DeleteOrderItemsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** ID Order items being deleted */
  itemIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
};

/** The payload for the deleteOrderItems mutation */
export type DeleteOrderItemsPayload = {
  __typename?: 'DeleteOrderItemsPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  order?: Maybe<Order>;
};

/** Input for the deletePaPeso mutation */
export type DeletePaPesoInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the paPeso to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePaPeso mutation */
export type DeletePaPesoPayload = {
  __typename?: 'DeletePaPesoPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  paPeso?: Maybe<PaPeso>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated 
   */
  page?: Maybe<Page>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The object before it was deleted
   * @deprecated 
   */
  post?: Maybe<Post>;
};

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  postFormat?: Maybe<PostFormat>;
};

/** Input for the deleteProductCategory mutation */
export type DeleteProductCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productCategory to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductCategory mutation */
export type DeleteProductCategoryPayload = {
  __typename?: 'DeleteProductCategoryPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  productCategory?: Maybe<ProductCategory>;
};

/** Input for the deleteProductTag mutation */
export type DeleteProductTagInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productTag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductTag mutation */
export type DeleteProductTagPayload = {
  __typename?: 'DeleteProductTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  productTag?: Maybe<ProductTag>;
};

/** Input for the deleteProductType mutation */
export type DeleteProductTypeInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productType to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteProductType mutation */
export type DeleteProductTypePayload = {
  __typename?: 'DeleteProductTypePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  productType?: Maybe<ProductType>;
};

/** Input for the deleteReview mutation */
export type DeleteReviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the product review should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the target product review */
  id: Scalars['ID'];
};

/** The payload for the deleteReview mutation */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  /**
   * The affected product review ID
   * @deprecated 
   */
  affectedId?: Maybe<Scalars['ID']>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The product rating of the affected product review
   * @deprecated 
   */
  rating?: Maybe<Scalars['Float']>;
  /**
   * The affected product review
   * @deprecated 
   */
  review?: Maybe<Comment>;
};

/** Input for the deleteShippingClass mutation */
export type DeleteShippingClassInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the shippingClass to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteShippingClass mutation */
export type DeleteShippingClassPayload = {
  __typename?: 'DeleteShippingClassPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  shippingClass?: Maybe<ShippingClass>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the user that you just deleted
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deleted user object
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** Input for the deleteVisibleProduct mutation */
export type DeleteVisibleProductInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct to delete */
  id: Scalars['ID'];
};

/** The payload for the deleteVisibleProduct mutation */
export type DeleteVisibleProductPayload = {
  __typename?: 'DeleteVisibleProductPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The ID of the deleted object
   * @deprecated 
   */
  deletedId?: Maybe<Scalars['ID']>;
  /**
   * The deteted term object
   * @deprecated 
   */
  visibleProduct?: Maybe<VisibleProduct>;
};

/** Input for the emptyCart mutation */
export type EmptyCartInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

/** The payload for the emptyCart mutation */
export type EmptyCartPayload = {
  __typename?: 'EmptyCartPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  deletedCart?: Maybe<Cart>;
};

/** Input for the registerCustomer mutation */
export type RegisterCustomerInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** Customer shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerCustomer mutation */
export type RegisterCustomerPayload = {
  __typename?: 'RegisterCustomerPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customer?: Maybe<Customer>;
  /** @deprecated  */
  viewer?: Maybe<User>;
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the removeCoupons mutation */
export type RemoveCouponsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Code of coupon being applied */
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the removeCoupons mutation */
export type RemoveCouponsPayload = {
  __typename?: 'RemoveCouponsPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the removeItemsFromCart mutation */
export type RemoveItemsFromCartInput = {
  /** Remove all cart items */
  all?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** Item keys of the items being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** The payload for the removeItemsFromCart mutation */
export type RemoveItemsFromCartPayload = {
  __typename?: 'RemoveItemsFromCartPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Password reset key */
  key?: Maybe<Scalars['String']>;
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>;
  /** The new password. */
  password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the restoreCartItems mutation */
export type RestoreCartItemsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cart item key of the item being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** The payload for the restoreCartItems mutation */
export type RestoreCartItemsPayload = {
  __typename?: 'RestoreCartItemsPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The restored comment object
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * The ID of the restored comment
   * @deprecated 
   */
  restoredId?: Maybe<Scalars['ID']>;
};

/** Input for the restoreReview mutation */
export type RestoreReviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the target product review */
  id: Scalars['ID'];
};

/** The payload for the restoreReview mutation */
export type RestoreReviewPayload = {
  __typename?: 'RestoreReviewPayload';
  /**
   * The affected product review ID
   * @deprecated 
   */
  affectedId?: Maybe<Scalars['ID']>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The product rating of the affected product review
   * @deprecated 
   */
  rating?: Maybe<Scalars['Float']>;
  /**
   * The affected product review
   * @deprecated 
   */
  review?: Maybe<Comment>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The comment that was created
   * @deprecated 
   */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated 
   */
  success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateCustomer mutation */
export type UpdateCustomerInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id?: Maybe<Scalars['ID']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Customer shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateCustomer mutation */
export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  customer?: Maybe<Customer>;
};

/** Input for the updateItemQuantities mutation */
export type UpdateItemQuantitiesInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cart item being updated */
  items?: Maybe<Array<Maybe<CartItemQuantityInput>>>;
};

/** Cart item quantity */
export type CartItemQuantityInput = {
  /** Cart item being updated */
  key: Scalars['ID'];
  /** Cart item's new quantity */
  quantity: Scalars['Int'];
};

/** The payload for the updateItemQuantities mutation */
export type UpdateItemQuantitiesPayload = {
  __typename?: 'UpdateItemQuantitiesPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  items?: Maybe<Array<Maybe<CartItem>>>;
  /** @deprecated  */
  removed?: Maybe<Array<Maybe<CartItem>>>;
  /** @deprecated  */
  updated?: Maybe<Array<Maybe<CartItem>>>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>;
};

/** Input for the updateOrder mutation */
export type UpdateOrderInput = {
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** Coupons codes to be applied to order */
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  currency?: Maybe<Scalars['String']>;
  /** Order customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  customerNote?: Maybe<Scalars['String']>;
  /** Order shipping lines */
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order line items */
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
  /** Parent order ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title. */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
};

/** The payload for the updateOrder mutation */
export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  order?: Maybe<Order>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  page?: Maybe<Page>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  post?: Maybe<Post>;
};

/** Input for the updateReview mutation */
export type UpdateReviewInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** The ID of the review being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Product rating */
  rating: Scalars['Int'];
};

/** The payload for the updateReview mutation */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The product rating of the review that was created
   * @deprecated 
   */
  rating?: Maybe<Scalars['Float']>;
  /**
   * The product review that was created
   * @deprecated 
   */
  review?: Maybe<Comment>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Site tagline. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** WordPress locale code. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Site title. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Site URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Default post category. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** @deprecated  */
  allSettings?: Maybe<Settings>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>;
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>;
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateShippingMethod mutation */
export type UpdateShippingMethodInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updateShippingMethod mutation */
export type UpdateShippingMethodPayload = {
  __typename?: 'UpdateShippingMethodPayload';
  /** @deprecated  */
  cart?: Maybe<Cart>;
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  user?: Maybe<User>;
};

/** Input for the writeReview mutation */
export type WriteReviewInput = {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Product rating */
  rating: Scalars['Int'];
};

/** The payload for the writeReview mutation */
export type WriteReviewPayload = {
  __typename?: 'WriteReviewPayload';
  /** @deprecated  */
  clientMutationId?: Maybe<Scalars['String']>;
  /**
   * The product rating of the review that was created
   * @deprecated 
   */
  rating?: Maybe<Scalars['Float']>;
  /**
   * The product review that was created
   * @deprecated 
   */
  review?: Maybe<Comment>;
};

/** A Comment Author object */
export type CommentAuthor = Node & Commenter & {
  __typename?: 'CommentAuthor';
  /**
   * Identifies the primary key from the database.
   * @deprecated 
   */
  databaseId: Scalars['Int'];
  /**
   * The email for the comment author
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the comment author object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated 
   */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * The name for the comment author.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url the comment author.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** Available timezones */
export enum TimezoneEnum {
  /** Abidjan */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Accra */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Addis Ababa */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Algiers */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Asmara */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Bamako */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Bangui */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Banjul */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Bissau */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Blantyre */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Brazzaville */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Bujumbura */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Cairo */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Casablanca */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Ceuta */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Conakry */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Dakar */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Dar es Salaam */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Djibouti */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Douala */
  AfricaDouala = 'AFRICA_DOUALA',
  /** El Aaiun */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Freetown */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Gaborone */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Harare */
  AfricaHarare = 'AFRICA_HARARE',
  /** Johannesburg */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Juba */
  AfricaJuba = 'AFRICA_JUBA',
  /** Kampala */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Khartoum */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Kigali */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Kinshasa */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Lagos */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Libreville */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Lome */
  AfricaLome = 'AFRICA_LOME',
  /** Luanda */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Lubumbashi */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Lusaka */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Malabo */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Maputo */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Maseru */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Mbabane */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Mogadishu */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Monrovia */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Nairobi */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** Ndjamena */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Niamey */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Nouakchott */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Ouagadougou */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Porto-Novo */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** Sao Tome */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Tripoli */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Tunis */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Windhoek */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** Adak */
  AmericaAdak = 'AMERICA_ADAK',
  /** Anchorage */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** Anguilla */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** Antigua */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** Araguaina */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** Argentina - Buenos Aires */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** Argentina - Catamarca */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** Argentina - Cordoba */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** Argentina - Jujuy */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** Argentina - La Rioja */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** Argentina - Mendoza */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** Argentina - Rio Gallegos */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** Argentina - Salta */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** Argentina - San Juan */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** Argentina - San Luis */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** Argentina - Tucuman */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** Argentina - Ushuaia */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** Aruba */
  AmericaAruba = 'AMERICA_ARUBA',
  /** Asuncion */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** Atikokan */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** Bahia */
  AmericaBahia = 'AMERICA_BAHIA',
  /** Bahia Banderas */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** Barbados */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** Belem */
  AmericaBelem = 'AMERICA_BELEM',
  /** Belize */
  AmericaBelize = 'AMERICA_BELIZE',
  /** Blanc-Sablon */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** Boa Vista */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** Bogota */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** Boise */
  AmericaBoise = 'AMERICA_BOISE',
  /** Cambridge Bay */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** Campo Grande */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** Cancun */
  AmericaCancun = 'AMERICA_CANCUN',
  /** Caracas */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** Cayenne */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** Cayman */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** Chicago */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** Chihuahua */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** Costa Rica */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** Creston */
  AmericaCreston = 'AMERICA_CRESTON',
  /** Cuiaba */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** Curacao */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** Danmarkshavn */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** Dawson */
  AmericaDawson = 'AMERICA_DAWSON',
  /** Dawson Creek */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** Denver */
  AmericaDenver = 'AMERICA_DENVER',
  /** Detroit */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** Dominica */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** Edmonton */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** Eirunepe */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** El Salvador */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** Fortaleza */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** Fort Nelson */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** Glace Bay */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** Goose Bay */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** Grand Turk */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** Grenada */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** Guadeloupe */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** Guatemala */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** Guayaquil */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** Guyana */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** Halifax */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** Havana */
  AmericaHavana = 'AMERICA_HAVANA',
  /** Hermosillo */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** Indiana - Indianapolis */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** Indiana - Knox */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** Indiana - Marengo */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** Indiana - Petersburg */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** Indiana - Tell City */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** Indiana - Vevay */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** Indiana - Vincennes */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** Indiana - Winamac */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** Inuvik */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** Iqaluit */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** Jamaica */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** Juneau */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** Kentucky - Louisville */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** Kentucky - Monticello */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** Kralendijk */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** La Paz */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** Lima */
  AmericaLima = 'AMERICA_LIMA',
  /** Los Angeles */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** Lower Princes */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** Maceio */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** Managua */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** Manaus */
  AmericaManaus = 'AMERICA_MANAUS',
  /** Marigot */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** Martinique */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** Matamoros */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** Mazatlan */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** Menominee */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** Merida */
  AmericaMerida = 'AMERICA_MERIDA',
  /** Metlakatla */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** Mexico City */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** Miquelon */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** Moncton */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** Monterrey */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** Montevideo */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** Montserrat */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** Nassau */
  AmericaNassau = 'AMERICA_NASSAU',
  /** New York */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** Nipigon */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** Nome */
  AmericaNome = 'AMERICA_NOME',
  /** Noronha */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** North Dakota - Beulah */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** North Dakota - Center */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** North Dakota - New Salem */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** Nuuk */
  AmericaNuuk = 'AMERICA_NUUK',
  /** Ojinaga */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** Panama */
  AmericaPanama = 'AMERICA_PANAMA',
  /** Pangnirtung */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** Paramaribo */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** Phoenix */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** Porto Velho */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** Port-au-Prince */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** Port of Spain */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** Puerto Rico */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** Punta Arenas */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** Rainy River */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** Rankin Inlet */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** Recife */
  AmericaRecife = 'AMERICA_RECIFE',
  /** Regina */
  AmericaRegina = 'AMERICA_REGINA',
  /** Resolute */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** Rio Branco */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** Santarem */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** Santiago */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** Santo Domingo */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** Sao Paulo */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** Scoresbysund */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** Sitka */
  AmericaSitka = 'AMERICA_SITKA',
  /** St Barthelemy */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** St Johns */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** St Kitts */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** St Lucia */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** St Thomas */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** St Vincent */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** Swift Current */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** Tegucigalpa */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** Thule */
  AmericaThule = 'AMERICA_THULE',
  /** Thunder Bay */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** Tijuana */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** Toronto */
  AmericaToronto = 'AMERICA_TORONTO',
  /** Tortola */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** Vancouver */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** Whitehorse */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** Winnipeg */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** Yakutat */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** Yellowknife */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Casey */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Davis */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** DumontDUrville */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Macquarie */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Mawson */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** McMurdo */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Palmer */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Rothera */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Syowa */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Troll */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Vostok */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Longyearbyen */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Aden */
  AsiaAden = 'ASIA_ADEN',
  /** Almaty */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Amman */
  AsiaAmman = 'ASIA_AMMAN',
  /** Anadyr */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Aqtau */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Aqtobe */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Ashgabat */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Atyrau */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Baghdad */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Bahrain */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Baku */
  AsiaBaku = 'ASIA_BAKU',
  /** Bangkok */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Barnaul */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Beirut */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Bishkek */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Brunei */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Chita */
  AsiaChita = 'ASIA_CHITA',
  /** Choibalsan */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Colombo */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Damascus */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Dhaka */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Dili */
  AsiaDili = 'ASIA_DILI',
  /** Dubai */
  AsiaDubai = 'ASIA_DUBAI',
  /** Dushanbe */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Famagusta */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Gaza */
  AsiaGaza = 'ASIA_GAZA',
  /** Hebron */
  AsiaHebron = 'ASIA_HEBRON',
  /** Hong Kong */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Hovd */
  AsiaHovd = 'ASIA_HOVD',
  /** Ho Chi Minh */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Irkutsk */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Jakarta */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Jayapura */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Jerusalem */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Kabul */
  AsiaKabul = 'ASIA_KABUL',
  /** Kamchatka */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Karachi */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Kathmandu */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Khandyga */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Kolkata */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Krasnoyarsk */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Kuala Lumpur */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Kuching */
  AsiaKuching = 'ASIA_KUCHING',
  /** Kuwait */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Macau */
  AsiaMacau = 'ASIA_MACAU',
  /** Magadan */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Makassar */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Manila */
  AsiaManila = 'ASIA_MANILA',
  /** Muscat */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Nicosia */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Novokuznetsk */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Novosibirsk */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Omsk */
  AsiaOmsk = 'ASIA_OMSK',
  /** Oral */
  AsiaOral = 'ASIA_ORAL',
  /** Phnom Penh */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Pontianak */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Pyongyang */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Qatar */
  AsiaQatar = 'ASIA_QATAR',
  /** Qostanay */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Qyzylorda */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Riyadh */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Sakhalin */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Samarkand */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Seoul */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Shanghai */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Singapore */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Srednekolymsk */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Taipei */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Tashkent */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Tbilisi */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Tehran */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Thimphu */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Tokyo */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Tomsk */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Ulaanbaatar */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Urumqi */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Ust-Nera */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Vientiane */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Vladivostok */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Yakutsk */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Yangon */
  AsiaYangon = 'ASIA_YANGON',
  /** Yekaterinburg */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Yerevan */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Azores */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Bermuda */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Canary */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Cape Verde */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Faroe */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Madeira */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Reykjavik */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** South Georgia */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Stanley */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** St Helena */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Adelaide */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Brisbane */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Broken Hill */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Currie */
  AustraliaCurrie = 'AUSTRALIA_CURRIE',
  /** Darwin */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Eucla */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Hobart */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Lindeman */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Lord Howe */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Melbourne */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Perth */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Sydney */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Amsterdam */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Andorra */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Astrakhan */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Athens */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Belgrade */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Berlin */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Bratislava */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Brussels */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Bucharest */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Budapest */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Busingen */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Chisinau */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Copenhagen */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Dublin */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Gibraltar */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Guernsey */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Helsinki */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Isle of Man */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Istanbul */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Jersey */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Kaliningrad */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Kiev */
  EuropeKiev = 'EUROPE_KIEV',
  /** Kirov */
  EuropeKirov = 'EUROPE_KIROV',
  /** Lisbon */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Ljubljana */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** London */
  EuropeLondon = 'EUROPE_LONDON',
  /** Luxembourg */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Madrid */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Malta */
  EuropeMalta = 'EUROPE_MALTA',
  /** Mariehamn */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Minsk */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Monaco */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Moscow */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Oslo */
  EuropeOslo = 'EUROPE_OSLO',
  /** Paris */
  EuropeParis = 'EUROPE_PARIS',
  /** Podgorica */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Prague */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Riga */
  EuropeRiga = 'EUROPE_RIGA',
  /** Rome */
  EuropeRome = 'EUROPE_ROME',
  /** Samara */
  EuropeSamara = 'EUROPE_SAMARA',
  /** San Marino */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Sarajevo */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Saratov */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Simferopol */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Skopje */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** Sofia */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Stockholm */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Tallinn */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Tirane */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Ulyanovsk */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Uzhgorod */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Vaduz */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Vatican */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Vienna */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Vilnius */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Volgograd */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Warsaw */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Zagreb */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Zaporozhye */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Zurich */
  EuropeZurich = 'EUROPE_ZURICH',
  /** Antananarivo */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Chagos */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Christmas */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Cocos */
  IndianCocos = 'INDIAN_COCOS',
  /** Comoro */
  IndianComoro = 'INDIAN_COMORO',
  /** Kerguelen */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Mahe */
  IndianMahe = 'INDIAN_MAHE',
  /** Maldives */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Mauritius */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Mayotte */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Reunion */
  IndianReunion = 'INDIAN_REUNION',
  /** Apia */
  PacificApia = 'PACIFIC_APIA',
  /** Auckland */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Bougainville */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Chatham */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Chuuk */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Easter */
  PacificEaster = 'PACIFIC_EASTER',
  /** Efate */
  PacificEfate = 'PACIFIC_EFATE',
  /** Enderbury */
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  /** Fakaofo */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Fiji */
  PacificFiji = 'PACIFIC_FIJI',
  /** Funafuti */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Galapagos */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Gambier */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Guadalcanal */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Guam */
  PacificGuam = 'PACIFIC_GUAM',
  /** Honolulu */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Kiritimati */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Kosrae */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Kwajalein */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Majuro */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Marquesas */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Midway */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Nauru */
  PacificNauru = 'PACIFIC_NAURU',
  /** Niue */
  PacificNiue = 'PACIFIC_NIUE',
  /** Norfolk */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Noumea */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Pago Pago */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Palau */
  PacificPalau = 'PACIFIC_PALAU',
  /** Pitcairn */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Pohnpei */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Port Moresby */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Rarotonga */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Saipan */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Tahiti */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Tarawa */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Tongatapu */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Wake */
  PacificWake = 'PACIFIC_WAKE',
  /** Wallis */
  PacificWallis = 'PACIFIC_WALLIS',
  /** UTC offset: UTC+0 */
  Utc_0 = 'UTC_0',
  /** UTC offset: UTC+0:30 */
  Utc_0_30 = 'UTC_0_30',
  /** UTC offset: UTC+1 */
  Utc_1 = 'UTC_1',
  /** UTC offset: UTC+10 */
  Utc_10 = 'UTC_10',
  /** UTC offset: UTC+10:30 */
  Utc_10_30 = 'UTC_10_30',
  /** UTC offset: UTC+11 */
  Utc_11 = 'UTC_11',
  /** UTC offset: UTC+11:30 */
  Utc_11_30 = 'UTC_11_30',
  /** UTC offset: UTC+12 */
  Utc_12 = 'UTC_12',
  /** UTC offset: UTC+12:45 */
  Utc_12_45 = 'UTC_12_45',
  /** UTC offset: UTC+13 */
  Utc_13 = 'UTC_13',
  /** UTC offset: UTC+13:45 */
  Utc_13_45 = 'UTC_13_45',
  /** UTC offset: UTC+14 */
  Utc_14 = 'UTC_14',
  /** UTC offset: UTC+1:30 */
  Utc_1_30 = 'UTC_1_30',
  /** UTC offset: UTC+2 */
  Utc_2 = 'UTC_2',
  /** UTC offset: UTC+2:30 */
  Utc_2_30 = 'UTC_2_30',
  /** UTC offset: UTC+3 */
  Utc_3 = 'UTC_3',
  /** UTC offset: UTC+3:30 */
  Utc_3_30 = 'UTC_3_30',
  /** UTC offset: UTC+4 */
  Utc_4 = 'UTC_4',
  /** UTC offset: UTC+4:30 */
  Utc_4_30 = 'UTC_4_30',
  /** UTC offset: UTC+5 */
  Utc_5 = 'UTC_5',
  /** UTC offset: UTC+5:30 */
  Utc_5_30 = 'UTC_5_30',
  /** UTC offset: UTC+5:45 */
  Utc_5_45 = 'UTC_5_45',
  /** UTC offset: UTC+6 */
  Utc_6 = 'UTC_6',
  /** UTC offset: UTC+6:30 */
  Utc_6_30 = 'UTC_6_30',
  /** UTC offset: UTC+7 */
  Utc_7 = 'UTC_7',
  /** UTC offset: UTC+7:30 */
  Utc_7_30 = 'UTC_7_30',
  /** UTC offset: UTC+8 */
  Utc_8 = 'UTC_8',
  /** UTC offset: UTC+8:30 */
  Utc_8_30 = 'UTC_8_30',
  /** UTC offset: UTC+8:45 */
  Utc_8_45 = 'UTC_8_45',
  /** UTC offset: UTC+9 */
  Utc_9 = 'UTC_9',
  /** UTC offset: UTC+9:30 */
  Utc_9_30 = 'UTC_9_30'
}

/** Options for filtering the connection */
export type MenuItemsWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
};

export type PostObjectUnion = Post | Page | MediaItem;

export type TermObjectUnion = Category | Tag | PostFormat | ProductType | VisibleProduct | ProductCategory | ProductTag | ShippingClass | PaPeso;

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /**
   * The name of the template
   * @deprecated 
   */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_FullWidth = ContentTemplate & {
  __typename?: 'Template_FullWidth';
  /**
   * The name of the template
   * @deprecated 
   */
  templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type Template_Homepage = ContentTemplate & {
  __typename?: 'Template_Homepage';
  /**
   * The name of the template
   * @deprecated 
   */
  templateName?: Maybe<Scalars['String']>;
};

export type Unnamed_1_MutationVariables = Exact<{
  input: AddToCartInput;
}>;


export type Unnamed_1_Mutation = (
  { __typename?: 'RootMutation' }
  & { addToCart?: Maybe<(
    { __typename?: 'AddToCartPayload' }
    & { cartItem?: Maybe<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'key' | 'quantity' | 'total' | 'subtotal' | 'subtotalTax'>
      & { product?: Maybe<(
        { __typename?: 'VariableProduct' }
        & Pick<VariableProduct, 'id' | 'name' | 'description' | 'type' | 'onSale' | 'slug' | 'averageRating' | 'reviewCount'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
        )>, galleryImages?: Maybe<(
          { __typename?: 'ProductToMediaItemConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
          )>>> }
        )> }
      ) | (
        { __typename?: 'ExternalProduct' }
        & Pick<ExternalProduct, 'id' | 'name' | 'description' | 'type' | 'onSale' | 'slug' | 'averageRating' | 'reviewCount'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
        )>, galleryImages?: Maybe<(
          { __typename?: 'ProductToMediaItemConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
          )>>> }
        )> }
      ) | (
        { __typename?: 'GroupProduct' }
        & Pick<GroupProduct, 'id' | 'name' | 'description' | 'type' | 'onSale' | 'slug' | 'averageRating' | 'reviewCount'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
        )>, galleryImages?: Maybe<(
          { __typename?: 'ProductToMediaItemConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
          )>>> }
        )> }
      ) | (
        { __typename?: 'SimpleProduct' }
        & Pick<SimpleProduct, 'id' | 'name' | 'description' | 'type' | 'onSale' | 'slug' | 'averageRating' | 'reviewCount'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
        )>, galleryImages?: Maybe<(
          { __typename?: 'ProductToMediaItemConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
          )>>> }
        )> }
      )>, variation?: Maybe<(
        { __typename?: 'ProductVariation' }
        & Pick<ProductVariation, 'id' | 'name' | 'description' | 'type' | 'onSale' | 'price' | 'regularPrice' | 'salePrice'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'id' | 'sourceUrl' | 'altText'>
        )>, attributes?: Maybe<(
          { __typename?: 'ProductVariationToVariationAttributeConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'VariationAttribute' }
            & Pick<VariationAttribute, 'id' | 'attributeId' | 'name' | 'value'>
          )>>> }
        )> }
      )> }
    )> }
  )> }
);

type ProductListFields_VariableProduct_Fragment = (
  { __typename?: 'VariableProduct' }
  & Pick<VariableProduct, 'onSale' | 'price' | 'id' | 'name' | 'slug'>
  & { image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductListFields_ExternalProduct_Fragment = (
  { __typename?: 'ExternalProduct' }
  & Pick<ExternalProduct, 'onSale' | 'price' | 'id' | 'externalUrl' | 'name' | 'slug'>
  & { image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductListFields_GroupProduct_Fragment = (
  { __typename?: 'GroupProduct' }
  & Pick<GroupProduct, 'id' | 'name' | 'slug'>
  & { products?: Maybe<(
    { __typename?: 'GroupProductToProductConnection' }
    & { nodes?: Maybe<Array<Maybe<{ __typename?: 'VariableProduct' } | { __typename?: 'ExternalProduct' } | { __typename?: 'GroupProduct' } | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'id' | 'price' | 'onSale'>
    )>>> }
  )>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductListFields_SimpleProduct_Fragment = (
  { __typename?: 'SimpleProduct' }
  & Pick<SimpleProduct, 'onSale' | 'price' | 'id' | 'name' | 'slug'>
  & { image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

export type ProductListFieldsFragment = ProductListFields_VariableProduct_Fragment | ProductListFields_ExternalProduct_Fragment | ProductListFields_GroupProduct_Fragment | ProductListFields_SimpleProduct_Fragment;

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'RootQuery' }
  & { products?: Maybe<(
    { __typename?: 'RootQueryToProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'RootQueryToProductConnectionEdge' }
      & Pick<RootQueryToProductConnectionEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'VariableProduct' }
        & ProductListFields_VariableProduct_Fragment
      ) | (
        { __typename?: 'ExternalProduct' }
        & ProductListFields_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductListFields_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductListFields_SimpleProduct_Fragment
      )> }
    )>>> }
  )> }
);

type ProductSingle_VariableProduct_Fragment = (
  { __typename?: 'VariableProduct' }
  & Pick<VariableProduct, 'onSale' | 'price' | 'id' | 'averageRating' | 'description' | 'shortDescription' | 'type' | 'name' | 'slug'>
  & { productTypes?: Maybe<(
    { __typename?: 'ProductToProductTypeConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTypeConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductType' }
        & Pick<ProductType, 'name' | 'slug'>
      )> }
    )>>> }
  )>, productTags?: Maybe<(
    { __typename?: 'ProductToProductTagConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTagConnectionEdge' }
      & Pick<ProductToProductTagConnectionEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'ProductTag' }
        & Pick<ProductTag, 'name' | 'slug'>
      )> }
    )>>> }
  )>, related?: Maybe<(
    { __typename?: 'ProductToProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'VariableProduct' }
        & ProductListFields_VariableProduct_Fragment
      ) | (
        { __typename?: 'ExternalProduct' }
        & ProductListFields_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductListFields_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductListFields_SimpleProduct_Fragment
      )> }
    )>>> }
  )>, productCategories?: Maybe<(
    { __typename?: 'ProductToProductCategoryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductCategoryConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductCategory' }
        & Pick<ProductCategory, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
        )> }
      )> }
    )>>> }
  )>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductSingle_ExternalProduct_Fragment = (
  { __typename?: 'ExternalProduct' }
  & Pick<ExternalProduct, 'onSale' | 'price' | 'id' | 'externalUrl' | 'averageRating' | 'description' | 'shortDescription' | 'type' | 'name' | 'slug'>
  & { productTypes?: Maybe<(
    { __typename?: 'ProductToProductTypeConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTypeConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductType' }
        & Pick<ProductType, 'name' | 'slug'>
      )> }
    )>>> }
  )>, productTags?: Maybe<(
    { __typename?: 'ProductToProductTagConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTagConnectionEdge' }
      & Pick<ProductToProductTagConnectionEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'ProductTag' }
        & Pick<ProductTag, 'name' | 'slug'>
      )> }
    )>>> }
  )>, related?: Maybe<(
    { __typename?: 'ProductToProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'VariableProduct' }
        & ProductListFields_VariableProduct_Fragment
      ) | (
        { __typename?: 'ExternalProduct' }
        & ProductListFields_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductListFields_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductListFields_SimpleProduct_Fragment
      )> }
    )>>> }
  )>, productCategories?: Maybe<(
    { __typename?: 'ProductToProductCategoryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductCategoryConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductCategory' }
        & Pick<ProductCategory, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
        )> }
      )> }
    )>>> }
  )>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductSingle_GroupProduct_Fragment = (
  { __typename?: 'GroupProduct' }
  & Pick<GroupProduct, 'id' | 'averageRating' | 'description' | 'shortDescription' | 'type' | 'name' | 'slug'>
  & { products?: Maybe<(
    { __typename?: 'GroupProductToProductConnection' }
    & { nodes?: Maybe<Array<Maybe<{ __typename?: 'VariableProduct' } | { __typename?: 'ExternalProduct' } | { __typename?: 'GroupProduct' } | (
      { __typename?: 'SimpleProduct' }
      & Pick<SimpleProduct, 'id' | 'price' | 'onSale'>
    )>>> }
  )>, productTypes?: Maybe<(
    { __typename?: 'ProductToProductTypeConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTypeConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductType' }
        & Pick<ProductType, 'name' | 'slug'>
      )> }
    )>>> }
  )>, productTags?: Maybe<(
    { __typename?: 'ProductToProductTagConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTagConnectionEdge' }
      & Pick<ProductToProductTagConnectionEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'ProductTag' }
        & Pick<ProductTag, 'name' | 'slug'>
      )> }
    )>>> }
  )>, related?: Maybe<(
    { __typename?: 'ProductToProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'VariableProduct' }
        & ProductListFields_VariableProduct_Fragment
      ) | (
        { __typename?: 'ExternalProduct' }
        & ProductListFields_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductListFields_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductListFields_SimpleProduct_Fragment
      )> }
    )>>> }
  )>, productCategories?: Maybe<(
    { __typename?: 'ProductToProductCategoryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductCategoryConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductCategory' }
        & Pick<ProductCategory, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
        )> }
      )> }
    )>>> }
  )>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

type ProductSingle_SimpleProduct_Fragment = (
  { __typename?: 'SimpleProduct' }
  & Pick<SimpleProduct, 'onSale' | 'price' | 'id' | 'averageRating' | 'description' | 'shortDescription' | 'type' | 'name' | 'slug'>
  & { productTypes?: Maybe<(
    { __typename?: 'ProductToProductTypeConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTypeConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductType' }
        & Pick<ProductType, 'name' | 'slug'>
      )> }
    )>>> }
  )>, productTags?: Maybe<(
    { __typename?: 'ProductToProductTagConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductTagConnectionEdge' }
      & Pick<ProductToProductTagConnectionEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'ProductTag' }
        & Pick<ProductTag, 'name' | 'slug'>
      )> }
    )>>> }
  )>, related?: Maybe<(
    { __typename?: 'ProductToProductConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'VariableProduct' }
        & ProductListFields_VariableProduct_Fragment
      ) | (
        { __typename?: 'ExternalProduct' }
        & ProductListFields_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductListFields_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductListFields_SimpleProduct_Fragment
      )> }
    )>>> }
  )>, productCategories?: Maybe<(
    { __typename?: 'ProductToProductCategoryConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'ProductToProductCategoryConnectionEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProductCategory' }
        & Pick<ProductCategory, 'name' | 'slug'>
        & { image?: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
        )> }
      )> }
    )>>> }
  )>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & Pick<MediaItem, 'sourceUrl' | 'srcSet'>
  )> }
);

export type ProductSingleFragment = ProductSingle_VariableProduct_Fragment | ProductSingle_ExternalProduct_Fragment | ProductSingle_GroupProduct_Fragment | ProductSingle_SimpleProduct_Fragment;

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = (
  { __typename?: 'RootQuery' }
  & { product?: Maybe<(
    { __typename?: 'VariableProduct' }
    & ProductSingle_VariableProduct_Fragment
  ) | (
    { __typename?: 'ExternalProduct' }
    & ProductSingle_ExternalProduct_Fragment
  ) | (
    { __typename?: 'GroupProduct' }
    & ProductSingle_GroupProduct_Fragment
  ) | (
    { __typename?: 'SimpleProduct' }
    & ProductSingle_SimpleProduct_Fragment
  )> }
);
