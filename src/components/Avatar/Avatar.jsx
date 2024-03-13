import styles from "./Avatar.module.css";
export function Avatar({ hasBorder = true, src }) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatar : styles.avatarNoBorder}
        src={src}
        alt="A imagem de perfil de um usuário"
      />
    </>
  );
}
