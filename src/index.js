import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import * as firebase from 'firebase'
import Routers from './Route'

var config = {
  apiKey: "AIzaSyDx-yeGlXTz8q6Gb-Mm7R3Op8JHYbkAqQo",
  authDomain: "bloodbank-cmad.firebaseapp.com",
  databaseURL: "https://bloodbank-cmad.firebaseio.com",
  projectId: "bloodbank-cmad",
  storageBucket: "bloodbank-cmad.appspot.com",
  messagingSenderId: "328442220597"
};
firebase.initializeApp(config);

ReactDOM.render(<Router>
  <div>
    {/* <Route exact path="/" component={App} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/Main" component={Main} /> */}
    <Routers />
    {/* <Route exact path="/about" component={About} /> */}
    {/* <Route path="/detail/:id" component={Details} /> */}
  </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
