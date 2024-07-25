import React from "react";
import Hero from "~/Layouts/Hero/Hero.jsx";
import './Landing.css';
import Testimonial from "~/Layouts/Testimonial/Testimonial.jsx";
import Review from "~/components/Review/Review.jsx";
import Service from "~/Layouts/Service/Service.jsx";
import CTASection from "~/Layouts/CTASection/CTASection.jsx";
import FeaturedWork from "~/Layouts/Work/FeaturedWork.jsx";
import Snapshot from "~/Layouts/Snapshot/Snapshot.jsx";


const Landing = () => {
  return (
    <>
      <div className="landing">
        <Hero />
        <Testimonial>
          <Review
            quoteParts={[
              "Malik was not only incredibly efficient but also quickly understood my project's needs without a lot of explanation After a quick call, our website was properly functioning again. ",
            ]}
            highlight='I would highly recommend Malik for any website job!"'
            clientName="Michael P."
            clientTitle="Executive Director at Youth Represent"
          />
        </Testimonial>
        <Service />
        <CTASection />
        <FeaturedWork />
        <Testimonial>
          <Review
            quoteParts={[
              'Malik Felix and his expertise has been a TRUE ASSET to me and my ventures. From calibrating and improving my branded apps in the Play Store and App Store to ',
              " Coupled with his pleasant demeanor and exceptional professionalism... he's undoubtedly worth EVERY cent! I look forward to working with him moving forward...indefinitely!",
            ]}
            highlight="lending his proficiency in web development by improving the overall function and user experience for my multiple sites."
            clientName="D.R. 'Solo' Perry"
            clientTitle="Founder & Director at Ka-Pow!! The Comic Art Academy"
          />
        </Testimonial>
        <Snapshot />
      </div>
    </>
  );
};

export default Landing;
