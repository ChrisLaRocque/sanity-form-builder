"use client";

import { FORM_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";

import Form from "@/components/form";

export default function FormPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
}) {
  const { data } = useQuery<SanityDocument | null>(FORM_QUERY, params, {
    initial,
  });

  return data ? (
    <Form {...data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
