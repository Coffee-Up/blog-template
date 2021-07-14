import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import "../styles/PrismicComponents.css";
import { IconCHR } from "../assets/icons";

const OneImageOneTexte = ({
  prismicDataTexte,
  prismicDataImage,
  textePosition,
  alt,
  size,
  logo,
}) => {
  return (
    <div
      className={`prismic-one-image-one-texte-${textePosition.toLowerCase()} prismic-one-image-one-texte-${size}`}
    >
      <div>
        <GatsbyImage
          className={`g-image-box-shadow logo-${logo}`}
          alt={alt}
          draggable={false}
          image={getImage(prismicDataImage)}
          alt={alt}
        />
        {logo && (
          <IconCHR style={{ position: "absolute,bottom: '0', righ:'0'" }} />
        )}
      </div>
      <div
        className={`prismic-one-image-one-texte-${textePosition.toLowerCase()}-texte`}
      >
        <RichText render={prismicDataTexte} />
      </div>
    </div>
  );
};

export { OneImageOneTexte };
