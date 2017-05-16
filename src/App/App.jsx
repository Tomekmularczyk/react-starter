import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div class="App">
    FUCK YEAH, REACT
    <br/>
    <img src="/static/company-logo.png" alt=""/>
    <Link to="/notknown">Go to 404 page</Link>
  </div>
);

export default App;