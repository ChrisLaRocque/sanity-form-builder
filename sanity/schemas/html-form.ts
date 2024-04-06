import { defineField, defineType } from "sanity";

export const htmlFormType = defineType({
  name: "htmlForm",
  title: "HTML form",
  type: "document",
  fields: [
    defineField({
      name: "id",
      type: "slug",
    }),
    defineField({
      name: "fields",
      type: "array",
      of: [{ type: "formField" }],
    }),
  ],
  preview: {
    select: {
      title: "htmlId.current",
    },
  },
});
