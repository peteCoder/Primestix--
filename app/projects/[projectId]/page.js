import ProjectDetailClient from "@/components/ProjectDetailClient";

  // If you decide to use server component or server data fetching instead, 
  // although you don't have to,
  // you can knock yourself out! 😊
  // Although ensure you set NEXT_PUBLIC_URL in your environment variable as
  // your origin e.g. `http://localhost:3000` for local env.
  // Set it to whatever your deployed server origin is for production env


const ProjectDetail = async ({ params }) => {

  // ---------- SERVER SIDE FETCHING ------------

  // const { projectId } = params;

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_URL}/api/project/${projectId}`
  // );

  // const data = await response.json();

  // console.log(data);

  return (
    <>
      <ProjectDetailClient />
    </>
  );
};

export default ProjectDetail;
