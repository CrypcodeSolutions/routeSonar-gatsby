import * as React from "react";
import { Container } from "react-bootstrap";
import DoneIcon from '../../../../public/static/Done.svg';
import PricingIcon from '../../../images/pricing.svg';

const PricingPlans = () => {
  return (
    <Container fluid="lg" className="rs-pricing-plan rs-section-w rs-section-w--pad" id="rsPricingPlans">
      <h2 className="text-center">
        Simple Pricing
        <br /> for Everyone
      </h2>
      <p className="text-center">
        Pricing built for businesses of all sizes. <br /> Always know what
        you’ll pay.
      </p>
      <div className="row pt-5 rs-card-wrapper flex-row flex-nowrap">
        <div className="col-12 offset-sm-1 col-sm-5 offset-lg-2 col-lg-4 mb-4">
          <div className="rs-pricing-card">
            <img src={PricingIcon} alt="pricing plan 1" />
            <h4 className="pt-4">Pay for location usage</h4>
            <p>Get precise guidence to attract more customers</p>
            <ul className="pt-2 rs-card__list">
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$29</strong></div></li>
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>1,000 Locations</div></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-5 col-lg-4 mb-4">
          <div className="rs-pricing-card">
            <img src={PricingIcon} alt="pricing plan 1" />
            <h4 className="pt-4">Pay per vehicle per month</h4>
            <p>Get precise guidence to attract more customers</p>
            <ul className="pt-2 rs-card__list">
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>Starting at &nbsp;<strong>$39</strong></div></li>
              <li className="rs-card__list-item"><img src={DoneIcon} alt = 'Done Icon' /><div>With live tracking &nbsp;<strong>$49</strong></div></li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default PricingPlans;
