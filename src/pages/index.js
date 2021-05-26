import * as React from "react";
import styled from "styled-components";

import { Layout } from "../components";
import { PostsFilterWidget } from "../elements";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Div__Container>
        <P__BoldText>Hi, i'm Axel. </P__BoldText>
        <H1__Title>
          You will find posts about all my interests : science, programming, art
          & more.
          <br />
        </H1__Title>
        <PostsFilterWidget width="50%" />
      </Div__Container>
    </Layout>
  );
}

const Div__Container = styled.div`
  padding: 0 1.2em;

  @media (min-width: ${(props) => props.theme.breakpoints.smallest_pc}) {
    padding: 0 10em;
  }
`;

const H1__Title = styled.h1`
  /* h1 est set dans Layout en fira code SemiBold (trop gras) */
  font-family: "Montserrat Medium";
  font-weight: 200;
`;

const P__BoldText = styled.p`
  font-family: "Montserrat Bold";
  font-size: 1.8rem;
  font-weight: 600;
`;
