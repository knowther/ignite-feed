import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { createPost } from "../../utils/CreatePostTextHandler";

export function Post({ avatarUrl, name, role, publishedAt, content }) {
  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  );

  const comments = [1, 2, 3];

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    comments.push(4);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormated}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line) => {
            return createPost(line.type, line.content);
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário..."></textarea>

          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map(() => {
            return <Comment />;
          })}
        </div>
      </article>
    </>
  );
}
