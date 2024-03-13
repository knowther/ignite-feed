export function createPost(type, content) {
  if (type == "paragraph") {
    return <p>{content}</p>;
  } else if (type == "link") {
    return (
      <p>
        <a href="">{content}</a>
      </p>
    );
  }
}
