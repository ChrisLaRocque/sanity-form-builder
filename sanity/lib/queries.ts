import { groq } from "next-sanity";

export const HTML_FORM_QUERY = groq`*[_type == "htmlForm" && _id == $_id][0]`;

export const FORMSPREE_FORM_QUERY = groq`*[_type == "formspreeForm" && _id == $_id][0]`;

export const KWESFORM_FORM_QUERY = groq`*[_type == "kwesForm" && _id == $_id][0]`;
