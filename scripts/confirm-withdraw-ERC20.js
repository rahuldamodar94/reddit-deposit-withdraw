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
  "0xd250a8426a8ed9e9fbf3dcf5acfad7967dc0ecdc9bd4e2627bfd0e94353109f3"; // Insert txHash generated from initiate-withdraw.js

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .withdrawMintableERC20Token(transactionHash, predicate, {
      from,
      gasPrice: "10000000000",
    })
    .then((res) => {
      console.log(res); // eslint-disable-line
    })
    .catch((err) => {
      console.log(err);
    });
});
