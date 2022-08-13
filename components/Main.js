
const Main = ( { mintNFT, claimedSupply, totalSupply, nftPrice } ) => {


    const style = {
        wrapper: `flex items-center justify-center h-screen`,
        heroCta: 'flex flex-col justify-center items-center space-x-10',
        mintButton: 'z-10 ml-8 cursor-pointer rounded-xl border border-black bg-transparent px-8 py-4 font-semibold text-black transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
    } 
  
    return (
      <main className={style.wrapper}>
              <div className={style.heroCta}>
                  <button onClick={mintNFT} className={style.mintButton}>
                          Mint Your NFT ({nftPrice} ETH)
                  </button>  
                  <p>
                    {claimedSupply} / 5 claimed
                  </p>
              </div>
      </main>
  )
}

export default Main
