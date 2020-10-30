const PostTitle = ({ children }: { children: string }) => {
  return <h1 dangerouslySetInnerHTML={{ __html: children }} />;
};

export default PostTitle;
