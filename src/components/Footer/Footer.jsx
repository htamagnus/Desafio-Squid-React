import styles from "./Footer.module.scss";
import { BiHeart } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com <BiHeart style={{ fill: "white" }} /> por Ágatha Magnus
      </p>
    </footer>
  );
}
