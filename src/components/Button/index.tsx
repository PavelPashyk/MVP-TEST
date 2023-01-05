import styles from "./style.module.css";

interface IPropsBtn {
  text: string;
  disabled: boolean;
  onClickBtn: () => void;
}

export const Button = ({ text, disabled, onClickBtn }: IPropsBtn) => {
  return (
    <>
      <button disabled={disabled} onClick={onClickBtn} className={styles.btn}>
        {text}
      </button>
    </>
  );
};
