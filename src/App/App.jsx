import React from 'react';
import { Link } from 'react-router-dom';
import welcome from 'static/welcome.png';

const App = () => (
  <div class="App">
    <img src={welcome} alt="welcome" />
    <Link to="/notknown">Go to 404 page</Link>
    <style jsx>{`
      .App {
        img {
          display: block;
          margin-top: 25px;
        }
      }
    `}</style>
  </div>
);

export default App;
