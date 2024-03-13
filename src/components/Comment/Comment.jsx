import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img src="https://github.com/knowther.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Johnny Wesley</strong>
                <time title="29 de Março de 2024" dateTime="2024-03-29">
                  há quase 1 ano
                </time>
              </div>
              <button title="Deletar Comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>Muito bom Johnny, parabéns!!</p>
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
