import styles from "./Logo.module.scss";
import LogoSquid from "./LogoSquid.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a href="https://squidit.com.br/" target="_blank" rel="noreferrer">
        <img
          className={styles.logo__imagem}
          src={LogoSquid}
          alt="Logo da Empresa Squid, com a escrita do nome da empresa Squid em rosa, fonte não serifada"
        />
      </a>
    </div>
  );
}
