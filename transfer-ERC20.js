const Matic = require('@maticnetwork/maticjs').default
const config = require('./config')
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
    maticProvider: config.MATIC_PROVIDER,
    parentProvider: config.PARENT_PROVIDER,
    rootChain: config.ROOTCHAIN_ADDRESS,
    withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
    depositManager: config.DEPOSITMANAGER_ADDRESS,
    registry: config.REGISTRY,
})

const recipient = '0x92B67b2093D76338840D2A84fCDd078B5042b53a'

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '1000000000000000000' // amount in wei

matic.initialize().then(() => {
    matic.setWallet(config.PRIVATE_KEY)
    matic.transferERC20Tokens(token, recipient, amount, {
        from,
        // parent: true, // For token transfer on Main network (false for Matic Network)
    }).then((res) => {
        console.log("hash", res)
    })
})