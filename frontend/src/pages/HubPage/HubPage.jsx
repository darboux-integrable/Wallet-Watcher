import styles from "./HubPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import NavCard from "../../components/NavCard/NavCard";

export default function HubPage() {
    let pfpName = "Profile name";

    return (
        <div>
            <Navbar position="fixed" loggedIn="true"></Navbar>
            
            <div className={styles.pageVertical}>
                <div className={styles.pageHorizontal}>
                    <div className={styles.leftSideContainer}>
                        <h1>
                            Welcome Back,
                        </h1>
                        <h2>
                            {pfpName}
                        </h2>

                        <div className={styles.NavCardsWrapper}>
                            <NavCard></NavCard>
                            <NavCard></NavCard>
                            <NavCard></NavCard>
                            <NavCard></NavCard>

                        </div>

                    </div>
                    <div className={styles.recentTableContainer}>
                        <h1>
                            Recent Activity
                            
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}