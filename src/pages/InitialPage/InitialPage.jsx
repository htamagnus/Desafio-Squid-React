import { useState, useEffect } from "react";
import axios from "axios";
import CardImage from "../../components/CardImage/CardImage";
import Logo from "../../components/Logo/Logo";
import styles from "./InitialPage.module.scss";

export default function InitialPage() {
  const [list, setList] = useState([]);

  const getData = () => {
    axios
      .get("https://us-central1-squid-apis.cloudfunctions.net/test-front-basic")
      .then((response) => response.data)
      .then((response) => setList(response))
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Logo />
      <div className={styles.container}>
        {list.length === 0 && <div className={styles.spinner}></div>}
        {list && list.map((e, index) => <CardImage elem={e} key={index} />)}
      </div>
    </>
  );
}
