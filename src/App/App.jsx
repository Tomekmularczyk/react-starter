import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div class="App">
        YEAH, REACT
        <img src="/static/company-logo.png" alt=""/>
        <Link to="/notknown">Go to 404 page</Link>
        <style jsx global>{`
          .App {
            & img {
              margin-top: 25px;
            }
          }
        `}</style>
      </div>
    );
  }
}