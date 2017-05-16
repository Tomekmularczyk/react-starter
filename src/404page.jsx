import React from 'react';

export default ({ location }) => (
  <div class="404page">
    <h3>No match for <code>{location.pathname}</code></h3>
    <style jsx>{`
      h3 {
        background-color: red;
      }
    `}</style>
  </div>
);