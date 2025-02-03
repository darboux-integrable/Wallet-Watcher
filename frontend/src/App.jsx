import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Router } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginAndSignUp from './pages/LoginAndSignUp/LoginAndSignUp';

function App() {
  const [user, setUser] = createSignal();

  return (
    <Router>
      <Route path="/" component={() => <LandingPage></LandingPage>}></Route>
      <Route path="/login" component={() => <LoginAndSignUp pageType={"login"} setUser={setUser}/>}></Route>
      <Route path="/signup" component={() => <LoginAndSignUp pageType={"signup"} setUser={setUser}/>}></Route>

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
