import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/thyago608.png" />
          <div className={styles.authorInfo}>
            <strong>Thyago Ribeiro</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="11 de Maio de 2022 às 08:13"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          repellat earum dolore nesciunt. Atque nobis quam iste facere cum eaque
          debitis sit, quasi vel expedita explicabo quidem quibusdam nihil quo!
        </p>
        <a href="#" className={styles.email}>
          john.doe/doctcare
        </a>
        <div className={styles.hashTags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </div>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </div>
  );
}
