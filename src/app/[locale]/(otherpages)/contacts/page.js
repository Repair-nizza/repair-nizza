import Contacts from "@/components/contactpage/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export async function generateMetadata({ params }) {
  const { locale } = params;

  return {
    title: {
      ru: "Контакты | Solide Renovation",
      en: "Contacts | Solide Renovation",
      fr: "Contacts | Solide Renovation",
    }[locale],
    description: {
      ru: "Свяжитесь с нами любым удобным способом — мы всегда на связи! Email, телефон, Instagram, Telegram — выбирайте удобный способ связи.",
      en: "Get in touch with us in any convenient way — we're always here to help! Email, phone, Instagram, Telegram — choose your preferred contact method.",
      fr: "Contactez-nous de la manière qui vous convient — nous sommes toujours là pour vous aider ! Email, téléphone, Instagram, Telegram — choisissez votre méthode de contact préférée.",
    }[locale],
  };
}

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-x-hidden overflow-y-hidden">
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
