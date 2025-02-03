import styles from "./Input.module.css";

export default function Input({ value, setValue, title }) {
  return (
    <div className={styles.wrapper}>
     
        <input
          type="text"
          className={styles.input}
          value={value()}
          attr:value={value()}
          oninput={(e) => setValue(e.target.value)}
        />
      <div className={styles.titleWrapper}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
