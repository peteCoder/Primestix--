"use client";

import { useEffect, useState } from "react";
import Project from "./Project";

import { useFilter } from "@/hooks/useFilter";

import qs from "query-string";

import BeatLoader from "react-spinners/BeatLoader";

const ProjectListClient = () => {
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { searchData } = useFilter();

  // This is a client data fetching for the list view.
  // Like I said, you can use server fetching if you like!

  const search = searchData.search;
  const country = searchData.country;
  const project_type = searchData.project_type;
  const orderOfItems = searchData.orderOfItems;
  const city = searchData.city;

  useEffect(() => {
    const fetchProjectData = async () => {
      // Here we contruct our URL to a browser url readable format like
      // `/api/project?search=foo&country=bar&project_name=foo&orderOfItems=price%20asc`
      const url = qs.stringifyUrl({
        url: "/api/project",
        query: {
          search,
          country,
          project_type,
          orderOfItems,
          city,
        },
      });

      try {
        // You know the drill with fetch...
        setIsLoading(true);
        const response = await fetch(url, {
          cache: "no-store",
        });
        const data = await response.json();
        // console.log(data);
        setProjects(data);
      } catch (error) {
        setIsLoading(false);
        // console.log(error.messaage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [search, country, project_type, orderOfItems, city]);


  

  return (
    <div className="px-[20px] w-full -top-[37px] relative mt-10">
      {isLoading ? (
        <div className="max-w-[970px] lg:max-w-[1170px] mx-auto flex items-center justify-center min-h-[40vh]">
          <BeatLoader color="#e8d5a1b8" />
        </div>
      ) : (
        <div className="max-w-[970px] lg:max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-5">
          {projects?.map((project) => (
            <Project key={project?._id} data={project} />
          ))}

          <>
            {projects.length === 0 && (
              <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 w-full flex justify-center items-center min-h-[40vh] text-xs font-bold text-[#d8a824b8]">
                NO RESULTS FOUND
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default ProjectListClient;
