import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "8kyc11bs",
  dataset: "production",
  apiVersion: "2024-03-19",
  useCdn: true,
});
