import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src="https://github.com/knowther.png" />
            <div className={styles.authorInfo}>
              <strong>Johnny Wesley</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="29 de Março de 2023" dateTime="2023-03-29">
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
      </article>
    </>
  );
}
