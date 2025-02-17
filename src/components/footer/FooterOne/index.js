import React from 'react';

const FooterOne = ({next, prev}) => {
    return (
        <div className="footer-section position-fixed section pt-30 pb-30">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="footer-copyright col-lg-4 col-12 order-lg-1 order-3">
                        <p>&copy; {new Date().getFullYear()} Nate Baker.  ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="col-lg-4 col-12 order-lg-2 order-1 mb-sm-15 mb-xs-15">
                        <div className="portfolio-slider-5-nav">
                            <button
                                type="button"
                                className="slick-prev slick-arrow"
                                onClick={prev}> prev
                            </button>
                            <button
                                type="button"
                                className="slick-next slick-arrow"
                                onClick={next}>next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterOne;
