//https://mui.com/material-ui/getting-started/usage/
//https://stackblitz.com/edit/github-agqlf5?file=src%2Fmain.jsx

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from '../shared/constants';
import MasterTemplate from './component/MasterTemplate';


class App extends Component {
  constructor(props) {
    console.log(window)
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    }
    // ipcRenderer.send(channels.APP_INFO);
    // ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    //   ipcRenderer.removeAllListeners(channels.APP_INFO);
    //   const { appName, appVersion } = arg;
    //   this.setState({ appName, appVersion });
    // });
  }

  render() {
    return (
      <MasterTemplate/>
    );
  }
}

export default App;