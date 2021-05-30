import * as React from "react";
import "../styles/ComponentWave.css";

const Wave = ({ orientation, fillColorSVG }) => {
  return (
    <div
      style={
        orientation === "top"
          ? { paddingTop: "4.1em", bottom: 0 }
          : { paddingTop: "3em", top: 0 }
      }
      id="wave-container"
    >
      <div
        id="wave-inner"
        className={
          orientation === "top" ? "wave-top-reshaper" : "wave-bottom-reshaper"
        }
        style={
          orientation === "top"
            ? { transform: "matrix(1, 0, 0, -1.3, 0, 0)" }
            : { bottom: 0 }
        }
      >
        <svg
          id="wave-svg"
          height="70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 14"
          aria-hidden="true"
          focusable="false"
          preserveAspectRatio="none"
        >
          <path fill={fillColorSVG} id="wave-svg-path">
            <animate
              attributeName="d"
              values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;
              M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;
              M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;
              M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;
              M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;
              M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
              repeatCount="indefinite"
              dur="25s"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Wave;
