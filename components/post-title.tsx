import { Styled } from "theme-ui";

const PostTitle = ({ children, ...rest }: { children: string }) => {
  return <Styled.h1 {...rest} dangerouslySetInnerHTML={{ __html: children }} />;
};

export default PostTitle;
