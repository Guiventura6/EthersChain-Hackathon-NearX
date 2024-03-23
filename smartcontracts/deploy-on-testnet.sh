source .env

forge script scripts/deploy.testnet.s.sol:OPSepolia \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC \
    --broadcast
