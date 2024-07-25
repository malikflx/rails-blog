import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from "~/components/Buttons/PrimaryButton.jsx";
import SecondaryButton from "~/components/Buttons/SecondaryButton.jsx";
import './Snapshot.css';

const Snapshot = () => {
  return (
    <div className="snapshot">
      <div className="snapshot-title">
        <h2>Software Engineer and Designer based in the Chicago area</h2>
      </div>
      <div className="snapshot-subtitle">
        <h3>Providing solutions through technology since 2014</h3>
      </div>
      <div className="snapshot-description">
        <p>
          I&apos;m a Software Engineer based in the Greater Chicago Area. Before
          starting in software engineering and web development, I worked as an
          IT Specialist solving complex technical solutions to clients at large
          institutions like EY, Pepsi, and Deutsche Bank.
        </p>
        <p>
          After my studies in Software Engineering, I brought my talents to the
          tech industy where I help build and maintain enterprise applications
          and provide guidance on technical product initiatives.
        </p>
        <p className="spotlight-quote">
          Thankfully, my client centric approach combined with my talents in
          software engineering makes me an excellent freelance web developer.
        </p>
        <p>
          I now use my skillst to help businesses, small and large, elevate
          their digital brand and user experience.
        </p>
      </div>
      <div className="snapshot-cta">
        <Link to="/contact">
          <PrimaryButton className="snapshot-cta-button primary">
            Get in Touch
          </PrimaryButton>
        </Link>
        <Link to="/about">
          <SecondaryButton className="snapshot-cta-button">
            See More
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Snapshot;
