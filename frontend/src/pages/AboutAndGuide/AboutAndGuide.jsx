import styles from "./AboutAndGuide.module.css"
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
                                Guide
                            </button>
                        </Show>
                        <Show when={props.url == "guide"}>
                            <button className={styles.notSelectedNav} onClick={() => routeTo("about")}>
                                About
                            </button>
                            <button className={styles.selectedNav}>
                                Guide
                            </button>
                        </Show>
                    </div>


                    <div className={styles.contentWrapper}>
                        <Show when={props.url == "about"}>
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

                                <p className={styles.aboutDescription}>
                                    We're two highschool juniors who have a passion in the world of computer science. With this project, we wanted to take our knowledge of programming above and beyond. Therefore, we used SolidJS as our frontend, and FastAPI as our backend.
                                </p>
                                <p className={styles.aboutDescription}>
                                    This project was made for our Intern Computer Science / Business class as our 1st quarter project. This specific instance of this project is a remake of the project to look more professional.
                                </p>
                            </div>
                        </Show>

                        <Show when={props.url == "guide"}>
                        <div>
                                <h1 className={styles.contentTitle}>
                                    Quickstart Guide:
                                </h1>
                                <ol>
                                    <li>Login or Sign-up
                                        
                                        <h1>P</h1>
                                    </li>
                                    <li>Create incomes
                                        
                                        <h1>P</h1>
                                    </li>
                                    <li>Create expenses
                                        
                                        <h1>P</h1>
                                    </li>
                                    <li>Track your balance
                                        
                                        <h1>P</h1>
                                    </li>
                                </ol>
                                

                            </div>
                        </Show>

                    </div>
                </div>
            </div>
            
        </div>
    )
}