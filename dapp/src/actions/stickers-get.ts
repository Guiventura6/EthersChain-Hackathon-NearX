"use server";

export type Sticker = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default async function stickersGet() {
  const response = await fetch(
    "https://jade-eldest-pike-94.mypinata.cloud/ipfs/QmZBD3v8g57uvWt4k8nQD7xfuxKi9JQF1eNo79kMBhGNtP/colecao1.json"
  );
  const data = (await response.json()) as Sticker[];
  return data;
}
