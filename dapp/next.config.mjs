/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    NFT_PRICE: process.env.NFT_PRICE,
    OPENSEA_URL: process.env.OPENSEA_URL,
    CHAIN_ID: process.env.CHAIN_ID,
  },
};

export default nextConfig;
