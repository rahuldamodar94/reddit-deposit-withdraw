const Matic = require("@maticnetwork/maticjs").default;
const config = require("./config");
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

const recipient = "0x4e8C5DCD73Df0448058E28B5205D1C63df7B30D9";

const token = config.MUMBAI_ERC20; // test token address
const amount = "10000000000000000000"; // amount in wei

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .transferERC20Tokens(token, recipient, amount, {
      from,
      // parent: true
    })
    .then((res) => {
      console.log("hash", res);
    });
});
