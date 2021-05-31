import * as React from "react";
import "../styles/TagSymbol.css";
import { IconLearning } from "../assets/icons";

export default function TagSymbol({ id, tagName }) {
  return <div id={id}>{tagName === "learning" && <IconLearning />}</div>;
}
