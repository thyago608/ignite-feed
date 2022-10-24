import { Avatar } from "../Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({ data }) {
  const publishedDateFormatted = format(
    data.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeNow = formatDistanceToNow(data.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar src={data.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={data.publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {data.content.map((line) => {
          return (
            <div key={line.content}>
              {line.type === "paragraph" ? (
                <p>{line.content}</p>
              ) : line.type === "link" ? (
                <p>
                  <a href="#">{line.content}</a>
                </p>
              ) : (
                <span />
              )}
            </div>
          );
        })}
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
