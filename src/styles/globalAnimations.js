import { css } from "styled-components";

const globalAnimations = css`
  @keyframes mouseHoverAnimation {
    from {
      transform: scale(1);
      border-bottom: 1px black;
    }
    to {
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
        rgba(71, 63, 79, 0.16) 0px 8px 24px;
      position: relative;
      transform: scale(1.03);
    }
  }
`;

export default globalAnimations;
