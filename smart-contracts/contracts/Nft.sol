// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RemixCancunNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter, nftCountPerUser;


    constructor(uint256 _maxNFTs) ERC721("RemixCancunNFT", "RCNFT") Ownable(msg.sender) {
        tokenCounter = 0, maxNFTsPerUser = _maxNFTs;
    }

    function mintNFT(address recipient, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        require(nftCountPerUser[to] < maxNFTsPerUser, "Max NFT limit reached");
        nftCountPerUser[to]++;
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter += 1;
        return newTokenId;
    }

    function transfer(address from, address to, uint256 tokenId) public {
        require(msg.sender == from, "Caller is not the owner");
        require(balanceOf(from) > 0, "Sender has no NFTs");
        
        _transfer(from, to, tokenId);
        nftCountPerUser[from]--;
        nftCountPerUser[to]++;
    }

    
    function getNFTCount(address user) public view returns (uint256) {
        return nftCountPerUser[user];
    }
}
