import * as React from "react";
import "../styles/ComponentBanner.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Wave } from ".";

// TO DO: I have transfromed it to use as react component to make a transition behaviour, with some magic it works without the class
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationTransition: "" };
  }
  componentDidMount() {
    this.setState({ animationTransition: "animation: transitionOpacity 1s" });
  }

  render() {
    const {
      binaryImageDefault,
      postData,
      defaultBanner,
      backgroundColor,
      fillColorSVG,
    } = this.props;

    const img = getImage(binaryImageDefault);

    return (
      <div
        style={{ backgroundColor: `${backgroundColor}` }}
        id="banner-container"
      >
        {defaultBanner && (
          <GatsbyImage
            style={{ animation: `${this.state.animationTransition}` }}
            className={this.state.className}
            draggable={false}
            image={img}
            alt="a changer"
          />
        )}
        {postData && (
          <GatsbyImage
            className={this.state.className}
            draggable={false}
            image={postData.imageBinary}
            alt="a changer"
          />
        )}
        <Wave fillColorSVG={fillColorSVG} orientation="top" />
      </div>
    );
  }
}

export default Banner;
