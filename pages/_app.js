import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
    desiredChainId={ChainId.Goerli}
    chainRpc = {{
      [ChainId.Goerli]: `https://eth-goerli.g.alchemy.com/v2/KbH3hiWHoUt9Otmm7LADubG7Q2wz8Tqh`
    }}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
