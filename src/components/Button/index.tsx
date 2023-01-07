import styles from "./style.module.css";

interface IPropsBtn {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  disabled: boolean;
  onClickBtn: () => void;
}

export const Button = ({ type, text, disabled, onClickBtn }: IPropsBtn) => {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        onClick={onClickBtn}
        className={styles.btn}
      >
        {text}
      </button>
    </>
  );
};
