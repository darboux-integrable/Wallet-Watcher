import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Router } from '@solidjs/router';
import { createSignal, lazy, createEffect } from 'solid-js';
import { render } from 'solid-js/web';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginAndSignUp from './pages/LoginAndSignUp/LoginAndSignUp';
import AboutAndGuide from "./pages/About/About"

const HubPage = lazy(() => import ("./pages/HubPage/HubPage"))

function App() {
  const [user, setUser] = createSignal();

  createEffect(() => {
    console.log(user());
  })

  return (
    <Router>
      <Route path="/" component={() => <LandingPage></LandingPage>}></Route>
      <Route path="/login" component={() => <LoginAndSignUp pageType={"login"} setUser={setUser}/>}></Route>
      <Route path="/signup" component={() => <LoginAndSignUp pageType={"signup"} setUser={setUser}/>}></Route>
      <Route path="/hub" component={() => <HubPage getUser={user}/>}></Route>
      <Route path="/about" component={() => <AboutAndGuide url="about"></AboutAndGuide>}></Route>

    </Router>
  );
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root);
