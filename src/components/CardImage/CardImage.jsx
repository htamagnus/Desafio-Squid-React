import styles from "./CardImage.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaCalendarAlt } from "react-icons/fa";

const CardImage = ({ elem }) => {
  const refactCreationDate = (data) => {
    return `${data.substring(8, 10)}/${data.substring(5, 7)}/${data.substring(
      0,
      4
    )}`;
  };

  return (
    <a
      className={styles.card}
      href={elem.link}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={styles.cardElements}
        style={{
          backgroundImage: `url(${elem.imagens.thumbnail.url})`,
          width: "150px",
          height: "150px",
        }}
      >
        <p>@{elem.usuario.username}</p>
        <p>
          <AiFillHeart />
          {elem.upvotes}
        </p>
        <p>
          <FaComment />
          {elem.comentarios}
        </p>
        <p>
          <FaCalendarAlt />
          {refactCreationDate(elem.criadoEm)}
        </p>
      </div>
    </a>
  );
};

export default CardImage;
