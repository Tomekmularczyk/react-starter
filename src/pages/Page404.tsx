import { Link, Location } from "@reach/router";
import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  background-color: red;
`;

interface IProps {
  default?: boolean;
}

// @ts-ignore
const Page404 = (props: IProps) => (
  <section>
    <H3>
      No match for
      <Location>{({ location }) => <code> {location.pathname}</code>}</Location>
    </H3>
    <Link to="/">Go back</Link>
  </section>
);

export default Page404;
