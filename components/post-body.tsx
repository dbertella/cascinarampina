type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
