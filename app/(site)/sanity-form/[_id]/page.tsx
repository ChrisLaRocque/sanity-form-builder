import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { FORM_QUERY } from "@/sanity/lib/queries";

export default async function FormPage({ params }) {
  console.log(params);
  const initial = await loadQuery<SanityDocument[]>(FORM_QUERY, params);
  console.log("initial", initial);
  return <div>Yes</div>;
}
