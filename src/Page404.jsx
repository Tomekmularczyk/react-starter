import React from 'react';

const Page404 = ({ location }) => (
  <div class="Page404">
    <h3>No match for <code>{location.pathname}</code></h3>
    <style jsx>{`
      .Page404 {
        display: flex;

        h3 {
          background-color: red;
        }
      }
    `}</style>
  </div>
);

export default Page404;