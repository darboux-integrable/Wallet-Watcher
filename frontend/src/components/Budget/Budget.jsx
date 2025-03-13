import styles from "./Budget.module.css"

export default function Budget({ title, data}){

    return (
        <div className={styles.dropPanel}>
            <div className={styles.topSection}>
                <p class={styles.title}>{title}</p>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.description}>{data}</p>
            </div>
        </div>
    )

}