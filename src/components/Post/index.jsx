import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Avatar } from "../Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({ data }) {
  const [listCommentsRef] = useAutoAnimate();
  const [comments, setComments] = useState(["Post muito bacana, hein ?!"]);
  const [newCommentText, setNewCommentText] = useState("");

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

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(comment) {
    setNewCommentText(comment);
    event.target.setCustomValidity("");
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(commentToBeDelete) {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToBeDelete
    );

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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

      <form
        className={styles.commentForm}
        onSubmit={(e) => handleCreateNewComment(e)}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e.target.value)}
          onInvalid={(e) => handleNewCommentInvalid(e)}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList} ref={listCommentsRef}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
}
