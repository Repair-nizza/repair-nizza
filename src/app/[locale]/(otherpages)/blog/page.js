import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogHero from "@/components/blog-page/BlogHero";
import BlogListSection from "@/components/blog-page/BlogComponent";
import { client } from "@/sanityClient";
import { blogsQuery } from "@/lib/queries";
import { getTranslations } from "next-intl/server";

async function getBlogs() {
  try {
    const blogs = await client.fetch(blogsQuery);
    return blogs || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "blogPage" });

  return {
    title: `${t("title")} | Solide Renovation`,
    description: t("description"),
  };
}

const Page = async ({ params }) => {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-hidden">
        <BlogHero />
        <BlogListSection blogs={blogs} />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
