import Main from "../components/Main"
import Image from "next/image"
import { useAddress, useMetamask, useNFTDrop } from '@thirdweb-dev/react'
import { useEffect, useState } from "react"
import useFetcher from '../utils/fetch'
import Loading from '../components/Loading'
import NFTDisplay from '../components/NFTDisplay'

const Home = () => {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  const nftDrop = useNFTDrop("0xb5A59D803F0E5a378F494389fCb1097Bb1F8F280")
  const fetcher = useFetcher()
  const [loading, setLoading] = useState(false)
  const [claimedSupply, setClaimedSupply] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [nftPrice, setNFTPrice] = useState(0)

  const style = {
    wrapper:`flex items-center justify-center h-screen`,
    button: `rounded-lg border border-black z-10 cursor-pointer px-5 py-2 hover:bg-black hover:text-white`,
    image: `opacity-20`,
    mobileDisplaySection: 'h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4',
    desktopDisplaySection: 'hidden lg:flex flex-1 lg:w-1/3',
  }

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button className={style.button} onClick={connectWithMetamask}>Connect Wallet</button>
      </div>
    )
  }

  useEffect(() => {
    if (!address) return

    const getNFTDropDetails = async () => {
        try {
            const { claimedSupply, totalSupply, nftPrice } = await fetcher.get('/api/get-nft-drop')
            console.log(claimedSupply, totalSupply, nftPrice)
            setClaimedSupply(claimedSupply)
            setTotalSupply(totalSupply)
            setNFTPrice(nftPrice)
    
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    getNFTDropDetails()
}, [address])

const mintNFT = async () => {
    if (!nftDrop) return

    setLoading(true)
    try {
        const quantity = 1
        const transaction = await nftDrop.claimTo(address, quantity)

        const claimedNFT = transaction[0]
        if (claimedNFT) await allowlist.update(address)
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}


  return (
    <>
     {address ? (
        <div className={style.wrapper}>
       
        {loading && <Loading />}
        <div className={style.mobileDisplaySection}>
          <NFTDisplay />
        </div>
           <Main mintNFT={mintNFT} claimedSupply={claimedSupply} totalSupply={totalSupply} nftPrice={nftPrice} />
           <section className={style.desktopDisplaySection}>
          <NFTDisplay />
          </section>
        </div> 
        ) : Auth()} 
    <Image 
    src="/l.jpeg"
    className={style.image}
    alt="bgpic"
    layout="fill"
    />
    </>
  )
}

export default Home
