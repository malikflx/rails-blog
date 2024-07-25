import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SecondaryButton from "~/components/Buttons/SecondaryButton.jsx";
import Review from "~/components/Review/Review.jsx";
import CtaSection from "~/Layouts/CTASection/CTASection.jsx";
import Testimonial from "~/Layouts/Testimonial/Testimonial.jsx";
import './About.css';
import {
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSquarespace,
  faWix,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PrimaryButton from "~/components/Buttons/PrimaryButton.jsx";

const About = () => {
  const BioImage = 'assets/portfolio_avi_white.png';

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-hero">
          <div className="about-intro">
            <p className="spotlight-quote">
              Driven by curiosity, powered by code.
            </p>
            <p>
              I&apos;m passionate about Front End Development and UI Design,
              creating functional, visually appealing websites and web apps with
              HTML, CSS, JavaScript, React, Node.js, and Ruby on Rails.
            </p>
            <div className="spotlight-buttons">
              <Link to="/contact">
                <SecondaryButton className="secondary">
                  Get in Touch
                </SecondaryButton>
              </Link>
              <a
                href="/Malik_Felix_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton className="primary">
                  Download Resume
                </PrimaryButton>
              </a>
            </div>
          </div>
          <div className="bio-image-container">
            <img src={BioImage} alt="malik-felix-headshot" />
          </div>
        </div>
        <div className="bio">
          <div className="bio-content">
            <p>
              I&apos;m a Software Engineer with a love for all things tech. Born
              and raised in Brooklyn, NY, I now call the Greater Chicago area my
              home. With over 10 years of experience in the technology industry,
              I&apos;ve had the pleasure of working with all sorts of companies,
              from Finance to Public Relations to SaaS companies.
            </p>
            <p>
              When I&apos;m not coding, you can find me mentoring others both on
              and off the court.
              <p className="spotlight-quote">
                I believe in helping people reach their full potential, and
                nothing makes me happier than seeing others succeed.
              </p>
              In my free time, I love hanging out with family and friends,
              trying out different types of whiskey, and defrazzling with some
              good old-fashioned video games.
            </p>
            <p>
              I&apos;m also a city person at heart, and I love exploring new
              places and seeing what other cities have to offer. So, that&apos;s
              a bit about me! If you&apos;re interested in working together or
              just want to chat about tech, feel free to drop me a line.
              I&apos;m always up for a good conversation!
            </p>
          </div>
        </div>
        <Testimonial>
          <Review
            quoteParts={[
              'It was an absolute pleasure working with Malik Felix on my business project. ',
              ' Malik has great communication skills.  He addressed all my concerns and updated me on the progression of my project.  His dedication to deliver quality work was highly noticeable.',
            ]}
            highlight="His professionalism and quality of work was executed throughout the whole process."
            clientName="Jamie F."
            clientTitle="Founder and CEO at Pure Vibez Bartending & Catering"
          />
        </Testimonial>
        <div className="skills">
          <div className="technology-stack">
            <h2>Development Tools</h2>
          </div>
          <p className="tech-description">
            I have experience with the following technologies:{' '}
          </p>
          <div>
            <div className="tech-items-group">
              <ul className="tech-items">
                <li className="t-item">
                  <FontAwesomeIcon icon={faHtml5} />
                  <p className="t-item-description">HTML5</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faCss3} />
                  <p className="t-item-description">CSS3</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faJs} />
                  <p className="t-item-description">JavaScript</p>
                </li>
              </ul>
              <ul className="tech-items">
                <li className="t-item">
                  <FontAwesomeIcon icon={faNode} />
                  <p className="t-item-description">NodeJs</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faReact} />
                  <p className="t-item-description">React</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faSquarespace} />
                  <p className="t-item-description">Squarespace</p>
                </li>
              </ul>
              <ul className="tech-items">
                <li className="t-item">
                  <FontAwesomeIcon icon={faWix} />
                  <p className="t-item-description">Wix</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faWordpress} />
                  <p className="t-item-description">Wordpress</p>
                </li>
                <li className="t-item">
                  <FontAwesomeIcon icon={faFigma} />
                  <p className="t-item-description">Figma</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CtaSection />
      </div>
    </div>
  );
};

export default About;
