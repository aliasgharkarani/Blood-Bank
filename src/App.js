import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppBarr extends Component {
 
  render() {
    return (
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        </ul>
      <hr />
    </div>
    );
  }
}

export default AppBarr;
