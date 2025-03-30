import styles from "./HubPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import NavCard from "../../components/NavCard/NavCard";

// getUser returns the user object
export default function HubPage({getUser}) {

  let recentItems = [
    {
      type: "Incomes",
      name: "Work",
      amount: 2000,
      timestamp: "March 3rd, 2025",
    },
    {
      type: "Incomes",
      name: "Baby Sitting",
      amount: -100,
      timestamp: "March 3rd, 2025",
    },
    {
      type: "Expenses",
      name: "Bills",
      amount: 1500,
      timestamp: "March 3rd, 2025",
    },
    {
      type: "Budgets",
      name: "Wedding",
      amount: 1000,
      timestamp: "March 3rd, 2025",
    },
  ];

  return (
    <div>
      <Navbar position="fixed" loggedIn="true"></Navbar>

      <div className={styles.pageVertical}>
        <div className={styles.pageHorizontal}>
          <div className={styles.leftSideContainer}>
            <h1>Welcome Back,</h1>
            <h2>{getUser().username}</h2>

            <div className={styles.NavCardsWrapper}>
              <NavCard></NavCard>
              <NavCard></NavCard>
              <NavCard></NavCard>
              <NavCard></NavCard>
            </div>
          </div>
          <div className={styles.recentTableContainer}>
            <div className={styles.recentTopSection}>
              <h1 className={styles.recentTitle}>Recent Activity</h1>
            </div>
            <div className={styles.recentBottomSection}>
              {recentItems.map((item) => {
                let itemColor;
                if (item.type == "Incomes")
                  itemColor = "var(--background-color-2)";
                else if (item.type == "Expenses")
                  itemColor = "var(--background-color-3)";
                else itemColor = "var(--background-color-5)";

                return (
                  <div className={styles.recentItem}>
                    <div className={styles.itemTopSection}>
                      <div
                        className={styles.itemTitleWrapper}
                        style={{ "background-color": itemColor }}
                      >
                        {item.type}
                      </div>
                      <p className={styles.itemTimestamp}>{item.timestamp}</p>
                    </div>
                    <div className={styles.itemBottomSection}>
                      {item.amount > 0 ? "Added" : "Removed"} {item.name}:{" "}
                      <span
                        style={{
                          color:
                            item.amount > 0 ? "var(--green-1)" : "var(--red-1)",
                        }}
                      >
                        {item.amount > 0 ? "+" : ""}{item.amount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
