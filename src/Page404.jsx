import React from 'react';
import { colors } from 'data/theme';

const Page404 = ({ location }) => (
  <div class="Page404">
    <h3>No match for <code>{location.pathname}</code></h3>
    <style jsx>{`
      .Page404 {
        display: flex;

        h3 {
          background-color: ${colors.themeGreen};
        }
      }
    `}</style>
  </div>
);

export default Page404;