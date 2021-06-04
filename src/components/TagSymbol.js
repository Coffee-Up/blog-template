import * as React from "react";
import "../styles/TagSymbol.css";
import { IconLearning } from "../assets/icons";

export default function TagSymbol({ tagName }) {
  return (
    <div className={`tag-symbol-container`}>
      {tagName === "learning" && <IconLearning />}
      <p>{tagName}</p>
    </div>
  );
}
