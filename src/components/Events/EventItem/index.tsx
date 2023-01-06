import { IPropsEvents } from "../../../types/events";
import styles from "./style.module.css";

interface IPropsEventItem extends IPropsEvents {
  onClickEvent: () => void;
}

export const EventItem = ({
  viev,
  hosts,
  guests,
  date,
  onClickEvent,
}: IPropsEventItem) => {
  return (
    <li className={styles.item} onClick={onClickEvent}>
      <p className={styles.itemDate}>{date}</p>
      <h4 className={styles.itemTitle}>
        <span>{hosts}</span> - <span>{guests}</span>
      </h4>
      <p className={styles.itemView}>{viev}</p>
    </li>
  );
};
