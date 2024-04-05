import { defineField, defineType } from "sanity";
export const formspreeFormType = defineType({
  name: "formspreeForm",
  title: "Formspree form",
  type: "document",
  fields: [
    defineField({
      name: "formspreeId",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fields",
      type: "array",
      of: [{ type: "formField" }],
    }),
  ],
  preview: {
    select: {
      title: "formspreeId",
    },
  },
});
