import { defineField, defineType } from "sanity";

export const formFieldType = defineType({
  name: "formField",
  type: "object",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^\S*$/, { name: "No spaces" }),
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        list: [
          // "button",
          // "checkbox",
          // "color",
          // "date",
          // "datetime-local",
          "email",
          // "file",
          // "hidden",
          // "image",
          // "month",
          // "number",
          //   "password",
          // "radio",
          // "range",
          //   "reset",
          //   "search",
          //   "submit",
          // "tel",
          "text",
          // "time",
          // "url",
          // "week",
        ],
      },
    }),
    defineField({
      name: "label",
      description: "Text for UI",
      type: "string",
    }),
  ],
});
