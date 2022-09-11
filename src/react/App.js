import React, { Component } from 'react';
import './App.css';
import MasterTemplate from './component/MasterTemplate';

class App extends Component {
  constructor(props) {
    console.log(window)
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    }
 
  }

  render() {
    return (
      <MasterTemplate/>
    );
  }
}

export default App;