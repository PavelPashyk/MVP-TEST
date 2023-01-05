import { IPropsEvents } from "../../../types/events";
import { EventItem } from "../EventItem";
import styles from "./style.module.css";

interface IPropsEventsList {
  arr: IPropsEvents[];
}

export const EventsList = ({arr}: IPropsEventsList) => {
  return (
    <ul className={styles.eventsList}>
      {arr.map((item) => {
        return (
          <EventItem
            id={item.id}
            viev={item.viev}
            hosts={item.hosts}
            guests={item.guests}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};
