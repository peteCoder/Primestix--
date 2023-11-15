import Filter from "@/components/Filter";
import ProjectListClient from "@/components/ProjectListClient";

const ProjectPage = () => {
  return (
    <main className="min-h-screen">
      <div className="caption-section text-white">
        <div className="max-w-[768px] lg:max-w-[1170px] mx-auto px-[15px] ">
          <h1 className="text-[53px] font-bold tracking-[2.06px] pt-[20px]">
            Projects
          </h1>
          <h2 className="text-[17px] font-bold">Discover your dream home</h2>
        </div>
      </div>

      <Filter />

      <div>
        {/* Here we render the Project list client */}
        <ProjectListClient />
      </div>
    </main>
  );
};

export default ProjectPage;
