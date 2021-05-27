import { css } from "styled-components";

const globalTags = css`
  html {
    font-size: 18px;
  }

  body {
    font-family: "Montserrat Regular";
  }

  a {
    font-size: 1.1rem;
    text-decoration: none;
  }

  h1 {
    font-family: "Fira Code SemiBold";
    font-weight: 500;
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
    padding: 1rem 0;
  }

  h2 {
    font-family: "Fira Code Regular";
    font-weight: 500;
    font-size: 1.3rem;
    padding: 1rem 0;
  }

  h3 {
    font-family: "Fira Code Regular";
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  p {
    color: black;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
  }

  span {
    font-family: "Montserrat Bold";
  }
`;

export default globalTags;
