import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import PrimaryButton from "~/components/Buttons/PrimaryButton.jsx";
import SecondaryButton from "~/components/Buttons/SecondaryButton.jsx";
import "./ContactForm.css";
import ProjectDetails from "./ProjectDetails";

const ContactForm = () => {
  const Avatar = '/assets/malik_headshot.png'

  const form = useRef();
  const [formData, setFormData] = useState({
    projectType: "Select a project type",
    services: "Design Only",
    budget: "Select a budget range",
    timeline: "Select a project completion time",
    prompt: "",
    goals: "",
    additionalData: "",
    name: "",
    email: "",
    url: "",
    apiProvider: "",
    systems: "",
    product: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      projectype: "Select a project type",
      budget: "Select a budget range",
      timeline: "Select a project completion time",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-form-intro">
          <div className="contact-image-container">
            <img src={Avatar} alt="malik-felix-headshot" />
          </div>
          <div className="contact-form-intro-greeting">
            <h3>Hi, I&apos;m Malik Felix!</h3>
            <p>
              I&apos;ll personally respond to your submission in 1-3 business
              days. I&apos;m looking forward to hearing about your project!
            </p>
          </div>
        </div>
        <div className="project-info">
          <label>What type of project do you need?</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="Select a project type">Select a project type</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="API Integration">API Integration</option>
            <option value="Support">Website/Mobile Application Support</option>
          </select>

          {formData.projectType === "Website Redesign" && (
            <>
              <label>What services do you need?</label>
              <div className="services">
                <SecondaryButton
                  name="services"
                  type="button"
                  className={
                    formData.services === "Design Only" ? "active" : ""
                  }
                  onClick={() =>
                    setFormData({ ...formData, services: "Design Only" })
                  }
                >
                  Design Only
                </SecondaryButton>
                <SecondaryButton
                  type="button"
                  className={
                    formData.services === "Design & Development" ? "active" : ""
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      services: "Design & Development",
                    })
                  }
                >
                  Design &amp; Development
                </SecondaryButton>
              </div>

              <ProjectDetails formData={formData} handleChange={handleChange} />

              {formData.timeline !== "Select a project completion time" && (
                <>
                  <label>What prompted you to start this project?</label>
                  <textarea
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                    rows="5"
                  />

                  <label>What business goals are you trying to achieve?</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows="5"
                  />
                  <label>Anything else I should know about your project?</label>
                  <textarea
                    name="additionalData"
                    value={formData.additionalData}
                    onChange={handleChange}
                    rows="5"
                  />
                </>
              )}
            </>
          )}

          {formData.projectType === "API Integration" && (
            <>
              <label>What is the name of the API Provider?</label>
              <input
                type="text"
                name="apiProvider"
                value={formData.apiProvider}
                onChange={handleChange}
              />

              <label>What is the primary purpose of the API Integration?</label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
              />
              <label>
                What applications or systems will the API integrate with?
              </label>
              <input
                type="text"
                name="systems"
                value={formData.systems}
                onChange={handleChange}
              />
              <ProjectDetails formData={formData} handleChange={handleChange} />
            </>
          )}

          {formData.projectType === "Support" && (
            <>
              <label>What type of product do you need support with?</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
              >
                <option value="Select a product type">
                  Select a product type
                </option>
                <option value="Website/Web Application">
                  Website/Web Application
                </option>
                <option value="Mobile Application">Mobile Application</option>
              </select>

              <label>
                What specific issues are you facing with your website or
                application?
              </label>
              <textarea
                name="additionalData"
                value={formData.additionalData}
                onChange={handleChange}
              />
              <ProjectDetails formData={formData} handleChange={handleChange} />
            </>
          )}
        </div>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Robert Freeman"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>
          Website URL <span className="optional">(optional)</span>
        </label>
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          value={formData.url}
          onChange={handleChange}
        ></input>
        <PrimaryButton className="cta-submit-button submit" type="submit">
          Submit Project Details
        </PrimaryButton>
      </form>
    </>
  );
};

export default ContactForm;
