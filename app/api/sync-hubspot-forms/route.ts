// const doc = {
//     _id: 'my-bike',
//     _type: 'bike',
//     name: 'Sanity Tandem Extraordinaire',
//     seats: 2,
//   }

//   client.createOrReplace(doc).then((res) => {
//     console.log(`Bike was created, document ID is ${res._id}`)
//   })

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: Request) {
  console.log("request", request);
  return new Response("yes");
}
