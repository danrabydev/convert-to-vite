import "./App.css";
import Logo from "./logo.svg?react";
import "./index.css";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" desc="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {import.meta.env.VITE_TEST_VAR}
        </a>
      </header>
    </div>
  );
}
