import React from 'react';
import PropTypes from "prop-types";

const PortfolioDetailsThumb = ({images, title}) => {
    return (
        <div className="portfolio-details-image mb-sm-30 mb-xs-30">
            <iframe
      className="youtube-video"
      src={`https://www.youtube.com/embed/${images[0]}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
    );
};

PortfolioDetailsThumb.propsType = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default PortfolioDetailsThumb;
