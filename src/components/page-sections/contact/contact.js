import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Contact = () => {

  return (
    <Container fluid="lg" className="rs-contact rs-section-w rs-section-w--pad rs-section-w--rounded" id="rsContact">
      <h2 className="text-center rs-contact__title">
        Make great things happen, <br /> E-Mail Us.
      </h2>
      <div className="d-flex justify-content-center">
        <a href="mailto:diaslalinda@gmail.com" className="mt-5 rs-email-link text-center">
          <span className="material-icons">email</span>
          <span className="rs-email-link__text">hello@routesonar.com</span>
        </a>
      </div>
    </Container>
  );
};
export default Contact;
