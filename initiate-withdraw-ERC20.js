
const Matic = require('@maticnetwork/maticjs').default

const config = require('./config')

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '1000000000000000000'

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

matic.initialize().then(() => {
    matic.setWallet(config.PRIVATE_KEY)
    matic
        .startWithdraw(token, amount, {
            from,
        }).then((res) => {
            console.log(res) // eslint-disable-line
        })
})