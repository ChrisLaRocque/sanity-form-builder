import FormSpreeForm from "@/components/formspree-form";
import { FORMSPREE_FORM_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { FORMSPREE_FORM_QUERYResult } from "@/sanity/types";
import type { FormPageParams } from "../../html-form/[_id]/page";
import { draftMode } from "next/headers";

export default async function FormspreePage({
  params,
}: {
  params: FormPageParams;
}) {
  const initial = await loadQuery<FORMSPREE_FORM_QUERYResult>(
    FORMSPREE_FORM_QUERY,
    params,
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );
  if (!initial?.data?.formspreeId) {
    return null;
  }
  return (
    <>
      <FormSpreeForm {...initial.data} />
    </>
  );
}
