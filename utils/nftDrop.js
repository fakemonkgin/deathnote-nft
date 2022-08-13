import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const sdk = new ThirdwebSDK('goerli')
const nftDrop = sdk.getNFTDrop("0xb5A59D803F0E5a378F494389fCb1097Bb1F8F280")

export { nftDrop }