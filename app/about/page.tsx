import React from "react";
import InfoCards from "../../components/cards/InfoCards";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="pt-5  w-full flex flex-col justify-center items-center">
      <div className="mt-10 bg-[#FFF7D6] py-5 pe-2 rounded-md flex w-full lg:mt-20 items-end justify-end">
        <p className="text-base justify-end items-end text-orange-600 text-end handJetFont tracking-widest sm:font-bold md:font-bold md:text-lg lg:text-2xl">
          Maternity, Immunization, and Antenatal Compass
        </p>
      </div>

      <div className="my-10 text-green-900">
        <p className="text-lg lg:text-xl text-center font-semibold mt-5">
          Who We Are
        </p>
        <p className="text-base lg:text-lg text-center mt-3">
          HealthCare Hub is your trusted partner on your journey to better
          health. We specialize in providing top-quality hospital guide
          including Maternity, Immunization, and Antenatal Information on
          Clinics, ensuring the well-being of mothers and infants.
        </p>
        <p className="text-lg lg:text-xl text-center font-semibold mt-5">
          What We Do
        </p>
        <p className="text-base lg:text-lg text-center mt-3">
          We offer comprehensive compass details on maternity care, immunization
          programs, and antenatal support to guide you through the crucial
          stages of parenthood. Our commitment is to provide the highest
          standard of care to our patients.
        </p>
        <p className="text-lg lg:text-xl text-center font-semibold mt-5">
          Our Vision
        </p>
        <p className="text-base lg:text-lg text-center mt-3">
          At HealthCare Hub, we aim to be the Health Compass of Nigeria, guiding
          individuals and families to make informed healthcare decisions. While
          we focus on maternity and related services, we have plans to expand
          into other areas of specialty soon.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
