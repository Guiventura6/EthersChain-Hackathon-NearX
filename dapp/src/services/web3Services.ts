import { ethers } from "ethers";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS: string = `${process.env.CONTRACT_ADDRESS}`;
const NFT_PRICE: bigint = ethers.parseEther(`${process.env.NFT_PRICE}`);
const CHAIN_ID: number = parseInt(`${process.env.CHAIN_ID}`);

export async function login(): Promise<string> {
  if (!window.ethereum) throw new Error(`Wallet not found!`);

  const provider = new ethers.BrowserProvider(window.ethereum);

  const accounts: string[] = await provider.send("eth_requestAccounts", []);

  if (!accounts || !accounts.length) throw new Error(`Wallet not permitted!`);

  await provider.send("wallet_switchEthereumChain", [
    {
      chainId: ethers.toBeHex(CHAIN_ID),
    },
  ]);

  return accounts[0];
}
