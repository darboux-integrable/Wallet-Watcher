import styles from "./Footer.module.css";
import gitIcon from "../../assets/images/logo-github.svg";
export default function Footer() {
    return (
        <div className={styles.footer}>

            <div className={styles.footerCenter}>
                <h1 className={styles.footerLicence}>Provided under the <u>MIT Licence</u></h1>

                <div className={styles.footerGitLinks}>
                    <a className={styles.footerGitLink} href="https://github.com/darboux-integrable">
                        <img className={styles.footerGitIcon} src={gitIcon}/>
                        <h1>Adam E.</h1>
                    </a>

                    <h1 className={styles.footerGitSeparator}>|</h1>

                    <a className={styles.footerGitLink} href="https://github.com/140767652">
                        <img className={styles.footerGitIcon} src={gitIcon}/>
                        <h1>Tyler R.</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}
