const PostTitle = ({ children, ...rest }: { children: string; [key: string]: any }) => {
  return <h1 {...rest} dangerouslySetInnerHTML={{ __html: children }} />;
};

export default PostTitle;
