import styles from "./LoginAndSignUp.module.css";
import { createSignal, Show } from "solid-js";
import Input from "../../components/Input/Input";
import { checkFilled } from "../../helpers/checkFilled.js";
import Navbar from "../../components/Navbar/Navbar";

export default function LoginAndSignUp({ pageType, setUser }) {
  const [firstName, setFirstName] = createSignal("");
  const [lastName, setLastName] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [email, setEmail] = createSignal("");

  const [error, setError] = createSignal("");

  const signUpUser = async () => {
    if (
      !checkFilled(firstName(), lastName(), username(), email(), password())
    ) {
      setError("Not all Inputs Have Been Filled.");
      return;
    }

    // Adam's code is shit
    const signInFetch = await fetch(`http://127.0.0.1:5000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName(),
        last_name: lastName(),
        username: username(),
        email: email(),
        password: password(),
      }),
    });

    const userData = await signInFetch.json();

    if (signInFetch.ok) {
      setUser(userData);
    } else {
      setError(userData.detail);
    }
  };

  const loginUser = async () => {
    if (!checkFilled(username(), password())) {
      setError("Not all Inputs Have Been Filled.");
      return;
    }

    const userFetch = await fetch(
      `http://127.0.0.1:5000/users/?username=${encodeURIComponent(
        username()
      )}&password=${encodeURIComponent(password())}`
    );

    const userData = await userFetch.json();

    if (userFetch.ok) {
      setUser(userData);
    } else {
      setError(userData.detail);
    }
  };

  return (
    <div className={styles.pageContent}>
      <Navbar position="fixed"></Navbar>

      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          {/* Page inputs for sign up */}
          <h1 className={styles.title}>
            {pageType == "signup" ? "Sign Up" : "Login"}
          </h1>
          <div className={styles.allInputs}>
            <Show when={pageType == "signup"}>
              <div className={styles.inputsWrapper}>
                <Input
                  value={firstName}
                  setValue={setFirstName}
                  title="First Name"
                ></Input>
                <Input
                  value={lastName}
                  setValue={setLastName}
                  title="Last Name"
                ></Input>
              </div>
              <Input
                value={username}
                setValue={setUsername}
                title="Username"
              ></Input>
              <Input value={email} setValue={setEmail} title="Email"></Input>
              <Input
                value={password}
                setValue={setPassword}
                title="Password"
              ></Input>
            </Show>
            <Show when={pageType == "login"}>
              <Input value={username} setValue={setUsername} title="Username" />
              <Input value={password} setValue={setPassword} title="Password" />
            </Show>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              className={styles.doneButton}
              onclick={() => {
                pageType == "signup" ? signUpUser() : loginUser();
              }}
            >
              {pageType == "signup" ? "Sign Up" : "Login"}
            </button>
          </div>
          <div className={styles.togglePagesWrapper}>
            <p className={styles.otherPageText}>
              {pageType == "signup"
                ? "Already Have an Account?"
                : "Don't Have an Account?"}
            </p>
            <button
              className={styles.togglePageButton}
              onclick={() => {
                const otherPage = pageType == "signup" ? "login" : "signup";
                location.replace(`/${otherPage}`);
              }}
            >
              {pageType == "signup" ? "Login" : "Sign Up"}
            </button>
          </div>
          <Show when={error() != ""}>
            <p className={styles.errorText}>{error()}</p>
          </Show>
        </div>
      </div>
    </div>
  );
}
