import styles from "./About.module.css"
import Navbar from "../../components/Navbar/Navbar"
import imageTyler from "../../assets/images/tylerpfp.jpg"
import imageAdam from "../../assets/images/adampfp.webp"

export default function AboutAndGuide(props) {
    function routeTo(page) {
        location.replace(`/${page}`);
    }

    return (
        <div className={styles.pageContent}>
            <Navbar position="fixed"  style={{ zIndex: 10 }}></Navbar>

            
            <div className={styles.page}>
                <div className={styles.pageBox}>
                    <div className={styles.sideNav}>
                        <Show when={props.url == "about"}>
                            <button className={styles.selectedNav}>
                                About
                            </button>
                            <button className={styles.notSelectedNav} onClick={() => routeTo("guide")}>
                                Other Works
                            </button>
                        </Show>
                       
                    </div>


                    <div className={styles.contentWrapper}>
                            <div>
                                <h1 className={styles.contentTitle}>
                                    About:
                                </h1>

                                <div className={styles.aboutImageFlex}>
                                    <div className={styles.aboutImageContent}>
                                        <img src={imageAdam} alt="Adam E" className={styles.selfImages}/>
                                        <div className={styles.belowImageBox}>
                                            <h2>Adam Evans</h2>
                                            <h2>Grade 11</h2>
                                        </div>
                                    </div>
                                    <div className={styles.aboutImageContent}>
                                        <img src={imageTyler} alt="Tyler R" className={styles.selfImages}/>
                                        <div className={styles.belowImageBox}>
                                            <h2>Tyler Robucci</h2>
                                            <h2>Grade 11</h2>
                                        </div>
                                    </div>
                                </div>
                                <h3 className={styles.aboutParagraphHeading}>
                                    Us Two:
                                </h3>
                                <p className={styles.aboutDescription}>
                                    We're two highschool juniors who have a passion for computer science. With this project, we wanted to take our knowledge of programming above and beyond. Therefore, we learned and used SolidJS as our frontend framework, and FastAPI as our backend.
                                </p>
                                <h3 className={styles.aboutParagraphHeading}>                
                                    Wallet Watcher:
                                </h3>
                                <p className={styles.aboutDescription}>
                                    Wallet Watcher is a project for the 1st quarter of our Intern Computer Science / Business class. This sspecific instance of the project is a remake of the original project to write cleaner code, and to improve the design.
                                </p>
                            </div>

                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}