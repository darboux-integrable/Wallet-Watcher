import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import LandingChart from "./landingChart";

export default function LandingPage() {
  return (
  <div className={styles.landingPage}>
    <Navbar position="sticky"></Navbar>

    {/** Page Content */}
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

    <div className={styles.footerWrapper}>
      <Footer></Footer>
    </div>
  </div>
  );
}
