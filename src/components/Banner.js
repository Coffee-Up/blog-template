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
      fillColorSVG,
      bannerTitle,
    } = this.props;

    const img = getImage(binaryImageDefault);
    // We can't destructure object from postData has it is undefined in normal pages
    return (
      <div
        id={
          postData?.main_tag
            ? `banner-container-${postData.main_tag}-color`
            : "banner-container-main-color"
        }
        className="banner-container"
      >
        <div id="banner-text-container">
          {bannerTitle && <h1>{bannerTitle}</h1>}
          {postData?.title && <h1>{postData.title}</h1>}
          {postData?.timeToRead && <p>{postData.timeToRead} minutes read</p>}
        </div>
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
