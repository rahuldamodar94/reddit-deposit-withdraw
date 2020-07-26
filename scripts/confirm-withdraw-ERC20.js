const Matic = require("@maticnetwork/maticjs").default;
const config = require("../config");
const from = config.FROM_ADDRESS; // from address
const predicate = config.MINTABLE_PREDICATE;

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.ROOTCHAIN_ADDRESS,
  withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
  depositManager: config.DEPOSITMANAGER_ADDRESS,
  registry: config.REGISTRY,
});

var transactionHash =
  "0x07c2ccac1614d4519e7249a9a1bc1fe4cc906eaf3d8fc7d0754ff1c18263c0d8"; // Insert txHash generated from initiate-withdraw.js

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .withdrawMintableERC20Token(transactionHash, predicate, {
      from,
    })
    .then((res) => {
      console.log(res); // eslint-disable-line
    })
    .catch((err) => {
      console.log(err);
    });
});
