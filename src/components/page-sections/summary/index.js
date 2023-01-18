import * as React from "react";
import DFTLogo from "../../../images/DFT-logo.png";
import ECHELONLogo from "../../../images/ECHELON-logo.jpeg";
import ImageSlider from "../../objects/image-slider";
import { navigate } from 'gatsby';

const Summary = () => {

  const viewContactPage = () => {
    navigate('/contact');
  };

  return (
    <section className="rs-summary rs-section-w rs-section-w--pad" id="rsSummary">
      <div className="row">
        <div className="rs-summary__left col-xs-12 col-md-6 order-2 order-md-1">
          <div className="mt-4">
            <h1 className="rs-summary__title">
              Smart route planning for efficient and sustainable last mile
              deliveries
            </h1>
            <p className="mt-md-3 mb-md-5 rs-summary__desc">
              RouteSonar helps you improve your on road efficiency by more than
              20% while enabling you to accommodate more orders.
            </p>
            <div className="pb-5 rs-summary__action-wrapper">
              <a href="https://beta.routesonar.com" className="rs-link rs-link--bg-variant rs-link--lg mt-4 d-flex align-items-center" target="_blank" rel="noreferrer">
                Get Started
                <span className="material-icons rs-link__icon">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
          <div className="rs-featured">
            <h6>Featured on</h6>
            <a href="https://www.ft.lk/business/Logistics-start-up-RouteSonar-helps-firms-maximise-returns-on-fleet-management/34-737719" target="_blank" rel="noopener noreferrer">
              <picture>
                <img
                  src={DFTLogo}
                  loading="lazy"
                  alt="profile"
                  className="rs-featured__logo"
                />
              </picture>
            </a>
            <a href="https://economynext.com/brand_voice/routesonar-solving-the-multi-stop-logistics-puzzle/" target="_blank" rel="noopener noreferrer">
              <picture>
                <img
                  src={ECHELONLogo}
                  alt="profile"
                  className="rs-featured__logo"
                />
              </picture>
            </a>
          </div>
        </div>
        <div className="rs-summary__right offset-lg-1 col-md-6 col-lg-5 order-1 order-md-2">
          <ImageSlider></ImageSlider>
        </div>
      </div>
    </section>
  );
};
export default Summary;
