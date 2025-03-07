import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import LandingChart from "./LandingChart";
import LandingNav from "../../components/LandingNav/LandingNav";

export default function LandingPage() {
  return (
  <div className={styles.landingPage}>
    <Navbar position="fixed"></Navbar>

    {/** Page Content */}
    {/** Section 1 */}
    <div className={styles.landingSection1}>
      <div className={styles.landingSection1Left}>
        <h1>The Financial</h1>
        <h1>Tracker</h1>
        <h2>For all your financial needs</h2>
        <button>Get Started</button>
      </div>

      <div className={styles.landingSection1Right}>
        <div className={styles.graphSquircle}>
          <LandingChart></LandingChart>
        </div>
      </div>
    </div>

    {/** Landing Nav */}
    <div className={styles.landingNavWrapper}>
      <LandingNav></LandingNav>
    </div>

    {/** Section 2 */}
    <div classList={{ 
      [styles.landingSection2]: true, 
      [styles.landingSection]: true 
    }}>

    </div>

    {/** Section 3 */}
    <div classList={{ 
      [styles.landingSection3]: true, 
      [styles.landingSection]: true 
    }}>
      
    </div>

    {/** Section 4 */}
    <div classList={{ 
      [styles.landingSection4]: true, 
      [styles.landingSection]: true 
    }}>
      
    </div>

    {/** Section 5 */}
    <div classList={{ 
      [styles.landingSection5]: true, 
      [styles.landingSection]: true 
    }}>      
    
    </div>

    <div className={styles.footerWrapper}>
      <Footer></Footer>
    </div>
  </div>
  );
}
