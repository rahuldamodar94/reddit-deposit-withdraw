const Matic = require('@maticnetwork/maticjs').default
const config = require('./config')
const from = config.FROM_ADDRESS // from address

var transactionHash = '0xec57bf36102a3bb9eee1bddf965052c022e5514301827e726f360515aea4d9b1' // Insert txHash generated from initiate-withdraw.js 

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
    matic.withdraw(transactionHash, {
        from,
    }).then((res) => {
        console.log(res) // eslint-disable-line
    })
})