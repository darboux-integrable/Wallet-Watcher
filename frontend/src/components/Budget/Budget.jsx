import styles from "./Budget.module.css"

export default function Budget({ title, data}){

    return (

        <div className={styles.table}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.dataSection}>
                {data.map(dataPoint => {
                    return (
                        <div className={styles.dataPoint}>
                            <div className={styles.topSection}>
                                <h2 className={styles.dataTitle}>{dataPoint.title}</h2>
                            </div>
                            <div className={styles.bottomSection}>
                                <h2 className={styles.dataValue}>${dataPoint.value}</h2>
                                <p className={styles.timeInterval}>{dataPoint.timeInterval}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
      
    )

}