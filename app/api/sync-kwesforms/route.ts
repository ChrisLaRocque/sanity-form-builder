/**
 * A Silver level plan is needed to get access to KwesForm's API.
 * This example was built without access to their API, instead using mock data. Unless their API has changed this example should work with a few edits.
 */
import { client } from "@/sanity/lib/client";

// Initialize Sanity client
const clientWithToken = client.withConfig({
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Get kwesForm documents from Sanity
async function getKwesFormDocuments() {
  const forms = await clientWithToken.fetch('*[_type == "kwesForm"]');
  return forms;
}

// Combine documents with KwesForm API response
function mergeWithDocuments(apiResponse, formDocuments) {
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
  for (let i = 0; i < apiFormDocuments.length; i += 1) {
    clientWithToken.createOrReplace(apiFormDocuments[i]).then((res) => {
      console.log("res", res);
      console.log(`KwesForm was created, document ID is ${res._id}`);
    });
  }
  return null;
}

/**
 * Route handler.
 */
export async function POST(request: Request) {
  const update = await updateFormDocuments();
  console.log("updateForm", update);
  return new Response("yes");
}

// Mock API response for KwesForm docs
const mockAPIData = [
  {
    id: 2,
    website_id: 4,
    name: "My Form",
    connected: 1,
    action: "https://kwes.io/api/foreign/forms/BxdOjqAKMfIPT5cMf7E4",
    created_at: "2021-04-13 13:57:51",
    updated_at: "2021-06-12 15:57:36",
  },
  {
    id: 4,
    website_id: 12,
    name: "Another Form",
    connected: 0,
    action: "https://kwes.io/api/foreign/forms/xBDa5K9uWVbVfirmFDaL",
    created_at: "2021-06-12 15:58:33",
    updated_at: "2021-06-12 15:58:33",
  },
];

// Un-comment the code inside when you have a token, for now we use mock data from the KwesForms docs
async function getKwesForms() {
  // KwesForms docs example for fetching all forms:
  // var myHeaders = new Headers();
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Authorization", "Bearer {API_TOKEN}");

  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };

  // fetch("https://kwes.io/api/v1/forms", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  return mockAPIData;
}
