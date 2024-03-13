import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={"https://github.com/knowther.png"} />
            <div className={styles.authorInfo}>
              <strong>Johnny Wesley</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="29 de Março de 2024" dateTime="2024-03-29">
            há quase 1 ano
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <a href="">👉 jane.design/doctorcare</a>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
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
