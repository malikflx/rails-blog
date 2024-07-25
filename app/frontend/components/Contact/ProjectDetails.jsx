import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = ({ formData, handleChange }) => {
  return (
    <>
      <label>What are your budget expectations for this project?</label>
      <select name="budget" value={formData.budget} onChange={handleChange}>
        <option value="Select a budget range">Select a budget range</option>
        <option value="Less than $1,000">Less than $1,000</option>
        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
        <option value="50,000 - $10,000">$5,000 - $10,000</option>
        <option value="$10,000+">$10,000+</option>
      </select>

      {formData.budget === "Less than $1,000" && (
        <div className="field-notice">
          <FontAwesomeIcon className="exclamation" icon={faCircleExclamation} />
          <p>
            Creating a custom solution within this budget might be challenging,
            but I still encourage you to share your project details. I&apos;m
            committed to guiding you in the right direction and can recommend
            alternatives to a custom solution or trusted professionals who can
            help meet your needs.
          </p>
        </div>
      )}

      <label>When do you need this project completed?</label>
      <select name="timeline" value={formData.timeline} onChange={handleChange}>
        <option value="Select a project completion time">
          Select a project completion time
        </option>
        <option value="Less than 1 month">Less than 1 month</option>
        <option value="1-3 months">1-3 months</option>
        <option value="3-6 months">3-6 months</option>
        <option value="6+ months">6+ months</option>
      </select>

      {formData.timeline === "Less than 1 month" && (
        <div className="field-notice">
          <FontAwesomeIcon className="exclamation" icon={faCircleExclamation} />
          <p>
            If you need this project completed in less than a month, immediate
            availability may be limited. However, I&apos;d love to discuss your
            needs further to confirm availability. Please note that a 20%
            expedited service fee may apply in these cases.
          </p>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
