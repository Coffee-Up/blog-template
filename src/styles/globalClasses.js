import { css } from "styled-components";

const globalClasses = css`
  .g-mask-image-circular {
    position: relative;
    width: 50px;
    height: 50px;
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

  .g-unbold-text-secondary-font {
    font-family: "Montserrat Regular";
  }

  .g-hover-animation-item:hover {
    cursor: pointer;
    background-color: #f9f1df;
    animation: mouseHoverAnimation 0.2s ease-out forwards;
  }
  // GATSBY
  .gatsby-image-wrapper {
    max-height: 100%;
  }
`;

export default globalClasses;
