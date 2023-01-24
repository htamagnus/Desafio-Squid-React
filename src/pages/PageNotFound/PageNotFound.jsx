import styles from "./PageNotFound.module.scss";
import Erro404 from "./Erro404.jpg";

export default function PageNotFound() {
  return (
    <div className={styles.error}>
      <img
        src={Erro404}
        alt="Imagem de uma página com erro 404, simbolizando que não está funcionando. Contém uma ilustração de um robô arrumando suas peças"
      />
    </div>
  );
}
