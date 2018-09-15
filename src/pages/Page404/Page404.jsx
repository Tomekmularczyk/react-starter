import React from "react";
import Types from "prop-types";
import { colors } from "data/theme";

const Page404 = ({ location }) => (
  <div className="Page404">
    <h3>
      No match for
      <code>{location.pathname}</code>
    </h3>
    <style jsx>
      {`
        .Page404 {
          display: flex;

          h3 {
            background-color: ${colors.primary};
          }
        }
      `}
    </style>
  </div>
);

Page404.propTypes = {
  location: Types.shape({
    pathname: Types.string
  }).isRequired
};

export default Page404;
