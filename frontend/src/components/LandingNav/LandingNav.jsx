import styles from "./LandingNav.module.css";
import upArrow from "../../assets/images/up.svg"
import downArrow from "../../assets/images/down.svg"
import flag from "../../assets/images/flag.svg"
import chart from "../../assets/images/chart.svg"

export default function LandingNav() {
  
  return (
    <nav className={styles.landingNav}>

      <div className={styles.navElement}>
        <img src={upArrow} className={styles.elementIcon}/>
        <div className={styles.textBox}>
          <h1 className={styles.elementTitle}>Income</h1>
          <h2 className={styles.elementSubtitle}>Track income</h2>
        </div>
      </div>

      <div className={styles.navElement}>
        <img src={downArrow} className={styles.elementIcon}/>
        <div className={styles.textBox}>
          <h1 className={styles.elementTitle}>Expenses</h1>
          <h2 className={styles.elementSubtitle}>Track expenses</h2>
        </div>
      </div>

      <div className={styles.navElement}>
        <img src={flag} className={styles.elementIcon}/>
        <div className={styles.textBox}>
          <h1 className={styles.elementTitle}>Budgeting</h1>
          <h2 className={styles.elementSubtitle}>Balance goals</h2>
        </div>      
      </div>

      <div className={styles.navElement}>
        <img src={chart} className={styles.elementIcon}/>
        <div className={styles.textBox}>
          <h1 className={styles.elementTitle}>Visualizing</h1>
          <h2 className={styles.elementSubtitle}>Charts & Tables</h2>
        </div>      
      </div>
    
    </nav>
  );
}
