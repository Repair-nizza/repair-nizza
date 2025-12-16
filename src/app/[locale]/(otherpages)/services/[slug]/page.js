import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceDetailHero from "@/components/services-page/ServiceDetailHero";
import ServiceDetails from "@/components/services-page/ServiceDetails";
import FeedbackForm from "@/components/services-page/FeedbackForm";
import BottomCTA from "@/components/shared/bottomCTA/BottomCTA";
import Container from "@/components/Container";
import { client } from "@/sanityClient";
import { serviceBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";

async function getService(slug) {
    const service = await client.fetch(serviceBySlugQuery, { slug });
    return service;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug, locale } = resolvedParams;
    const service = await getService(slug);

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested service could not be found",
        };
    }

    const title =
        service.title?.[locale] ||
        service.title?.en ||
        service.title?.ru ||
        "Service";
    const description =
        service.shortDescription?.[locale] ||
        service.shortDescription?.en ||
        service.shortDescription?.ru ||
        "";

    return {
        title: `${title} | Solide Renovation`,
        description,
    };
}

const Page = async ({ params }) => {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const service = await getService(slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="absolute top-[-29px] right-0 -z-10 md:top-[-5px]">
                <Image
                    src="/images/image/service-slug-page/leave-header-mob.webp"
                    alt="decoration"
                    width={200}
                    height={200}
                    className="block md:hidden h-25 w-auto pointer-events-none"
                />
            </div>
            <div className="absolute top-0 left-0 -z-10 hidden lg:block pointer-events-none">
                <Image
                    src="/images/image/service-slug-page/leaves-header.webp"
                    alt="decoration"
                    width={200}
                    height={200}
                    className="h-auto w-auto pointer-events-none"
                />
            </div>
            <Header />
            <main className="flex-grow overflow-x-hidden relative">
                <div className="absolute bottom-0 right-0 z-0 md:hidden pointer-events-none">
                    <Image
                        src="/images/image/service-slug-page/leaves-contact-form-mob.webp"
                        alt="decoration"
                        width={200}
                        height={200}
                        className="h-auto w-auto pointer-events-none"
                    />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-10 hidden lg:block pointer-events-none">
                    <Image
                        src="/images/image/service-slug-page/leaves-contact-form.webp"
                        alt="decoration"
                        width={200}
                        height={200}
                        className="h-auto w-auto pointer-events-none"
                    />
                </div>
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
            <BottomCTA />
            <Footer />
        </div>
    );
};

export default Page;
