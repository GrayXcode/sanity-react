import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "e23gwc6d",
  dataset: "production",
  useCdn: true,
});
