import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceHero from "@/components/services-page/ServiceHero";
import ServiceListSection from "@/components/services-page/ServiceListSection";
import Container from "@/components/Container";
import { servicesClient } from "@/sanityClient";
import { servicesQuery } from "@/lib/queries";
import Image from "next/image";

async function getServices() {
  try {
    const services = await servicesClient.fetch(servicesQuery);
    if (services && services.length > 0) {
    }
    return services || [];
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    title: {
      ru: "Наши услуги | Solide Renovation",
      en: "Our Services | Solide Renovation",
      fr: "Nos Services | Solide Renovation",
    }[locale],
    description: {
      ru: "Полный спектр услуг по ремонту и дизайну интерьера. От косметического ремонта до полной реконструкции.",
      en: "Full range of renovation and interior design services. From cosmetic repairs to complete reconstruction.",
      fr: "Gamme complète de services de rénovation et de design d'intérieur. De la rénovation cosmétique à la reconstruction complète.",
    }[locale],
  };
}

const Page = async ({ params }) => {
  const services = await getServices();

  return (
    <div className="flex flex-col min-h-screen">
       <Image
          src='/images/image/services/hero-decor.png'
          alt="decoration"
          width={200}
          height={200}
          className="hidden md:block h-25 w-auto absolute top-0 right-0 pointer-events-none"
      />
      <Image
            src='/images/image/services/hero-decor-mob.png'
        alt="decoration"
        width={200}
        height={200}
          className="block md:hidden h-25 w-auto absolute top-0 right-0 pointer-events-none"
      />
      <Header />
      <main className="flex-grow">
        <Container>
          <ServiceHero />
          <ServiceListSection services={services || []} />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

