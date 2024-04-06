/**
 * Meant to directly copy the KwesForm form JSON object from their API.
 */
import { defineField, defineType } from "sanity";

export const kwesFormsType = defineType({
  name: "kwesForm",
  type: "document",
  fields: [
    defineField({
      name: "id",
      type: "number",
      readOnly: true,
    }),
    defineField({
      name: "website_id",
      type: "number",
      readOnly: true,
    }),
    defineField({
      name: "name",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "connected",
      type: "number",
      readOnly: true,
    }),
    defineField({
      name: "action",
      type: "url",
      readOnly: true,
    }),
    defineField({
      name: "created_at",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "updated_at",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "fields",
      type: "array",
      of: [{ type: "formField" }],
    }),
  ],
});
// {
//     id: 4,
//     website_id: 12,
//     name: "Another Form",
//     connected: 0,
//     action: "https://kwes.io/api/foreign/forms/xBDa5K9uWVbVfirmFDaL",
//     created_at: "2021-06-12 15:58:33",
//     updated_at: "2021-06-12 15:58:33",
//   },
