import { ethers } from 'ethers'
import { useEffect , useState} from 'react'
import axios from 'axios'
import NFT from '../deploy/NFT.json'
import Market from '../deploy/NFTMarket.json'
import { useSelector, useDispatch } from 'react-redux'
import {load_nft} from './nftSlice'
export default function Shownft() {
  
  const [loadingState, setLoadingState] = useState('not-loaded')

  const nft_s = useSelector((state) => state.reducer.value)
  const dispatch = useDispatch()

  
  useEffect(() => {

    loadNFTs()
  },[])


  async function loadNFTs() {    
    const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
    const tokenContract = new ethers.Contract(NFT.address, NFT.abi, provider)
    const marketContract = new ethers.Contract(Market.address, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()
    
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    dispatch(load_nft(items))
    setLoadingState('loaded') 

     
  }

  

   console.log(nft_s)


  if (loadingState === 'loaded' ) {



  return (
    <div>
      <div>
       {nft_s[1].name}
      </div>

    </div>
  )
  }

  return (<div>"loading"</div>)

  
}
