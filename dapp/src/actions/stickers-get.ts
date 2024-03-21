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

/*
export default async function stickersGet() {
  const response = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0"
  );
  const data = (await response.json()) as Sticker[];
  return data;
}
*/

/*
export default async function getIPFSMetadata(directoryHash: any) {
  const response = await fetch(`https://ipfs.io/ipfs/${directoryHash}`);
  const directoryData = await response.json();

  // Iterar sobre os arquivos no diretório
  const data = [];
  for (const file of directoryData) {
    // Para cada arquivo, fazer uma solicitação para obter os metadados individuais
    const metadataResponse = await fetch(`https://ipfs.io/ipfs/${file.hash}`);
    const metadata = (await metadataResponse.json()) as Sticker[];
    data.push(metadata);
  }

  return data;
}

// Uso da função para buscar os metadados do diretório IPFS especificado
const directoryHash = "QmNUh5mXfJWGDS7ve29pQdkVr67y4ptt7gLW15zZkaSVua";
const metadataList = await getIPFSMetadata(directoryHash);
console.log(metadataList);
*/
