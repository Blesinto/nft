import { ethers } from "hardhat";
import { RemixCancunNFT } from "../typechain-types";
async function main() {
  // Get the deployer's wallet
  
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Compile and deploy the contract
  const NFT = await ethers.getContractFactory("RemixCancunNFT");
  const nft = (await NFT.deploy(10)) as RemixCancunNFT;
  await nft.deployed();

  console.log("Contract deployed to address:", nft.address);

  // Mint a test NFT (for testing purposes)
  const testTokenURI = "https://example.com/token-uri";
  const mintTx = await nft.mintNFT(deployer.address, testTokenURI);
  await mintTx.wait();

  console.log("NFT Minted:", mintTx.hash);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
