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

var transactionHash = '0xea14d35a3727061a6d2885e28f7378ed8b9235fe77c030a2fd1c306040ced7ff' // Insert txHash generated from initiate-withdraw.js 

matic.initialize().then(() => {
    matic.setWallet(config.PRIVATE_KEY)
    matic.withdraw(transactionHash, {
        from,
    }).then((res) => {
        console.log(res) // eslint-disable-line
    }).catch(err => {
        console.log(err)
    })
})