/* We need a js file to use variables theme in our css (css in js ), SASS is not good for debugging , light css in js  + css is better */
import { css } from "styled-components";
import theme from "../theme";

const globalClasses = css`
  .g-mask-image-circular {
    position: relative;
    height: 74.5px;
    overflow: hidden;
    border-radius: 50%;
  }
  .g-mask-image-circular:img {
    width: 100%;
    height: auto;
  }

  .g-mask-image-rectangular {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 6%;
  }

  .g-hover-animation-logo:hover {
    animation: scaling 0.2s ease-out forwards;
  }

  .g-hover-logo-fill-color:hover > .logo-path-to-fill {
    animation: mouseOnLinkSVG 0.2s ease-out forwards;
  }
  /* GATSBY */
  .gatsby-image-wrapper {
    max-height: 100%;
  }

  /*AVATAR */
  .g-avatar-image {
    /* Img is not center on with the mask (not rounded mask) */
    margin-bottom: 1.6rem;
  }

  .g-clickable-image:hover {
    animation: mouseOnImage 0.2s ease-out forwards;
  }
  /* WAVE */
  .g-wave-svg-path-colored {
    fill: ${theme.colors.svgPathColored};
  }

  .g-wave-svg-path-transparent {
    fill: ${theme.colors.svgPathTransparent};
  }

  /*---------------------------------------------------------------------------*/
  /* MEDIA QUERIES */
  @media screen and (min-width: 900px) {
    .g-hover-animation-item:hover {
      cursor: pointer;
      background-color: #f9f1df;
      animation: cardMovingUp 0.2s ease-out forwards;
    }
  }
`;

export default globalClasses;
