import styles from "./HubPage.module.css";
import Navbar from "../../components/Navbar/Navbar";

export default function HubPage() {
    return (
        <div>
            <Navbar position="fixed" loggedIn="true"></Navbar>
            
            <div className={styles.page}>
                <div>
                    
                </div>
            </div>

        </div>
    )
}