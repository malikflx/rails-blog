import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import SecondaryButton from "~/components/Buttons/SecondaryButton.jsx";

const Work = () => {
  const PureVibez = '/assets/pure-vibez-screen.png'
  const AwdcLanding = '/assets/awdc-logo-lower-spaced-no-background.png'

  return (
    <div className="work">
      <h2 className="work-title">Work</h2>
      <div className="work-container">
        <div className="selected-work">
          <div className="work-item pv-image">
            <img src={PureVibez} alt="pure-vibez-logo" />
            <div className="content pv-content">
              <h3>Pure Vibez</h3>
              <p>Website for a bartending & catering service</p>
              <Link to="https://purevibez.netlify.app/">
                <SecondaryButton className="work-button">
                  Visit Website
                </SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="work-subheading">
            <Link to="https://purevibez.netlify.app/">
              <h3>Pure Vibez</h3>
              <p>Website | 1st Iteration</p>
            </Link>
          </div>
        </div>
        <div className="selected-work">
          <div className="work-item awdc-image">
            <img src={AwdcLanding} alt="awdc-landing-page-thumbnail" />
            <div className="content awdc-content">
              <h3>A Web Development Company (Landing Page)</h3>
              <p>Landing Page for an upcoming agency</p>
              <Link to="https://awdc.netlify.app/">
                <SecondaryButton className="work-button">
                  Visit Website
                </SecondaryButton>
              </Link>
            </div>
          </div>
          <div className="work-subheading">
            <Link to="https://awdc.netlify.app/">
              <h3>A Web Development Company</h3>
              <p>Website | Landing Page</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
