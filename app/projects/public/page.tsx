import Footer from "@/app/components/sections/shared/Footer";
import Navbar from "@/app/components/ui/Navbar";
import { client } from "@/src/sanity/client";
import { Project } from "@/src/types/project";
import ProjectSection from "@/app/components/ui/ProjectSection";

const PUBLIC_PROJECTS_QUERY = `*[_type == "project" && projectType == "public" ]`;

export default async function Public() {
  const publicProjects = await client.fetch<Project[]>(PUBLIC_PROJECTS_QUERY);

  return (
    <>
      <Navbar forceBlackWhiteStyle={true} />
      <main className="bg-foreground">
        {publicProjects
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(project => <ProjectSection key={project._id} project={project} />)}
      </main>
      <Footer />
    </>
  );
}