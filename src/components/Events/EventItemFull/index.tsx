import { ChangeEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { eventsArrayTest } from "../../../mocks/eventsArrayTest";
import { Button } from "../../Button";
import styles from "./style.module.css";

export const EventItemFull = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const arrEvents = eventsArrayTest[Number(eventId) - 1];
  const [disabled, setDisabled] = useState(true);
  const [valueInput, setValueInput] = useState("");
  const [result, setResult] = useState<string>();

  const navigateToMain = () => {
    navigate("/");
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValueInput(e.target.value);
    e.target.value === "" ? setDisabled(disabled) : setDisabled(false);
  };

  useEffect(() => {
    setResult(
      `Спасибо, Ваша ставка на матч ${arrEvents.hosts} - ${arrEvents.guests}, ставка ${valueInput}, принята!`
    );
  }, [valueInput]);

  const onClickBackMain = () => {
    localStorage.setItem("resultBet", `${result}`);
    navigateToMain();
    setValueInput("");
  };

  return (
    <div className={styles.playerBlock}>
      <p className={styles.playersViev}>{arrEvents.viev}</p>
      <p className={styles.playersDate}>{arrEvents.date}</p>
      <div className={styles.playersBlock}>
        <div className={styles.playerHosts}>
          <h4 className={styles.playerTitle}>{arrEvents.hosts}</h4>
          <p className={styles.playerPlace}>хозяева</p>
        </div>
        <div className={styles.playerGuests}>
          <h4 className={styles.playerTitle}>{arrEvents.guests}</h4>
          <p className={styles.playerPlace}>гости</p>
        </div>
      </div>
      <div className={styles.bet}>
        <div className={styles.betItem}>
          <input
            id="radio-1"
            type="radio"
            name="radio"
            value="на победу хозяев"
            onChange={handleOnChange}
          />
          <label htmlFor="radio-1">на победу хозяев</label>
        </div>
        <div className={styles.betItem}>
          <input
            id="radio-2"
            type="radio"
            name="radio"
            value="на ничью"
            onChange={handleOnChange}
          />
          <label htmlFor="radio-2">на ничью</label>
        </div>
        <div className={styles.betItem}>
          <input
            id="radio-3"
            type="radio"
            name="radio"
            value="на победу гостей"
            onChange={handleOnChange}
          />
          <label htmlFor="radio-3">на победу гостей</label>
        </div>
      </div>
      <Button
        type={"submit"}
        text={"Сделать ставку"}
        disabled={disabled}
        onClickBtn={onClickBackMain}
      />
    </div>
  );
};
