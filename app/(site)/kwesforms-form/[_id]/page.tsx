import HTMLForm from "@/components/html-form";
import { HTML_FORM_QUERY, KWESFORM_FORM_QUERY } from "@/sanity/lib/queries";
// import { FORMSPREE_FORM_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import {
  HTML_FORM_QUERYResult,
  KWESFORM_FORM_QUERYResult,
} from "@/sanity/types";
// import { FORMSPREE_FORM_QUERYResult } from "@/sanity/types";
import { draftMode } from "next/headers";
import type { FormPageParams } from "../../html-form/[_id]/page";
import KwesFormsForm from "@/components/kwesforms-form";

export default async function KwesFormsPage({
  params,
}: {
  params: FormPageParams;
}) {
  const initial = await loadQuery<KWESFORM_FORM_QUERYResult>(
    KWESFORM_FORM_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  if (!initial?.data) {
    return null;
  }
  return (
    <>
      <KwesFormsForm {...initial.data} />
    </>
  );
}
