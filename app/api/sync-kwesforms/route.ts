/**
 * Example sync function for KwesForms + Sanity.
 */
import { client } from "@/sanity/lib/client";
import { ALL_KWESFORM_FORM_QUERY } from "@/sanity/lib/queries";
import { ALL_KWESFORM_FORM_QUERYResult, KwesForm } from "@/sanity/types";

// Initialize Sanity client
const clientWithToken = client.withConfig({
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Get kwesForm documents from Sanity
async function getKwesFormDocuments() {
  const forms = await clientWithToken.fetch<ALL_KWESFORM_FORM_QUERYResult>(
    ALL_KWESFORM_FORM_QUERY
  );
  return forms;
}

// Combine documents with KwesForm API response
function mergeWithDocuments(
  apiResponse: KwesAPIResponse,
  formDocuments: ALL_KWESFORM_FORM_QUERYResult
) {
  // TODO: compare the updatedAt info to only write what's changed
  return apiResponse.map((form) => {
    const document = formDocuments.filter((doc) => doc.id === form.id)[0];
    return { ...document, ...form, _type: "kwesForm" };
  });
}

// Bring all the abpve functions together
async function updateFormDocuments() {
  const currentForms = await getKwesFormDocuments();
  const apiForms = await getKwesForms();
  const apiFormDocuments = mergeWithDocuments(apiForms, currentForms);

  let responses: KwesForm[] = [];

  for (let i = 0; i < apiFormDocuments.length; i += 1) {
    await clientWithToken.createOrReplace(apiFormDocuments[i]).then((res) => {
      console.log(`KwesForm was created, document ID is ${res._id}`);
      responses.push(res);
    });
  }
  return responses;
}

/**
 * Route handler.
 */
export async function POST() {
  const update = await updateFormDocuments();
  return Response.json(update);
}

// Mock Form API response from KwesForm docs. A
type KwesAPIResponse = {
  id: number;
  website_id: number;
  name: string;
  connected: number;
  action: string;
  created_at: string;
  updated_at: string;
}[];

const mockAPIData = [
  {
    id: 2,
    website_id: 4,
    name: "My Form",
    connected: 1,
    action: "https://kwes.io/api/foreign/forms/-------------------",
    created_at: "2021-04-13 13:57:51",
    updated_at: "2021-06-12 15:57:36",
  },
  {
    id: 4,
    website_id: 12,
    name: "Another Form",
    connected: 0,
    action: "https://kwes.io/api/foreign/forms/-------------------",
    created_at: "2021-06-12 15:58:33",
    updated_at: "2021-06-12 15:58:33",
  },
];

// API docs have example fetch requests against their API
async function getKwesForms() {
  // For now return mock data to illustrate
  return mockAPIData;
}
