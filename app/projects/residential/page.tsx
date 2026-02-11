import Footer from "@/app/components/sections/shared/Footer";
import Navbar from "@/app/components/ui/Navbar";
import ProjectSection from "@/app/components/ui/ProjectSection";
import { client } from "@/src/sanity/client";
import { Project } from "@/src/types/project";

const RESIDENTIAL_PROJECTS_QUERY = `*[_type == "project" && projectType == "residential" ]`;

export default async function Residential() {
  const residentialProjects = await client.fetch<Project[]>(RESIDENTIAL_PROJECTS_QUERY);

  return (
    <>
      <Navbar forceBlackWhiteStyle={true} />
      <main className="bg-foreground">
        {residentialProjects
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map(project => <ProjectSection key={project._id} project={project} />)}
      </main>
      <Footer />
    </>
  );
}