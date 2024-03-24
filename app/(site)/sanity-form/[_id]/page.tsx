import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { FORM_QUERY } from "@/sanity/lib/queries";
import Form from "@/components/form";

export default async function FormPage({
  params,
}: {
  params: { _id: string };
}) {
  console.log(params);
  const initial = await loadQuery<SanityDocument>(FORM_QUERY, params);
  return <Form {...initial.data} />;
}
