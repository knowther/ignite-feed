import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { createPost } from "../../utils/CreatePostTextHandler";

export function Post({ avatarUrl, name, role, publishedAt, content }) {
  const publishedDateFormated = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);
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
          <time title="29 de Março de 2024" dateTime="2024-03-29">
            {publishedDateFormated}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line) => {
            return createPost(line.type, line.content);
          })}
        </div>
        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder="Deixe um comentário..."></textarea>

          <footer>
            <button type="submit">Comentar</button>
          </footer>
        </form>
        <div className={styles.commentList}>
          <Comment />
        </div>
      </article>
    </>
  );
}
