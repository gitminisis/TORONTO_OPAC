import ImageGallery from "react-image-gallery";
import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.images = [
      {
        original:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC04594_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
        thumbnail:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC04594_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg"
      },
      {
        original:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC05832_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
        thumbnail:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC05832_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg"
      },
      {
        original:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC00215_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg",
        thumbnail:
          "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2020/gt500/carbonfiber/DSC00215_2.jpg/_jcr_content/renditions/cq5dam.web.374.210.jpeg"
      }
    ];
  }

  render() {
    return (
      <div id="detailCarousel">
        <ImageGallery showPlayButton={false} items={this.images} />
      </div>
    );
  }
}

export default Carousel;
