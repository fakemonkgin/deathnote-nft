import Image from "next/image"

const styles = {
    wrapper: 'bg-animate flex-1 rounded-3xl flex lg:flex-col items-center relative',
}

const NFTDisplay = () => {
    const nfts = ['/p1.jpeg', '/p2.jpeg', '/p3.jpeg', '/p4.jpeg', '/p5.jpeg']

    return (
        <div className={styles.wrapper}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 px-15">
                {nfts.map((nft, index) => (
                    <div key={index} className="relative h-[100px] w-[100px] flex-shrink-0 snap-center lg:h-[200px] lg:w-[200px]">
                        <Image src={nft} layout="fill" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NFTDisplay