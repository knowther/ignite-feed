export function Post(props) {
  const { author, content } = props;
  return (
    <>
      <h1>{author}</h1>
      <p>{content}</p>
    </>
  );
}
