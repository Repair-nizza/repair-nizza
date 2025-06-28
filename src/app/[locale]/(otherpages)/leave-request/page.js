import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientFormPath from "@/components/leave-request-page/ClientFormPath";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    title: {
      ru: "Оставить заявку на ремонт | Solide Renovation",
      en: "Submit a Renovation Request | Solide Renovation",
      fr: "Soumettre une demande de rénovation | Solide Renovation",
    }[locale],
    description: {
      ru: "Оставьте заявку на ремонт вашей мечты. Мы свяжемся с вами для обсуждения проекта, рассчитаем стоимость и предложим оптимальное решение.",
      en: "Submit a request for your dream renovation. We'll contact you to discuss your project, calculate the cost, and propose the best solution.",
      fr: "Soumettez une demande pour votre rénovation de rêve. Nous vous contacterons pour discuter de votre projet, calculer le coût et proposer la meilleure solution.",
    }[locale],
  };
}

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-x-hidden overflow-y-clip">
        <ClientFormPath />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
