import styles from "./Navbar.module.css";
import logo from "../../assets/Icon.svg";
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

import { createSignal } from "solid-js";

import { Show } from "solid-js";

export default function Navbar(props) {
  function routeTo(page) {
    // TODO Adam create routing for pages
    location.replace(`/${page}`);
  }

  const [image, setImage] = createSignal(sun);

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
            {/**
             * Notification Bell
             * User Image
             * User Icon
             * 
             */}
            <h1>Hello</h1>
        </Show>
        <img onclick={() => {
            let newImage = image() == sun ? moon : sun;
            setImage(newImage);
        }} src={image()} className={styles.navTheme} alt="☀️"/>

      </div>
    </nav>
  );
}
