import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thyago608.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thyago Ribeiro</strong>
              <time
                title="17 de Outubro de 2022 às 09:50"
                dateTime="2022-10-17 09:50:00"
              >
                Cerca de uma hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum
            fuga doloremque officiis quibusdam ex accusantium, totam voluptas
            veniam odit tempora beatae ut odio aspernatur debitis ipsum? Sint,
            praesentium repudiandae!
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
