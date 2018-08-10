import React, { Component } from 'react';

import logo from './logo.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider} from "react-redux";
import { store } from "./_helpers/store";

import HomePage from "./HomePage"

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Vaporware" />
        </header>
        <main>
          <Provider store={store}>
            <HomePage className="home-container"/>
          </Provider>
        </main>
      </div>
    );
  }
}
