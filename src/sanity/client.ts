import { createClient } from "next-sanity";
import imageUrlBuilder, { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "ghpw83fl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export function urlFor(source: SanityImageSource) {
  return createImageUrlBuilder(client).image(source);
}