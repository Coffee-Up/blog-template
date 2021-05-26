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

  .g-bold-text-primary-font {
    font-family: "Montserrat Bold";
  }

  .g-hover-animation-item:hover {
    cursor: pointer;
    background-color: #f9f1df;
    animation: mouseHoverAnimation 0.2s ease-out forwards;
  }
`;

export default globalClasses;
