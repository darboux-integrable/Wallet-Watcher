import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Router } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginAndSignUp from './pages/LoginAndSignUp/LoginAndSignUp';
import { lazy } from 'solid-js';
import AboutAndGuide from "./pages/AboutAndGuide/AboutAndGuide"

const HubPage = lazy(() => import ("./pages/HubPage/HubPage"))

function App() {
  const [user, setUser] = createSignal();

  return (
    <Router>
      <Route path="/" component={() => <LandingPage></LandingPage>}></Route>
      <Route path="/login" component={() => <LoginAndSignUp pageType={"login"} setUser={setUser}/>}></Route>
      <Route path="/signup" component={() => <LoginAndSignUp pageType={"signup"} setUser={setUser}/>}></Route>
      <Route path="/hub" component={() => <HubPage/>}></Route>
      <Route path="/about" component={() => <AboutAndGuide url="about"></AboutAndGuide>}></Route>
      <Route path="/guide" component={() => <AboutAndGuide url="guide"></AboutAndGuide>}></Route>

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
