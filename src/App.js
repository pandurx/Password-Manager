//https://mui.com/material-ui/getting-started/usage/
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };
  
  handleClick = buttonName => {
    console.log('handle click!')
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
   
          <Button variant="contained">Hello World</Button>
      

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
