import emptyImg from "../../assets/Clipboard.svg";

import styles from "./styles.module.css";

export function Empty() {
  return (
    <div className={styles.todoEmpty}>
      <img src={emptyImg} alt="" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
