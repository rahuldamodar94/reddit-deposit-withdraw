const Matic = require('maticjs').default
const config = require('./config')
const token = config.ROPSTEN_TEST_TOKEN // test token address
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
    maticProvider: config.MATIC_PROVIDER,
    parentProvider: config.PARENT_PROVIDER,
    rootChain: config.ROOTCHAIN_ADDRESS,
    registry: config.REGISTRY,
    withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
    depositManager: config.DEPOSITMANAGER_ADDRESS,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`


matic.balanceOfERC20(from, token, { from, }).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})