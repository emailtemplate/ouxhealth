import React from "react";

interface Props {
  hospitalName?: any;
  hospitalState?: any;
  hospitalOwnership?: any;
  hospitalLga?: any;
}

const Slider = ({
  hospitalName,
  hospitalOwnership,
  hospitalState,
  hospitalLga,
}: Props) => {
  return (
    <div className="py-5">
      <div className="w-max md:w-max lg:w-[40vw] shadow-md shadow-gray-300 bg-[#E0ECCE] text-green-950 px-5 py-3 rounded-lg ">
        <p className="font-semibold lg:text-xl">{hospitalName}</p>
        <p className="lg:text-lg">{hospitalState}</p>
        <p className="lg:text-lg">{hospitalOwnership}</p>
        <p className="lg:text-lg">{hospitalLga}</p>
        <p className="mt-3 lg:mt-5 border-b-2 border-[#dd4d48] inline-block text-[#dd4d48] lg:font-semibold lg:text-base">
          <a
            target="_blank"
            href={`http://www.google.com/search?q=${
              hospitalName + " " + hospitalLga
            }+create+link`}
          >
            More Info
          </a>
        </p>
      </div>
    </div>
  );
};

export default Slider;
