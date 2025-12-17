import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanityClient";

const builder = imageUrlBuilder(client);

export function urlForSanityImage(source: Parameters<typeof builder.image>[0]) {
    return builder.image(source);
}
