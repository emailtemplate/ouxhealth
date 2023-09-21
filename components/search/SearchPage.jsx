import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";
import useApiGet from "@/hooks/UseApiGet";
import StatesInNigeria from "./NigerianStates";
import SearchSlider from "./SearchSlider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Loading from "./Loading";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchHospitalState, setSearchHospitalState] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedState, setSelectedState] = useState("");
  const [link, setLink] = useState("generalsearch");

  const baseUrl = "https://breakable-tick-umbrella.cyclic.cloud/";

  const { data, refetch, error, isLoading, isFetching } = useApiGet(
    "searchState",
    `${baseUrl}/api/v1/${link}?searchItem=${
      selectedState ||
      searchValue.charAt(0).toUpperCase() + searchValue.slice(1)
    }&page=${pageNumber}`
  );

  const handleSearchState = (e) => {
    e.preventDefault();
    setSearchHospitalState(true);
    setPageNumber(1);
    setLink("hospitalState");
  };

  useEffect(() => {
    if (searchHospitalState === true) {
      refetch();
      setSearchHospitalState(false);
      setLink("generalsearch");
      setSelectedState("");
    }
  }, [selectedState, searchHospitalState, pageNumber, link]);

  const handleGeneralSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  //   useEffect(() => {
  //     handleGeneralSearch();
  //   }, [searchValue]);

  const stateData = data?.data;

  return (
    <div>
      <div className="py-5 flex justify-between gap-4">
        <div className="w-[100%] lg:w-[80%] ">
          <div className="flex justify-center  xl:mb-20 ">
            <form
              onSubmit={handleGeneralSearch}
              className="flex justify-between z-30 items-center pe-6 xl:pe-5  bg-white border border-[#2c4f30] w-[100%] md:mx-20 xl:w-[40vw] rounded-3xl"
            >
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                name="searchArticle"
                placeholder="Search "
                className="py-3 capitalize bg-transparent w-[95%] ps-5 border-none outline-none  "
              />
              <button type="submit" className="text-2xl w-[5%]">
                <BiSearch className="text-[#2c4f30]" />
              </button>
            </form>
          </div>

          <div className="lg:hidden mt-5 w-[100%] bg-[#f0da85] text-green-800 p-4 rounded-md ">
            <div>
              <p className="font-[500]">Filter</p>
              <p className=" mt-2 mb-2">Search hospitals by state</p>
              <form className="text-black" onSubmit={handleSearchState}>
                <select
                  className="text-sm rounded-lg px-4 py-1 outline-none"
                  id="state"
                  name="state"
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
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
                <button
                  type="submit"
                  className="px-4 py-1 text-sm rounded-lg bg-green-900 text-white mx-3"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="my-10 flex gap-4 flex-wrap w-[100%]  ">
            {isLoading && isFetching && <Loading />}
            {stateData !== undefined && (
              <>
                {stateData.map((data) => {
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
          </div>
          <div className="flex w-[30%] items-center my-7 mx-auto justify-between">
            <p
              onClick={() => {
                setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber);
                setSearchHospitalState(true);
              }}
            >
              <IoIosArrowBack className="text-xl cursor-pointer font-bold lg:text-2xl" />
            </p>
            <p className="font-bold cursor-pointer lg:text-2xl">{pageNumber}</p>
            <p
              onClick={() => {
                setPageNumber(pageNumber + 1);
                setSearchHospitalState(true);
              }}
            >
              <IoIosArrowForward className="text-xl cursor-pointer font-bold lg:text-2xl" />
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-[20%] bg-[#f0da85] text-green-800 p-5 rounded-md fixed right-4 h-[calc(100vh - 80px)]">
          <div>
            <p className="lg:text-xl lg:font-[500]">Filter</p>
            <p className="capitalize mt-5 mb-2 lg:text-base lg:font-[500]">
              Search hospitals by state
            </p>
            <form className="text-black" onSubmit={handleSearchState}>
              <select
                className="text-sm rounded-lg px-4 py-1 outline-none"
                id="state"
                name="state"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
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
              <button
                type="submit"
                className="px-4 py-1 text-sm rounded-lg bg-green-900 text-white mx-3"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
