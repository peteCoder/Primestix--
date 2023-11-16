"use client";

import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { useFilter } from "@/hooks/useFilter";
import { getAllCities } from "@/actions/getAllCities.";
import { getAllCountries } from "@/actions/getCountries";

// Here is where all the client filtering logic happens!
// I don't think you'll have to bother much about this component, but feel free!
// Please modify css styles. Didn't have much time for that.

const Filter = () => {
  const filter = useFilter();

  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  // local state variables
  // because of the button that updates the UI
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [project_type, setProjectType] = useState("");
  const [city, setCity] = useState("");

  const [collapsedSelectOptions, setCollapsedSelectOptions] = useState(false);

  const handleSearchInput = useDebouncedCallback((e) => {
    setSearch(e.target.value);
  }, 500);

  const handleProjectType = (e) => {
    setProjectType(e.target.value);
  };
  const handleCountries = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleRemoveAllFilter = (e) => {
    setSearch("");
    setCountry("");
    setProjectType("");
    filter.removeAllFilter();
  };

  // Clicking the Search Button should update the UI.
  const onHandleSubmit = (e) => {
    e.preventDefault();
    filter.addSearch({ search });
    filter.addProjectType({ project_type });
    filter.addCountry({ country });
    filter.addCity({ city });
  };

  console.log(city);

  useEffect(() => {
    const fetchAllCitiesAndCountries = async () => {
      const cityData = await getAllCities();
      const countryData = await getAllCountries();

      setCities(cityData);
      setCountries(countryData);
    };
    fetchAllCitiesAndCountries();
  }, []);

  console.log(country);

  return (
    <div>
      {/* Filtering components */}
      <div className="px-[20px] w-full -top-[37px] relative font-raleway">
        <div className="text-white filter-container max-w-[970px] lg:max-w-[1170px] mx-auto">
          <div>
            <div className="max-w-[1070px] mx-auto py-[10px] flex md:items-center flex-col md:flex-row">
              {/* Search bar */}
              <div className="bg-[#A18830] rounded-[2px] min-h-[35px] max-w-[863px] flex items-center flex-1">
                <div className="flex items-center justify-center w-full">
                  {/* Search Icon */}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="magnifying-glass"
                    className="svg-inline--fa fa-magnifying-glass h-[12px] w-[12px] inline mx-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                  {/* Input */}
                  <input
                    placeholder="Community or Project"
                    className="inline bg-transparent text-[14px] pl-[1px] border-transparent shadow-none h-full w-[90%] outline-none placeholder:text-white"
                    onChange={handleSearchInput}
                  />
                </div>
              </div>

              <button
                onClick={onHandleSubmit}
                className="bg-white border-[#cfba82] shadow-md cursor-pointer hidden h-[36px] m-[10px] ml-0 py-[5px] px-[15px] text-left w-[196px] md:flex items-center justify-between text-black text-[14px]"
              >
                <span>Search</span>
                <Image
                  alt="arrow"
                  src={"/arrow-search.png"}
                  height={10}
                  width={28}
                />
              </button>
            </div>

            <div className="max-w-[1070px] mx-auto py-[10px] max-h-[400px] flex md:flex-row flex-col font-raleway gap-3">
              {/* All of these select options are hardcoded but provisions are made for them in the sanity schema / db */}
              <select className="all-select" onChange={handleProjectType}>
                <option value={""}>Project Type</option>
                <option value={"furnished_apartment"}>
                  Furnished apartment
                </option>
                <option value={"hotel_apartment"}>Hotel apartment</option>
                <option value={"hotel_rooms"}>Hotel rooms</option>
                <option value={"offices"}>Offices</option>
              </select>
              <select className="all-select" onChange={handleCountries}>
                <option value={""}>All counties</option>
                {countries?.map((country) => (
                  <option key={country._id} value={country?.name}>
                    {country?.name}
                  </option>
                ))}
              </select>
              <select
                className="all-select disabled:opacity-50"
                // disabled={true}
                onChange={handleCity}
              >
                <option value={""}>All cities</option>
                {cities?.map((city) => (
                  <option key={city?._id} value={city?.name}>
                    {city?.name}
                  </option>
                ))}
              </select>
              <select
                className="all-select disabled:opacity-50"
                disabled={true}
              >
                <option value={""}>All area</option>
                <option value={"dubai"}>Dubai</option>
                <option value={"kuwait"}>Kuwait</option>
                <option value={"turkey"}>Turkey</option>
              </select>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setCollapsedSelectOptions((prev) => !prev)}
            >
              {/* Collapse filter select components */}
            </div>
          </div>

          <button
            onClick={onHandleSubmit}
            className="bg-white border-[#cfba82] shadow-md cursor-pointer md:hidden h-[36px] m-[10px] ml-0 py-[5px] px-[15px] text-left w-full flex items-center justify-between text-black text-[14px]"
          >
            <span>Search</span>
            <Image
              alt="arrow"
              src={"/arrow-search.png"}
              height={10}
              width={28}
            />
          </button>

          <div>{/* Reset filter cmmand will be here */}</div>
        </div>

        <div className="text-black max-w-[970px] lg:max-w-[1170px] mx-auto flex items-center justify-end mt-4 h-[20px] w-full">
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <div className="uppercase">sorted by</div>
            <select
              onChange={(e) =>
                filter.addOrderOfItems({ orderOfItems: e.target.value })
              }
              className="w-[150px] font-raleway outline-none py-1 px-2 text-sm"
            >
              <option value={"createdAt asc"}>Latest Project</option>
              <option value={"price asc"}>Price Lowest</option>
              <option value={"price desc"}>Price Highest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
