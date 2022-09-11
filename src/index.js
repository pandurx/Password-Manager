import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './react/App';
import * as serviceWorker from './serviceWorker';

import reportWebVitals from './reportWebVitals';
// import Emails from './routes/emails';
// import Socials from './routes/socials'
// import Social from './routes/social';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('index.js')
root.render(
  <App />
);
//ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();


/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="emails" element={<Emails />} />
        <Route path="socials" element={<Socials />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":socialId" element={<Social />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter> */
