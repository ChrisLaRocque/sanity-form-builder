import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { HTML_FORM_QUERY } from "@/sanity/lib/queries";
import Form from "@/components/html-form";
import FormPreview from "@/components/html-form-preview";
import { HTML_FORM_QUERYResult } from "@/sanity/types";

export type FormPageParams = { _id: string };

export default async function FormPage({ params }: { params: FormPageParams }) {
  const initial = await loadQuery<HTML_FORM_QUERYResult>(
    HTML_FORM_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  if (!initial.data) {
    return null;
  }
  return draftMode().isEnabled ? (
    <FormPreview initial={initial} params={params} />
  ) : (
    <Form {...initial.data} />
  );
}
