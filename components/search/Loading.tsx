import React from "react";
import { GiSpinningTop } from "react-icons/gi";

interface Props {
  loadingText?: string;
}

const Loading = ({ loadingText }: Props) => {
  return (
    <div className="w-[80%] relative right-0 left-0 bg-[#FFF7D6] flex items-center justify-center mx-auto h-[20dvh] rounded-lg my-10">
      <div className="flex flex-col items-center">
        <GiSpinningTop className="text-2xl text-green-900 animate-pulse lg:text-3xl" />
        <p className="text-center text-sm pt-3 text-green-800 font-[500] lg:text-lg">
          Loading..
        </p>
      </div>
    </div>
  );
};

export default Loading;
