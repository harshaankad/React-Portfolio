import pro1 from "../assets/pro1.jpg"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro3.jpg"

const ProjectCardData=[
    {
        imgsrc: pro1,
        title: "CrowdFunding",
        text: "A CrowdFunding project using Solidity Foundry Chainlink Data Feeds which has its own deploy script and test files,Sepolia test-net is used here",
        view: "https://github.com/harshaankad/foundary-fund-me-f23"
    },

     {
        imgsrc: pro2,
        title: "Raffle",
        text: "A completely fair lottery system using Solidity Foundry Chainlink VRF's and ChainLink automation which has its own deploy script and test files ",
        view: "https://github.com/harshaankad/foundary-lottery"
    },

    {
        imgsrc: pro3,
        title: "NFT",
        text: "A on-chain static and dynamic NFT created using OpenZepellin which can be imported into your metamask wallet.Can be deployed on anvil or Sepolia ETH",
        view: "https://github.com/harshaankad/foundary-NFT"
    }
]

export default ProjectCardData;