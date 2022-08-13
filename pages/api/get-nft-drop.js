import { nftDrop } from "../../utils/nftDrop"

export default async function handler(req, res) {
    const claimed = await nftDrop.getAllClaimed()
    const total = await nftDrop.totalSupply()
    const claimConditions = await nftDrop.claimConditions.getAll()

    const claimedSupply = claimed.length
    const totalSupply = total.toNumber()
    const nftPrice = claimConditions[0].currencyMetadata.displayValue

    res.status(200).json({
        claimedSupply,
        totalSupply,
        nftPrice,
    })
}