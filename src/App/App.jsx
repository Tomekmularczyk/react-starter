import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) => (
  <div className="App">
    FUCK YEAH, REACT
    <br/>
    <img src="/static/company-logo.png"/>
    <Link to="/notknown">Go to 404 page</Link>
  </div>
);

export default App;