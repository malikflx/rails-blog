import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Mailto from "../Buttons/Mailto";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social-icons">
        <Link to="https://x.com/_malikfelix">
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
        <Link to="https://linkedin.com/in/malikfelix/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link to="https://github.com/malikflx">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link to="https://instagram.com/_malikfelix/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Mailto
          mailto="mailto:malikfelix50@gmail.com"
          label={<FontAwesomeIcon icon={faEnvelope} />}
        />
      </div>
    </div>
  );
};

export default Socials;
