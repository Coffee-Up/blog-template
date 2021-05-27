import * as React from "react";
import "../styles/ComponentTagSymbol.css";
import { IconLearning } from "../assets/icons";

export default function TagSymbol({ id, tagName }) {
  return <div id={id}>{tagName === "learning" && <IconLearning />}</div>;
}
