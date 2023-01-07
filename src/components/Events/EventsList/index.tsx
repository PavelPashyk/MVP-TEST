import { useEffect, useState } from "react";
import { IPropsEvents } from "../../../types/events";
import { EventItem } from "../EventItem";
import styles from "./style.module.css";

interface IPropsEventsList {
  arr: IPropsEvents[];
  onClickEvent: (id: number | undefined) => void;
}

export const EventsList = ({ arr, onClickEvent }: IPropsEventsList) => {
  const [resultBet, setResultBet] = useState(localStorage.getItem("resultBet"));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("resultBet");
      setResultBet("");
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <p className={styles.eventsText}>{resultBet}</p>
      <ul className={styles.eventsList}>
        {arr.map((item) => {
          const clickEvent = () => {
            onClickEvent(item.id);
          };
          return (
            <EventItem
              key={item.id}
              id={item.id}
              viev={item.viev}
              hosts={item.hosts}
              guests={item.guests}
              date={item.date}
              onClickEvent={clickEvent}
            />
          );
        })}
      </ul>
    </>
  );
};
