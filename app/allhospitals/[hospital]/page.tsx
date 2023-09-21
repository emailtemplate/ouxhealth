"use client";

import SearchSlider from "@/components/search/SearchSlider";
import useApiGet from "@/hooks/UseApiGet";
import { useState, useEffect } from "react";
import StatesInNigeria from "../../../components/search/NigerianStates";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedState } from "@/redux/slice";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "@/components/search/Loading";

interface Props {
  params: { hospital: any };
}

const Page = ({ params }: Props) => {
  const [hospitalData, setHospitalData] = useState("");
  const [fetchTag, setFetchTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchHospitalState, setSearchHospitalState] = useState(false);
  const baseUrl = "https://breakable-tick-umbrella.cyclic.cloud/";
  var link = "";

  const selectedFilterState = useSelector(
    (state: any) => state.hospital.selectedState
  );
  const dispatch = useDispatch();

  const fetchUrl = () => {
    if (params.hospital === "fulllist") {
      link = `/api/v1/hospitalState`;
      setFetchTag("Fullhospitallist");
      setHospitalData("All hospitals in nigeria");
    } else if (params.hospital === "ansclinics") {
      link = `/api/v1/maternityhospitalbyState`;
      setFetchTag("Anslist");
      setHospitalData("ANS hospitals in nigeria");
    } else if (params.hospital === "maternityclinics") {
      link = `/api/v1/maternityhospitalbyState`;
      setFetchTag("Maternitylist");
      setHospitalData("Maternity hospitals in nigeria");
    } else if (params.hospital === "immunizationclinics") {
      link = `/api/v1/maternityhospitalbyState`;
      setFetchTag("Immunizationclinics");
      setHospitalData("Immunization hospitals in nigeria");
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [pageNumber, selectedFilterState]);

  const [urlLink, setUrlLink] = useState<string>(
    baseUrl +
      link +
      `?searchItem=${selectedFilterState}` +
      `&page=${pageNumber}`
  );

  useEffect(() => {
    setUrlLink(
      baseUrl +
        link +
        `?searchItem=${selectedFilterState}` +
        `&page=${pageNumber}`
    );

    refetch();

    console.log(pageNumber, urlLink);
  }, [pageNumber, urlLink]);

  useEffect(() => {
    setPageNumber(1);
    setUrlLink(
      baseUrl +
        link +
        `?searchItem=${selectedFilterState}` +
        `&page=${pageNumber}`
    );

    refetch();

    console.log(pageNumber, urlLink);
  }, [selectedFilterState]);

  const { data, error, isLoading, refetch, isFetching } = useApiGet(
    fetchTag,
    urlLink
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

  let errorMessage: any = error;

  let stateData = data?.data || [];

  return (
    <div>
      <p className="text-lg text-center capitalize mt-3 font-bold text-green-800 lg:text-3xl lg:mt-5">
        {hospitalData}
      </p>
      <div>
        <div className=" mt-5 w-[100%] bg-[#f0da85] text-green-800 p-4 rounded-md ">
          <div>
            <p className="font-[500]">Filter</p>
            <p className=" mt-2 mb-2">Search hospitals by state</p>
            <form className="text-black">
              <select
                className="text-sm rounded-lg px-4 py-1 outline-none"
                id="state"
                name="state"
                value={selectedState}
                onChange={(e) => {
                  const newState = e.target.value;
                  setSelectedState(newState);
                  dispatch(updateSelectedState(newState));
                }}
              >
                <option className="text-sm" value="">
                  Select a state
                </option>
                {StatesInNigeria.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {/* <button
                type="submit"
                className="px-4 py-1 text-sm rounded-lg bg-green-900 text-white mx-3"
              >
                Search
              </button> */}
            </form>
          </div>
        </div>
      </div>
      <div className="my-10 flex gap-4 flex-wrap w-[100%]  ">
        {errorMessage && <p> Error!! {errorMessage?.response?.data} </p>}
        <>
          {urlLink.startsWith(baseUrl) &&
            stateData !== undefined &&
            stateData !== null && (
              <>
                {stateData.map((data: any) => {
                  return (
                    <div className="w-full" key={data.Id}>
                      <SearchSlider
                        hospitalName={data.HospitalName}
                        hospitalLga={data.LGA}
                        hospitalOwnership={data.HospitalOwnership}
                        hospitalState={data?.State}
                      />
                    </div>
                  );
                })}
              </>
            )}
        </>
      </div>

      <div className="flex w-[30%] items-center text-green-800 my-7 mx-auto justify-between">
        <p
          onClick={() => {
            setPageNumber(
              pageNumber > 1 ? (prevState) => prevState - 1 : pageNumber
            );
            setSearchHospitalState(true);
          }}
        >
          <IoIosArrowBack className="text-xl cursor-pointer font-bold lg:text-2xl" />
        </p>
        <p className="font-bold cursor-pointer lg:text-2xl">{pageNumber}</p>
        <p
          onClick={() => {
            setPageNumber((prevState) => prevState + 1);
            setSearchHospitalState(true);
          }}
        >
          <IoIosArrowForward className="text-xl cursor-pointer font-bold lg:text-2xl" />
        </p>
      </div>
    </div>
  );
};

export default Page;
