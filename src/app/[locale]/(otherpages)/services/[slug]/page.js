import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailHero from "@/components/services-page/ServiceDetailHero";
import ServiceDetails from "@/components/services-page/ServiceDetails";
import FeedbackForm from "@/components/services-page/FeedbackForm";
import Container from "@/components/Container";
import { servicesClient } from "@/sanityClient";
import { serviceBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";

async function getService(slug) {
  const service = await servicesClient.fetch(serviceBySlugQuery, { slug });
  return service;
}

export async function generateMetadata({ params }) {
  const { slug, locale } = params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found",
    };
  }

  const title = service.title?.[locale] || service.title?.en || service.title?.ru || "Service";
  const description = service.shortDescription?.[locale] || service.shortDescription?.en || service.shortDescription?.ru || "";

  return {
    title: `${title} | Solide Renovation`,
    description,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Container>
          <ServiceDetailHero service={service} />
        </Container>
        <Container>
          <ServiceDetails service={service} />
        </Container>
        <Container>
          <FeedbackForm service={service} />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

