import { groq } from "next-sanity";

export const FORM_QUERY = groq`*[_type == "form" && _id == $_id][0]`;
