import React from "react";
import Types from "prop-types";
import styled from "styled-components";
import { colors } from "services/theme";

const Container = styled.section`
  display: flex;
`;

const H3 = styled.h3`
  background-color: ${colors.primary};
`;

const Page404 = ({ location }) => (
  <Container>
    <H3>
      No match for
      <code>{location.pathname}</code>
    </H3>
  </Container>
);

Page404.propTypes = {
  location: Types.shape({
    pathname: Types.string
  }).isRequired
};

export default Page404;
