import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LandingChart from "./LandingChart";
import LandingNav from "../../components/LandingNav/LandingNav";
import DataTable from "../../components/DataTable/DataTable";
import upIcon from "../../assets/images/up.svg";
import ExampleChart from "./ExampleChart";
import BudgetTable from "../../components/BudgetTable/BudgetTable"

export default function LandingPage() {
  let dataBudgets = [
    {
      title: "Groceries",
      max: 250,
      items: [
        {
          name: "milk",
          cost: 5,
          amount: 2
        },
        {
          name: "Eggs",
          cost: 12,
          amount: 1
        },
        {
          name: "Steak",
          cost: 20,
          amount: 3
        },
        {
          name: "Soda",
          cost: 10,
          amount: 1
        }
      ]
    },
    {
      title: "Birthday Party",
      max: 300,
      items: [
        {
          name: "Pizza",
          cost: 15,
          amount: 4
        },
        {
          name: "Gift",
          cost: 50,
          amount: 3
        },
        {
          name: "Steam Gift Card",
          cost: 25,
          amount: 1
        },
        {
          name: "Trampoline Park",
          cost: 200,
          amount: 1
        }
      ]
    },
    {
      title: "Wedding",
      max: 25000,
      items: [
        {
          name: "Cake",
          cost: 5000,
          amount: 1
        },
        {
          name: "Priest",
          cost: 700,
          amount: 2
        },
        {
          name: "Food Catering",
          cost: 7500,
          amount: 1
        },
        {
          name: "Wedding Ring",
          cost: 10000,
          amount: 1
        }
      ]
    }
  ];
  let dataIncomes = [
    {
      title: "Work",
      timeInterval: "Monthly",
      value: 222200,
    },
    {
      title: "Interest",
      timeInterval: "Yearly",
      value: 500,
    },
    {
      title: "Overtime Pay",
      timeInterval: "One-time",
      value: 100,
    },
    {
      title: "Bike Sale",
      timeInterval: "One-time",
      value: 35,
    },
    {
      title: "Tips",
      timeInterval: "Weekdays",
      value: 20,
    },
    {
      title: "Scholarship",
      timeInterval: "Yearly",
      value: 8000,
    },
  ];
  let dataExpenses = [
    {
      title: "Taxes",
      timeInterval: "Yearly",
      value: 2000,
    },
    {
      title: "Water Bill",
      timeInterval: "Yearly",
      value: 300,
    },
    {
      title: "Groceries",
      timeInterval: "Monthly",
      value: 450,
    },
    {
      title: "Gas",
      timeInterval: "Daily",
      value: 10,
    },
    {
      title: "Date Night",
      timeInterval: "Weekly",
      value: 100,
    },
    {
      title: "Phone Bill",
      timeInterval: "Monthly",
      value: 30,
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
          <div>
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
        </div>

        <div className={styles.sectionRight}>
          <DataTable data={dataIncomes} title={"Incomes"} />
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
          <DataTable data={dataExpenses} title={"Expenses"} />
        </div>

        <div className={styles.sectionRight}>

          <div>
            <div className={styles.invertedTitle}>Expenses</div>
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

      </div>

      {/** Section 4 */}
      <div
        classList={{
          [styles.landingSection4]: true,
          [styles.landingSection]: true,
        }}
      >
        <div className={styles.sectionLeft}>
          <div>
              <div className={styles.invertedTitle}>Budgetting</div>
              <div className={styles.incomesText}>
                Set goals and due dates for your incomes, expenses, or net worth in order to create your own inscentives to save up money. The money could be saved for a brand new car, a new house, or a big party.

                <br />
                <br />

                Budgets can also be used to make sure you have enough money ready for you in the future. You never know when a disaster might strike. 
              </div>
            </div>
          </div>

        <div className={styles.sectionRight}>
          <BudgetTable budgets={dataBudgets}/>
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
          <div className={styles.exampleChartContainer}>
            <ExampleChart></ExampleChart>
          </div>
        </div>

        <div className={styles.sectionRight}>
          <div>
              <div className={styles.invertedTitle}>Visualizing</div>
              <div className={styles.incomesText}>
                By having Wallet Watcher graph your data into a bar or line graph, you can more easily get an idea of what is happening to your net worth over time.
                <br />
                <br />

                By more easily understanding what is happening with your money, you can then make plans ahead of time to more easily avoid any future issues.
              </div>
            </div>

        </div>
      </div>

      <div className={styles.footerWrapper}>
        <Footer></Footer>
      </div>
    </div>
  );
}
