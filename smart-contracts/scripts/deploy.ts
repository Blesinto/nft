import { ethers } from "hardhat";

async function main() {
  // Get the signer (your wallet)
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory
  const NFT = await ethers.getContractFactory("RemixCancunNFT");

  // Deploy the contract
  const nft = await NFT.deploy();

  console.log("Contract deployed to address:", nft.address);
  
  // Optionally, mint an NFT as a test (ensure mintNFT method exists in your contract)
  const tokenURI = "https://example.com/token-uri"; // Replace with your token URI
  const tx = await nft.mintNFT(deployer.address, tokenURI);
  await tx.wait();
  console.log("NFT Minted:", tx.hash);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
