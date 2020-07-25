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

var transactionHash =
  "0xe7faa8c772f248e7b55e2a1a22c5127498151a3f3008395f01c95a25e707856f"; // Insert txHash generated from initiate-withdraw.js

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
