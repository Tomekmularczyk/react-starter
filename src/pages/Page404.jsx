import React from "react";
import styled from "styled-components";
import { Location, Link } from "@reach/router";
import { colors } from "services/theme";

const H3 = styled.h3`
  background-color: ${colors.primary};
`;

const Page404 = () => (
  <section>
    <H3>
      No match for
      <Location>{({ location }) => <code> {location.pathname}</code>}</Location>
    </H3>
    <Link to="/">Go back</Link>
  </section>
);

export default Page404;
