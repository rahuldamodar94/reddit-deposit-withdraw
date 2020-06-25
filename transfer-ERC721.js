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

const recipient = '0x28e9E72DbF7ADee19B5279C23E40a1b0b35C2B90'

const token = config.MUMBAI_ERC721 // test token address
const tokenId = '1' // NFT token Id

matic.initialize().then(() => {
    matic.setWallet(config.PRIVATE_KEY)
    matic.transferERC721Tokens(token, recipient, tokenId, {
        from,
        // parent: true
    }).then((res) => {
        console.log("hash", res)
    })
})