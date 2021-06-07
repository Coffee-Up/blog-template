// We need a js file to use variables theme in our css (css in js ), SASS is not good for debugging , light css in js  + css is better
import { css } from "styled-components";
import theme from "../theme";

const globalThemeTags = css`
  html {
    font-size: 22px;
    font-family: "Inter Variable";
  }

  body {
    font-size: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  h2 {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  h3 {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  h4 {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
  p {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    animation: mouseOnAnchorTag 0.2s ease-out forwards;
  }

  li {
    font-size: 1rem;
  }

  span {
    font-weight: var(--font-weight-spans);
  }

  button {
    border-radius: ${theme.borderRadius.buttons.xl};
  }

  hr {
    margin: 0;
  }

  /*---------------------------------------------------------------------------*/
  // Placeholders
  ::-webkit-input-placeholder {
    font-size: 1rem;
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 1rem;

    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 1rem;

    text-align: center;
  }

  :-ms-input-placeholder {
    font-size: 1rem;

    text-align: center;
  }
  /*---------------------------------------------------------------------------*/
  /* MEDIA QUERIES */
  @media screen and (max-width: 600px) {
    html {
      /* Gives me the power to adjust generaly the size of tags (less spaguetty code) */
      font-size: 18px;
    }
    a:hover {
      animation: none;
    }
  }
`;

export default globalThemeTags;
