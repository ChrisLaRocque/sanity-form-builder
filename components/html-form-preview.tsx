"use client";

import { HTML_FORM_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import HTMLForm from "@/components/html-form";
import { HTML_FORM_QUERYResult } from "@/sanity/types";
import { FormPageParams } from "@/app/(site)/html-form/[_id]/page";

export default function HTMLFormPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<HTML_FORM_QUERYResult>;
  params: FormPageParams;
}) {
  const { data } = useQuery<HTML_FORM_QUERYResult>(HTML_FORM_QUERY, params, {
    initial,
  });

  return data ? (
    <HTMLForm {...data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
