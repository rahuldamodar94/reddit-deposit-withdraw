const Matic = require("@maticnetwork/maticjs").default;

const config = require("../config");

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

const token = config.MUMBAI_ERC20; // test token address
const amount = "100";

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .startWithdrawMintableERC20(token, amount, {
      from,
      gasPrice: "10000000000",
    })
    .then((res) => {
      console.log(res); // eslint-disable-line
    });
});
