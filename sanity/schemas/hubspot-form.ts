import { defineField, defineType } from "sanity";

export const hubspotFormType = defineType({
  name: "hubspotForm",
  type: "document",
  fields: [
    defineField({
      name: "portalId",
      type: "number",
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: "guid",
      type: "string",
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: "name",
      type: "string",
      readOnly: true,
    }),
  ],
});
