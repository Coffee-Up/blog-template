// We need a js file to use variables theme in our css (css in js ), SASS is not good for debugging , light css in js  + css is better
import { css } from "styled-components";
import theme from "../theme";

const globalAnimations = css`
  /* Hover sur une card */
  @keyframes cardMovingUp {
    from {
      transform: scale(1);
      border-bottom: 1px black;
    }
    to {
      box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 16px,
        rgba(71, 63, 79, 0.16) 0px 8px 24px;
      position: relative;
      transform: scale(1.02);
      color: #8d4cd8;
    }
  }
  /* sur une image */
  @keyframes scaling {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
  /* Footer Wave  */
  @keyframes wavewaveMoving {
    0% {
      d: path("M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z");
    }

    50% {
      d: path("M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z");
    }

    100% {
      d: path("M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z");
    }
  }

  @keyframes mouseOnLinkSVG {
    from {
    }
    to {
      fill: ${theme.colors.hoverSvgLinks};
    }
  }

  @keyframes mouseOnAnchorTag {
    from {
    }
    to {
      color: ${theme.colors.hoverSvgLinks};
    }
  }

  @keyframes mouseOnImage {
    from {
    }
    to {
      filter: brightness(1.1);
    }
  }
`;

export default globalAnimations;
