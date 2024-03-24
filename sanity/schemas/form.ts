import { defineField, defineType } from "sanity";
export default defineType({
  name: "form",
  type: "document",
  fields: [
    defineField({
      name: "htmlId",
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
