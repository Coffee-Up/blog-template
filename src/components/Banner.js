import * as React from "react";
import "../styles/Banner.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Wave } from ".";

// TO DO: I have transfromed it to use as react component to make a transition behaviour, with some magic it works without the class. If i can make it a HOOK function
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
    // We can't destructure object from postData has it is undefined in normal pages
    return (
      <div
        style={{ backgroundColor: `${backgroundColor}` }}
        id="banner-container"
      >
        {postData?.title && postData?.timeToRead && (
          <div id="banner-text-container">
            <h1>{postData.title}</h1>
            {postData.timeToRead && <p>{postData.timeToRead} minutes read</p>}
          </div>
        )}
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
