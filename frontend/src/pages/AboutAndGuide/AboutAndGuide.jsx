import styles from "./AboutAndGuide.module.css"
import Navbar from "../../components/Navbar/Navbar"
export default function AboutAndGuide(props) {
    return (
        <div className={styles.pageContent}>
            <Navbar position="fixed"></Navbar>

            
            <div className={styles.page}>
                <div className={styles.pageBox}>
                    <div className={styles.sideNav}>
                        <button>
                            About
                        </button>
                        <button>
                            Guide
                        </button>
                    </div>

                    <div className={styles.contentWrapper}>
                        <Show when={props.url == "about"}>
                            <div>
                                content2
                            </div>
                        </Show>
                        <Show when={props.url == "guide"}>
                            <div>
                                content
                            </div>
                        </Show>

                    </div>
                </div>
            </div>
            
        </div>
    )
}