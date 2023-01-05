import { IPropsEvents } from "../../../types/events";
import styles from "./style.module.css";

export const EventItem = ({
  id,
  viev,
  hosts,
  guests,
  date,
}: IPropsEvents) => {
  return (
    <li className={styles.item}>
      <p className={styles.itemDate}>{date}</p>
      <h4 className={styles.itemTitle}><span>{hosts}</span> - <span>{guests}</span></h4>
      <p className={styles.itemView}>{viev}</p>
    </li>
  )
}
