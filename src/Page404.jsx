import React from 'react';
import PropTypes from 'prop-types';
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

Page404.propTypes = {
  location: PropTypes.object,
};

export default Page404;