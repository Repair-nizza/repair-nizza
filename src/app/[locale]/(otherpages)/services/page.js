import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceHero from "@/components/services-page/ServiceHero";
import ServiceListSection from "@/components/services-page/ServiceListSection";
import Container from "@/components/Container";
import { servicesClient } from "@/sanityClient";
import { servicesQuery } from "@/lib/queries";

async function getServices() {
  const services = await servicesClient.fetch(servicesQuery);
  console.log("🔍 Services fetched from new Sanity client (aqzygdsy):", services);
  console.log("📊 Number of services:", services?.length || 0);
  if (services && services.length > 0) {
    console.log("✅ First service sample:", JSON.stringify(services[0], null, 2));
  }
  return services;
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

const Page = async () => {
  const services = await getServices();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Container>
          <ServiceHero />
        </Container>
        <ServiceListSection services={services} />
      </main>
      <Footer />
    </div>
  );
};

export default Page;

