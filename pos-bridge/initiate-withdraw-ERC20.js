const MaticPOSClient = require("@maticnetwork/maticjs").MaticPOSClient;
const config = require("./config.json");

const maticPOSClient = new MaticPOSClient({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.PLASMA_ROOTCHAIN_ADDRESS,
  posRootChainManager: config.POS_ROOT_CHAIN_MANAGER_ADDRESS,
});

const from = config.FROM_ADDRESS;
// const token = config.MUMBAI_ERC20; // ERC20 token address
const token = config.MUMBAI_WETH; // ERC20 token address
const amount = "10000000000000000"; // amount in wei

async function execute() {
  maticPOSClient.setWallet(config.PRIVATE_KEY);

  let response = await maticPOSClient.burnERC20(token, amount, {
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
