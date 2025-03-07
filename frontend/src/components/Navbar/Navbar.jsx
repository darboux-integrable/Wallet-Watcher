import styles from "./Navbar.module.css";
import logo from "../../assets/Icon.svg";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";
import profilePic from "../../assets/images/adampfp.webp";
import notificationBell from "../../assets/images/notifications.svg"

import { createSignal, Show} from "solid-js";

export default function Navbar(props) {
  let unreadNotifs = 0;
  
  function routeTo(page) {
    location.replace(`/${page}`);
  }

  const [image, setImage] = createSignal(sun);

  let notificationsContainer;
  

  return (

    <nav className={styles.navbar} style={{"position": props.position}}>
      <div className={styles.navLeft}>
          <div className={styles.navTitleWrapper} onClick={() => routeTo("")}>
            <img src={logo} alt="Logo" className={styles.navLogo} />
            <h1 className={styles.navTitle}>Wallet Watcher</h1>
          </div>
      </div>

      <div className={styles.navRight}>

        <button className={styles.navUnderlineButton} onclick={() => routeTo("about")}>
            About
        </button>
        <button className={styles.navUnderlineButton} onclick={() => routeTo("guide")}>
            Guide
        </button>

        <Show when={!props.loggedIn}>
          <button className={styles.navLoginButton} onclick={() => routeTo("login")}>
            Login
          </button>
        </Show>
        <Show when={props.loggedIn}>

          {/** Adam fix, pull notifications, pfp name, pfp image from db and set */}
          <div className={styles.profileNotificationsWrapper}>
            
            <Show when={100 > unreadNotifs && unreadNotifs > 0}>
              <p>{unreadNotifs}</p>
            </Show>
            <Show when={unreadNotifs > 99}>
              <p>!</p>
            </Show>
            
            
            <img className={styles.profileNotifications} src={notificationBell} />
            
          </div>

            <h2 className={styles.profileName}>Profile Name</h2>
            <img className={styles.profilePic} src={profilePic} />
        </Show>
        <img onclick={() => {
            let newImage = image() == sun ? moon : sun;
            setImage(newImage);
        }} src={image()} className={styles.navTheme} alt="☀️"/>

      </div>
    </nav>
  );
}
