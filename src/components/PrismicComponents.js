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
  textSize,
  imgWidth,
  logo,
}) => {
  return (
    <div
      className={`prismic-one-image-one-texte prismic-one-image-one-texte-${textePosition.toLowerCase()}`}
    >
      <div className={`prismic-one-image-one-texte-image-container `}>
        <div style={{ width: imgWidth }}>
          <GatsbyImage
            className={` g-image-box-shadow logo-${logo}`}
            alt={alt}
            draggable={false}
            image={getImage(prismicDataImage)}
          />
        </div>
        {logo && (
          <IconCHR
            width="50"
            style={{ position: "absolute,bottom: '0', righ:'0'" }}
          />
        )}
      </div>
      <div
        className={`prismic-one-image-one-texte-texte-${textSize.toLowerCase()} prismic-one-image-one-texte-${textePosition.toLowerCase()}-texte`}
      >
        <RichText render={prismicDataTexte} />
      </div>
    </div>
  );
};

export { OneImageOneTexte };
