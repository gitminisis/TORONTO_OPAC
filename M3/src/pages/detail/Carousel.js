import ImageGallery from "react-image-gallery";
import React from "react";
import { extractData } from "../../services/m3";
import noImages from "../../assets/images/no-image.png";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    let rawData = this.props.data;
    let data = extractData(rawData.item);
    let images = data.media.filter((e) => e.type === "image");
    this.images =
      images.length > 0
        ? images.map((e) => {
            return {
              original: e.ref,
              thumbnail: e.ref,
              originalAlt: e.alt_text,
              thumbnailAlt: e.alt_text,
            };
          })
        : null;
  }

  render() {
    if (!this.images) {
      return (
        <div id="noImageCarousel">
          {" "}
          <img src={noImages} alt="No Image Available" />
        </div>
      );
    }
    return (
      <div id="detailCarousel">
        <ImageGallery showPlayButton={false} items={this.images} />
      </div>
    );
  }
}

export default Carousel;
