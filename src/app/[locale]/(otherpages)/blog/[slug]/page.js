import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogDetailHero from "@/components/blog-page/BlogDetailHero";
import BlogContent from "@/components/blog-page/BlogContent";
import BottomCTA from "@/components/shared/bottomCTA/BottomCTA";
import { client } from "@/sanityClient";
import { blogBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";

async function getBlog(slug) {
    const blog = await client.fetch(blogBySlugQuery, { slug });
    return blog;
}

export async function generateMetadata({ params }) {
    const { slug, locale } = params;
    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: "Blog Post Not Found",
            description: "The requested blog post could not be found",
        };
    }

    const title =
        blog.title?.[locale] || blog.title?.en || blog.title?.ru || "Blog Post";
    const description =
        blog.subtitle?.[locale] || blog.subtitle?.en || blog.subtitle?.ru || "";

    return {
        title: `${title} | Solide Renovation`,
        description,
    };
}

const Page = async ({ params }) => {
    const { slug } = params;
    const blog = await getBlog(slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex-grow overflow-hidden">
                <BlogDetailHero data={blog} />
                <BlogContent content={blog.content} gallery={blog.gallery} />
            </main>
            <BottomCTA />
            <Footer />
        </div>
    );
};

export default Page;
