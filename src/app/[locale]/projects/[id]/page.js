import { client } from "@/sanityClient";
import ProjectHero from "@/components/projects/ProjectHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAndAfter from "@/components/projects/BeforeAndAfter";
import TypeOfRoom from "@/components/projects/TypeOfRoom";
import TaskAndSolution from "@/components/projects/TaskAndSolution";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ClientReview from "@/components/projects/ClientReview";

async function getProject(id) {
  const query = `*[_type == "project" && _id == $id][0]{
    _id,
    _type,
    title,
    subtitle,
    mainImage {
      asset->
    },
    mobileMainImage {
      asset->
    },
    beforeAfterImages {
      before {
        asset->
      },
      after {
        asset->
      }
    },
    mainBlock {
      title,
      description,
      image {
        asset->
      }
    },
    clientTaskBlock {
      title,
      description,
      image {
        asset->
      }
    },
    solutionBlock {
      title,
      description,
      image {
        asset->
      }
    },
    gallery[]{
      _key,
      _type,
      asset->
    },
    testimonial {
      clientName,
      text,
      clientPhoto {
        asset->
      },
      roomPhoto {
        asset->
      }
    }
  }`;

  const project = await client.fetch(query, { id });
  return project;
}

export async function generateMetadata({ params }) {
  const { id, locale } = params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: project.title?.[locale] || project.title?.en || "Project",
    description:
      project.subtitle?.[locale] ||
      project.subtitle?.en ||
      "Project description",
  };
}

export default async function ProjectPage({ params }) {
  const { id } = params;
  const project = await getProject(id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <ProjectHero data={project} />
        <BeforeAndAfter data={project.beforeAfterImages} />
        <TypeOfRoom data={project.mainBlock} />
        <TaskAndSolution
          task={project.clientTaskBlock}
          solution={project.solutionBlock}
        />
        <ProjectGallery gallery={project.gallery} />
        <ClientReview data={project.testimonial} />
      </main>
      <Footer />
    </div>
  );
}
