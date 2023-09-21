"use client";

import InfoCards from "../cards/InfoCards";
import HomeImg from "../../public/images/Homeimg.png";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";
import useApiGet from "@/hooks/UseApiGet";
import Loading from "../search/Loading";

const HomePage = () => {
  const { data, error, isLoading } = useApiGet(
    "allhospitals",
    "https://breakable-tick-umbrella.cyclic.cloud//api/v1/maternityhospitalbyState?searchItem=Lagos"
  );

  const errorMessage: any = error;

  const maternityData = data?.data;

  return (
    <div className="pt-5 w-full flex flex-col justify-center items-center ">
      <div className=" bg-[#FFF7D6] rounded-lg py-2 h-auto w-[90vw] lg:w-full  flex justify-between lg:mt-5 xl:mt-8">
        <div className="flex flex-col w-[50%] justify-between my-5 mx-5 lg:mx-10">
          <div className="  justify-end  text-[#2c4f30]">
            <h2 className="capitalize font-semibold lg:text-4xl xl:text-4xl">
              HealthCare Hub
            </h2>
            <p className="text-[15px] lg:text-2xl lg:mt-1">
              {" "}
              Your Hospital Guide
            </p>

            <div className="mt-5 flex gap-4 lg:mt-7">
              <Link
                href={"/allhospitals/fulllist"}
                className="text-sm bg-green-800 text-white px-4 rounded-lg py-1 lg:text-lg lg:px-6"
              >
                Explore
              </Link>
              <Link
                href={"/search"}
                className="text-sm bg-[#e36e4e] text-white px-4 rounded-lg py-1 lg:text-lg lg:px-6"
              >
                Search
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[15px] hidden sm:block lg:text-xl">
              {" "}
              Your Compass to Quality Care – Your Health, Your Hub{" "}
            </p>
          </div>
        </div>
        <div className="w-[50%] md:w-[40%] md:flex justify-end lg:justify-start">
          <Image
            src={HomeImg}
            alt="homeImage"
            priority={false}
            className="object-cover md:w-[40%] md:h-max lg:transform lg:my-[3rem] lg:scale-[250%]"
          />
        </div>
      </div>

      <div className="mt-10 flex w-full lg:mt-20  items-end justify-end">
        <p className="text-base justify-end items-end text-orange-600 text-end handJetFont tracking-widest sm:font-bold md:font-bold md:text-lg lg:text-2xl">
          Maternity Clinics in Lagos
        </p>
      </div>

      <div
        id="slider"
        className=" text-black flex justify-between gap-4 relative right-0 left-0 w-full overflow-x-scroll"
      >
        {isLoading && <Loading />}
        {errorMessage && <p>Error!!! {errorMessage?.response?.data}</p>}
        {maternityData !== undefined && (
          <>
            {maternityData.map((data: any) => {
              return (
                <div className="w-auto" key={data.Id}>
                  <Slider
                    hospitalName={data.HospitalName}
                    hospitalState={data.State}
                    hospitalLga={data.LGA}
                    hospitalOwnership={data.HospitalOwnership}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>

      <div className="my-10">
        <InfoCards />
      </div>
    </div>
  );
};

export default HomePage;
