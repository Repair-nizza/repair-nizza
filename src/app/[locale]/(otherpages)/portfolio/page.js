import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioComponent from "@/components/portfolio-page/PortfolioComponent";
import BottomCTA from "@/components/shared/bottomCTA/BottomCTA";
import { client } from "@/sanityClient";

async function getProjects() {
    const query = `*[_type == "project"] {
    _id,
    title,
    subtitle,
    mainImage {
      asset->
    },
    mobileMainImage {
      asset->
    },
    slug,
    category
  }`;

    return client.fetch(query);
}

async function getCategories() {
    const query = `*[_type == "category"] {
    _id,
    name,
    title
  }`;

    return client.fetch(query);
}

export async function generateMetadata({ params }) {
    const { locale } = params;

    return {
        title: {
            ru: "Наше портфолио | Solide Renovation",
            en: "Our Portfolio | Solide Renovation",
            fr: "Notre Portfolio | Solide Renovation",
        }[locale],
        description: {
            ru: "Мы гордимся каждым проектом, от косметического ремонта до ремонта под ключ. Ознакомьтесь с нашими работами и вдохновитесь идеями для вашего дома.",
            en: "We take pride in every project we undertake, from cosmetic repairs to full turnkey renovation. Explore our work and get inspired for your home.",
            fr: "Nous sommes fiers de chaque projet, de la rénovation cosmétique à la rénovation complète. Découvrez nos réalisations et inspirez-vous pour votre maison.",
        }[locale],
    };
}

const Page = async () => {
    const projects = await getProjects();
    const categories = await getCategories();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow overflow-x-hidden">
                <PortfolioComponent
                    projects={projects}
                    categories={categories}
                />
            </main>
            <BottomCTA />
            <Footer />
        </div>
    );
};

export default Page;
