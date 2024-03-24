import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { FORM_QUERY } from "@/sanity/lib/queries";
import Form from "@/components/form";
import FormPreview from "@/components/form-preview";

export default async function FormPage({
  params,
}: {
  params: { _id: string };
}) {
  const initial = await loadQuery<SanityDocument>(FORM_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });
  return draftMode().isEnabled ? (
    <FormPreview initial={initial} params={params} />
  ) : (
    <Form {...initial.data} />
  );
}
