import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LandingChart from "./LandingChart";
import LandingNav from "../../components/LandingNav/LandingNav";
import DataTable from "../../components/DataTable/DataTable";
import upIcon from "../../assets/images/up.svg";

export default function LandingPage() {
  let data = [
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 1200,
    },
  ];

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
      <div
        classList={{
          [styles.landingSection2]: true,
          [styles.landingSection]: true,
        }}
      >
        <div className={styles.sectionLeft}>
          <div className={styles.invertedTitle}>Incomes</div>
          <div className={styles.incomesText}>
            You can enter different income streams. Anything counts, your job, a
            side gig, money from a birthday card from gandma, anything! Wallet
            Watcher will keep track of these different incomes.
            <br />
            <br />
            Incomes can see viewed in tables as shown on the right, but also as
            graphical data which may better help you visualize your incomes over
            time!
          </div>
        </div>

        <div className={styles.sectionRight}>
          <DataTable data={data} title={"Incomes"} />
        </div>
      </div>

      {/** Section 3 */}
      <div
        classList={{
          [styles.landingSection3]: true,
          [styles.landingSection]: true,
        }}
      >
        <div className={styles.sectionLeft}>
          <DataTable data={data} title={"Incomes"} />
        </div>

        <div className={styles.sectionRight}>
          <div className={styles.invertedTitle}>Incomes</div>
          <div className={styles.incomesText}>
            Just like incomes, your expenses can also be viewed in a table or
            graph to visualize the data. Expenses can be anything from your
            rent, car payments, student loans, food, electricity, or a $20 bet
            you lost. 

            <br />
            <br />

            Your expenses along with your incomes can come together to calculuate your net (how much you profited or lost in total). 
          </div>
        </div>
      </div>

      {/** Section 4 */}
      <div
        classList={{
          [styles.landingSection4]: true,
          [styles.landingSection]: true,
        }}
      >
        <div className={styles.sectionLeft}>
          <div className={styles.section4DroppingPanels}>
            <div className={styles.dropPanel}>
              <div>
                <li>Hello</li>
              </div>
            </div>
            <div className={styles.dropPanel}>
              <div>
                <li>Hello</li>
              </div>
            </div>
            <div className={styles.dropPanel}>
              <div>
                <li>Hello</li>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionRight}>
          <div className={styles.whiteBox}>
            <h1>Content:</h1>
            <p>Hello</p>
          </div>
        </div>
      </div>

      {/** Section 5 */}
      <div
        classList={{
          [styles.landingSection5]: true,
          [styles.landingSection]: true,
        }}
      >
        <div className={styles.sectionLeft}>
          <div className={styles.whiteBox}>
            <h1>Content:</h1>
            <p>Hello</p>
          </div>
        </div>

        <div className={styles.sectionRight}>Hello</div>
      </div>

      <div className={styles.footerWrapper}>
        <Footer></Footer>
      </div>
    </div>
  );
}
