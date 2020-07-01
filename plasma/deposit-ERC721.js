const Matic = require("@maticnetwork/maticjs").default;
const config = require("./config.json");

// console.log(config)
const from = config.FROM_ADDRESS; // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.ROOTCHAIN_ADDRESS,
  withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
  depositManager: config.DEPOSITMANAGER_ADDRESS,
  registry: config.REGISTRY,
});

const token = config.GOERLI_ERC721; // ERC721 token address
const tokenId = "2"; // amount in wei

async function execute() {
  await matic.initialize();
  matic.setWallet(config.PRIVATE_KEY);
  let response = await matic.safeDepositERC721Tokens(token, tokenId, {
    from,
    gasPrice: "10000000000",
  });
  return response;
}

execute()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
