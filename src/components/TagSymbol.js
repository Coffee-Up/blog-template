import * as React from "react";
import "../styles/TagSymbol.css";
import { IconLearning } from "../assets/icons";

export default function TagSymbol({ tagName }) {
  return (
    <div className={`tag-symbol-container tag-symbol-{tagName}`}>
      {tagName === "learning" && (
        <IconLearning classNameHerited="tag-symbol-learning" />
      )}
      <p>{tagName}</p>
    </div>
  );
}
