import React from "react";
import { RiHospitalFill } from "react-icons/ri";
import { GiHospitalCross } from "react-icons/gi";
import { FaHospitalSymbol } from "react-icons/fa";
import { LiaHospitalAltSolid } from "react-icons/lia";
import Link from "next/link";

const InfoCards = () => {
  return (
    <div className="flex flex-row justify-between gap-5 vsmall:gap-4 verysmall:gap-3 flex-wrap ">
      {" "}
      <div className="h-[auto] w-[42vw] vsmall:w-[40vw] px-4 py-3 bg-[#f6f4ca] rounded-lg flex flex-col gap-4">
        <div className="flex justify-end">
          <RiHospitalFill className="text-4xl lg:text-6xl text-[#2c4f30]" />
        </div>
        <div>
          <p className="text-[#2c4f30] text-sm lg:text-xl">
            <Link className="underline" href={"/allhospitals/fulllist"}>
              Over <span className="font-bold">30,000+</span>
              <span> Hospitals</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="h-[auto] w-[42vw] vsmall:w-[40vw] px-4 py-3 bg-[#bacae8] rounded-lg flex flex-col gap-4">
        <div className="flex justify-end">
          <GiHospitalCross className="text-4xl lg:text-6xl text-[#2c4f30]" />
        </div>
        <div>
          <p className="text-[#2c4f30] text-sm lg:text-xl">
            <Link className="underline" href={"/allhospitals/ansclinics"}>
              Over <span className="font-bold">8000+</span>
              <span className=""> ANS Clinics</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="h-[auto] w-[42vw] vsmall:w-[40vw] px-4 py-3 bg-[#bacae8] rounded-lg flex flex-col gap-4">
        <div className="flex justify-end">
          <FaHospitalSymbol className="text-4xl lg:text-6xl text-[#2c4f30]" />
        </div>
        <div>
          <p className="text-[#2c4f30] text-sm lg:text-xl">
            <Link className="underline" href={"/allhospitals/maternityclinics"}>
              Over <span className="font-bold">8000+</span>
              <span className=""> Maternity Clinics</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="h-[auto] w-[42vw] vsmall:w-[40vw] px-4 py-3 bg-[#E0ECCE] rounded-lg flex flex-col gap-4">
        <div className="flex justify-end">
          <LiaHospitalAltSolid className="text-4xl lg:text-6xl text-[#2c4f30]" />
        </div>
        <div>
          <p className="text-[#2c4f30] text-sm lg:text-xl">
            {" "}
            <Link
              className="underline"
              href={"/allhospitals/immunizationclinics"}
            >
              Over <span className="font-bold">5000+</span>
              <span className=""> Immunization Clinics</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
