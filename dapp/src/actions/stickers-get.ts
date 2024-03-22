"use server";

export type Sticker = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default async function stickersGet() {
  const response = await fetch(
    "https://jade-eldest-pike-94.mypinata.cloud/ipfs/QmcYEhmxd8d8MxRmuHxejjeZkVbaJwqjRjcd2oDr7v4U5J/colecao1.json"
  );
  const data = (await response.json()) as Sticker[];
  return data;
}
