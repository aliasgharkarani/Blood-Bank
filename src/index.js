import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp';



ReactDOM.render(<Router>
    <div>
      {/* <App /> */}
      <Route exact path="/" component={App} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/Main" component={Main} />
      <Route exact path="/SignUp" component={SignUp} />

    
      {/* <Route exact path="/about" component={About} /> */}
      {/* <Route path="/detail/:id" component={Details} /> */}
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
