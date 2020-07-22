import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';
import { TextField } from './TextField';
 
function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <TextField text="hello" person={{ firstName: "", lastName: "" }} 
          handleChange={e => {
            e.
          }}/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
